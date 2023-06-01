import React from 'react'

const Tweet = () => {
  return (
    <div className='container'>
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body b-none">
            <div className="media">
            <img src="profile" className="mr-3" alt="Profile"/>
            <div className="media-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
        </div>
        </div>

    </div>
  )
}

export default Tweet