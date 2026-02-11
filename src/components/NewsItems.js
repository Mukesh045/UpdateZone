import React from 'react'

 const NewsItems =(props)=> {
  
    let {Tittle, Description, ImageUrl, Url, Date: publishedDate, Source} =props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}> 
    <img src={ImageUrl} className="card-img-top" alt="..."  />
  <div className="card-body">
    <h5 className="card-title">{Tittle}</h5>
    <p className="card-text">{Description}</p>
    <p className="card-text"><small className="text-muted">Last updated {new Date(publishedDate).toLocaleString()}</small></p>
    <p className="card-text"><small className="text-muted">Source: {Source}</small></p>
    <a rel="noreferrer" href={Url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
export default NewsItems;

