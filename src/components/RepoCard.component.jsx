import React from 'react'
import RepoCardInfo from './RepoCardInfo.component';

const RepoCard = ({ repo }) => {
    const { name, owner, description, stargazers_count, open_issues_count, created_at, html_url } = repo;
    return (
        <div className="col-8">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <a href={html_url} target="_blank" rel="noopener noreferrer">
                            <img src={owner.avatar_url} className="card-img" alt={owner.login} />
                        </a>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <a href={html_url} target="_blank" rel="noopener noreferrer">
                                <h5 className="card-title">{name}</h5>
                            </a>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer text-muted">
                            <RepoCardInfo
                                stars={stargazers_count}
                                issues={open_issues_count}
                                createdAt={created_at}
                                username={owner.login}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RepoCard;