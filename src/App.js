import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY
  pageSize = 6;

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
      
      <Router>
        <Navbar/>
        <LoadingBar
        color="red"
        progress={this.state.progress}
      />
        <Routes>
          <Route  exact  path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" pageSize = {this.pageSize} country = "us" category = "General"/>}/>

          <Route exact  path="/business" element={<News setProgress = {this.setProgress} key="business"  apiKey = {this.apiKey} pageSize = {this.pageSize} country = "us" category = "Business"/>}/>

          <Route  exact path="/sports" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key="sports" pageSize = {this.pageSize} country = "us" category = "Sports"/>}/>

          <Route  exact path="/entertainment" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key="entertainment" pageSize = {this.pageSize} country = "us" category = "Entertainment"/>}/>

          <Route  exact path="/health" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key="health" pageSize = {this.pageSize} country = "us" category = "Health"/>}/>

          <Route  exact path="/technology" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key="technology" pageSize = {this.pageSize} country = "us" category = "Technology"/>}/>

          <Route  exact path="/science" element={<News setProgress = {this.setProgress}  apiKey = {this.apiKey} key="science" pageSize = {this.pageSize} country = "us" category = "Science"/>}/>

        </Routes>
        </Router>
      </div>
    )
  }
}
