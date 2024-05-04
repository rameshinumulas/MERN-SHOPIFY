import React from 'react';
import './productCard.css';

export const ProductInfo = (props) => {
  const { productResults } = props;
  console.log(productResults, 'resi')
  return (
    <div className='row p-4 global-family'>
      <h1 className='fw-bold'> Trending Products</h1>
      {productResults.map(eachProduct => (
        <div className='col-3 py-4' key={eachProduct.id}>
          <div className='card set-height'>
            {/* <div className='border'> */}
            <img src={eachProduct?.thumbnail}
              alt='product-thumbnail' className='card-img-top border'
              width="100%" height="100%"
              style={{ objectFit:'cover' }}
            />
            {/* </div> */}
            <div className='card-body'>
              <p class="card-text"><small class="text-muted">{eachProduct?.productCategory}</small></p>
              <h4 className='card-title'>{eachProduct?.producTitle}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
