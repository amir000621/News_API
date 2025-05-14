import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

  

  //this static keyword is used for the usage of proptypes
  static defaultProps = {
    country:"in",
    pageSize: 6,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
    //state is used when we need to change something continue and prop is used when we do not need to change anything continously like kisi title ko mein change thodi krunga kisi news component ke liye to use ham as  a prop set krenge
    //har ek news ka url alag hai to ham use uniquely identifieer ki jgh pr use kr sakte hai as a key
  
    
//ye loading true hone pr ham spinner component ko show krna chahte hai jisse ki ek loading circle show hoga joki ham gif download krke laye hai google se
//at here i used props in constructor to change title according to category i changed
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page:1,
            totalResults:0,
           
        }
        document.title = `DailyNews_${this.props.category}`;//take the title from the category
    }

    async updateNews(){
      this.props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      
      this.setState({loading:true})

      let data = await fetch(url);//to fetch data from url
       this.props.setProgress(30);
      let parsedData = await data.json();// convert to json for better understandings 
       this.props.setProgress(70)
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,
    });
    this.props.setProgress(100)
    }

    //async function wait for some promise to resolve,pageSize mean perpage ham kitne article rakhna chahte hai
   async componentDidMount(){
      this.updateNews();
      // jo uper article name ka array bnaya tha  ab usme is data ko set kr diya
    }

    //  handlePrevClick= async ()=>{
      
    //   this.setState({page:this.state.page-1})
    //   this.updateNews()
    // }

//math.ceil is used to do roundOff the value
    //  handleNextClick= async ()=>{
    //    this.setState({page:this.state.page+1})
    //    this.updateNews()
    // }

   fetchMoreData = async () => {
     if (this.state.articles.length >= this.state.totalResults) return;
  const nextPage = this.state.page + 1;
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${nextPage}&pageSize=${this.props.pageSize}`;

  try{
    const data = await fetch(url);
    const parsedData = await data.json();

    //if no more articles are returned,update state to show we are done
    if(parsedData.articles.length===0){
      this.setState({
        totalResults:this.state.articles.length //froce has more to be false
      })
      return
    }
     this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    page: nextPage
  });
  } catch(error){
    console.error("error fetching more news:",error)
  }
};

  render() {
    return (
        <>
        <h2 className='my-3 text-center'>Daily-News -- Top Headlines</h2>
        {/* this line says if loading is true then show spinner */}
    {this.state.loading && <Spinner/>} 
   
     <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}    
    hasMore={this.state.articles.length<this.state.totalResults}
    loader={<Spinner/>}
    //this end message is for ending the spinner so that at base loader does not show
    endMessage={
    <p style={{ textAlign: 'center', marginTop: '1rem' }}>
      <b>Yay! You have seen all the news.</b>
    </p>
  }
   
  >
  <div className="container">

        <div className='row'>
        {this.state.articles.map((element)=>{
      return <div className='col-md-4' key = {element.url}>
      {/* if title is persnt then givr element.title othewise "" same in description */}
        <NewsItem  title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} url = {element.url} author ={element.author} 
        date = {element.publishedAt} source={element.source.name} />
      </div>
        })}
      </div>
  </div>
      </InfiniteScroll>

{/* bcz now i have add infinite scroll therfore i remove prev and next */}
      {/* <div className='container d-flex justify-content-evenly'>
      <button disabled = {this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&#8592; prev </button>
      <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}  type="button" className="btn btn-primary" onClick={this.handleNextClick}> next&rarr;</button>
      </div> */}
     
      </>
    )
  }
}
