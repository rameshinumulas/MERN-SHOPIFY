import React, { Component } from 'react'

export default class ProductInfo extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
              alt='product-thumbnail' className='card-img-top'
              width="100%" height="100%" />
            <div className='card-body'>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <h4 className='card-title'>iPhone 9</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
