import React from 'react'
import moment from 'moment'

const RepoCardInfo = ({ stars, issues, createdAt, username }) => {
    const numberFormatter = (value) => {
        if (value >= 1000000) {
            value = (value / 1000000).toFixed(1) + "M"
        }
        else if (value >= 1000) {
            value = (value / 1000).toFixed(1) + "K";
        }
        return value;
    }
    return (
        <div className="card-info row">
            <div className="col-3">
                <span>Stars: <span className="badge badge-secondary">{numberFormatter(stars)}</span></span>
            </div>
            <div className="col-3">
                <span>Issues: <span className="badge badge-secondary">{numberFormatter(issues)}</span></span>
            </div>
            <div className="col-6">
                <small className="text-muted">{`Submitted ${moment(createdAt).fromNow()} by ${username}`}</small>
            </div>
        </div>
    )
}
export default RepoCardInfo;