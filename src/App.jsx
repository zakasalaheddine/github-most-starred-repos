import React, { useEffect, useState } from 'react';
import RepoCard from './components/RepoCard.component';
import axios from 'axios'
import moment from 'moment'
import './App.css'
import Loading from './components/Loading.component';

function App() {
  const [trendingRepos, setTrendingRepos] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  window.onscroll = () => {
    if (isLoading || !hasMore) return;
    if (window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    const getTrendingRepos = async () => {
      setIsLoading(true);
      try {
        const today = moment().subtract(30, 'days').format("YYYY-MM-DD");
        const result = await axios.get(`https://api.github.com/search/repositories?q=created:>${today}&sort=stars&order=desc${currentPage > 1 ? '&page=' + currentPage : ''}`)
        setTrendingRepos((prevRepos) => [...prevRepos, ...result.data.items])
      } catch (err) {
        setHasMore(false);
        console.error(err);
      }
      setIsLoading(false);
    }
    getTrendingRepos();
  }, [currentPage])

  
  
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {
          trendingRepos && trendingRepos.map(repo => (
            <RepoCard repo={repo} key={repo.id} />
          ))
        }
      </div>
      {
        isLoading && <Loading />
      }
    </div>
  );
}

export default App;
