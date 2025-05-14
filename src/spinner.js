import React, { Component } from 'react'
import iphone from './Iphone-spinner-2.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={iphone} alt="loading" />
      </div>
    )
  }
}
