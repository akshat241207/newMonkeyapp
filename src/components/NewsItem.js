import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newUrl, author, date, source} = this.props;
    return (
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}<span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-info">{source}</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newUrl} className="btn btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
