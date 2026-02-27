import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';



export class News extends Component {

    constructor(){
    super();
    this.state ={
        articles : [],
        loading : true,
        page : 1,
        totalResults : 0
        }
    }

    async componentDidMount(){
      // let url = "https://newsapi.org/v2/top-headlines?apiKey=8aa350ecf0884e96aad75799d10796b9&q=INDIA";
      let url = `https://newsapi.org/v2/top-headlines?apiKey=8aa350ecf0884e96aad75799d10796b9&country=us&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults});
    }

    handlePrevClick = async () =>{
      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?apiKey=8aa350ecf0884e96aad75799d10796b9&country=us&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles
      })
    }

    handleNextClick = async () =>{
      console.log("Next");
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?apiKey=8aa350ecf0884e96aad75799d10796b9&country=us&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page : this.state.page + 1,
          articles: parsedData.articles
        })
      }
    }

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        <Spinner/>
        <div className='row'>
        {this.state.articles.map((element) => {
         return  <div className='col-md-3 my-3' key = {element.url} >
        <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newUrl = {element.url}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(this.state.page<=1) > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News