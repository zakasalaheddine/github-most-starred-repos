import React, { useEffect, useState } from 'react';
import RepoCard from './components/RepoCard.component';
import axios from 'axios'
import './App.css'

function App() {
  const [trendingRepos, setTrendingRepos] = useState([])
  useEffect(() => {
    const getTrendingRepos = async () => {
      try {
        const result = await axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
        console.log(result.data);
        setTrendingRepos(result.data.items);
      } catch (err) {
        console.error(err);
      }
    }
    getTrendingRepos();
  }, [])
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {
          trendingRepos && trendingRepos.map(repo => (
            <RepoCard repo={repo} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
