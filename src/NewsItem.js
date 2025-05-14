import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
   let {title,description,imageUrl,url,author,date,source} = this.props;
    return (
      <div>
       <div className="card">
       {/* below i have set src as if imageurl is null then show this default image in link otherwise show imageUrl*/}
  <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/ap25125708990388.jpg?c=16x9&q=w_800,c_fill": imageUrl }
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
    <p className="card-text"><small className="text-body-secondary">source: {source} </small></p>
    <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
