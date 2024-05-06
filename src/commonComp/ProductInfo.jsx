import React from 'react';
import { useNavigate } from 'react-router-dom';
import './productCard.css';
import NumberFormatCom from './NumberFormatCom';
import heartIcon from '../Icons/heart-regular.svg'
import RatingComp from './RatingComp';
// import filledHeart from '../Icons/heart-solid.svg'

export const ProductInfo = (props) => {
  const { productResults, cardThree } = props;
  const navigate = useNavigate();
  const getDiscountPrice = (listPrice, discount) => {
    let discountPrice = (discount / 100) * listPrice;
    const totlaPrice = discountPrice + listPrice;
    return totlaPrice;
  }
  let colSetObj = 'col-xl-3 col-lg-3 col-md-4 col-sm-2 py-4';
  if (cardThree) colSetObj = 'col-lg-4 col-md-2 col-sm-1 py-4';
  return (
    <div className='row p-4 global-family'>
      {productResults.map(eachProduct => (
        <div className={colSetObj} key={eachProduct.id}>
          <div className='card set-height set-width'>
            <div className='border'>
              <img src={eachProduct?.thumbnail}
                alt='product-thumbnail' className='card-img-top border setFavImg'
                width="100%" height="100%"
                style={{ maxHeight: '240px', height: '240px' }}
                onClick={() => navigate(`/product/${eachProduct?._id}/view`)}
              />
              <img src={heartIcon} alt="heart" width={"25px"} className='set-img' />
            </div>
            <div className='card-body px-3'>
              <span class="card-text fw-bold"><small class="text-muted">{eachProduct?.productCategory}</small></span>
              <h5 className='card-title fw-bold title_click' role='button'
                onClick={() => navigate(`/product/${eachProduct?._id}/view`)}
              >
                {eachProduct?.producTitle.substring(0, 26)}
              </h5>
              <span>{eachProduct?.producTitle?.length > 26 ? '...' : ''}</span>
              <RatingComp value={eachProduct?.productRating} />
              <div className='row'>
                <div className='col'>
                  <NumberFormatCom
                    value={eachProduct?.productPrice}
                    prefix="$"
                    thousandSeparator={true}
                    displayType={'text'}
                  />
                  <NumberFormatCom
                    value={parseFloat(getDiscountPrice(eachProduct?.productPrice, eachProduct?.discountPercentage)).toFixed(0)}
                    prefix="$"
                    thousandSeparator={true}
                    displayType={'text'}
                    strikeOut
                  />
                  <NumberFormatCom
                    value={eachProduct?.discountPercentage}
                    prefix=""
                    thousandSeparator={true}
                    displayType={'text'}
                    suffix='%'
                  />
                </div>
                <div className='col'>
                  <button className='btn btn-primary text-uppercase btn-sm'>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
