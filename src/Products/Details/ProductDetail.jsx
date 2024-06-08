import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductById } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import RatingComp from '../../commonComp/RatingComp';
import NumberFormatCom from '../../commonComp/NumberFormatCom';
import { dateTimeFormatDisplay } from '../../commonComp/helpers';
import { ProductInfo } from '../../commonComp/ProductInfo';
import BackRouteCom from '../../commonComp/BackRouteCom';

export default function ProductDetail(props) {
  // const { match: { params: { id } } } = props;
  const { id } = useParams();
  const getDiscountPrice = (listPrice, discount) => {
    let discountPrice = (discount / 100) * listPrice;
    const totlaPrice = discountPrice + listPrice;
    return totlaPrice;
  }
  const dispatch = useDispatch();
  const { productDetailsById, productList } = useSelector(state => state);
  console.log(productDetailsById, 'dd---');
  useEffect(() => {
    dispatch(getProductById(id));
  }, [])
  useEffect(() => {
    if (productDetailsById?.category) {
      dispatch(getAllProducts(productDetailsById?.category))
    }
  }, [productDetailsById, dispatch])
  return (
    <div className='row p-3'>
      <BackRouteCom
        backRoute='/'
      />
      <div className='col-4'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide w-"
          data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            {productDetailsById?.images?.map((eachCur, index) => (
              <div className={`carousel-item${index === 0 ? " active" : ""}`} key={index}>
                <img src={eachCur} class="img-fluid d-block w-100 h-100" alt="..."></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='col-4'>
        <p className="h2">
          {productDetailsById?.title}
        </p>
        <p>
          <RatingComp value={productDetailsById?.rating} />
        </p>
        <NumberFormatCom
          value={productDetailsById?.price}
          prefix="$"
          thousandSeparator={true}
          displayType={'text'}
          isBold
        />
        <div style={{ display: 'flex' }}>
          <NumberFormatCom
            value={parseFloat(getDiscountPrice(productDetailsById?.price, productDetailsById?.discountPercentage)).toFixed(0)}
            prefix="$"
            thousandSeparator={true}
            displayType={'text'}
            strikeOut
            isBold
          />
          <NumberFormatCom
            value={productDetailsById?.discountPercentage}
            prefix=""
            thousandSeparator={true}
            displayType={'text'}
            suffix='%'
            className='ps-2'
          />
        </div>
        <div className='row'>
          <div className='col-3'>
            <p className='fw-bold m-0'>Brand</p>
            <p className='fw-bold m-0'>Category</p>
          </div>
          <div className='col-5'>
            <p className='fw-normal m-0'>{productDetailsById?.brand || '-'}</p>
            <p className='fw-normal m-0'>{productDetailsById?.category || '-'}</p>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <p className='fw-bold m-0'>About the product</p>
            <p className='fw-normal'>
              {productDetailsById?.description}
            </p>
          </div>
          <div className='d-flex justify-content-between p-3'>
          <button className='btn btn-primary text-uppercase btn-sm'>Add to cart</button>
          <button className='btn btn-warning text-uppercase btn-sm'>Buy now</button>
          <button className='btn btn-danger text-uppercase btn-sm'>Add to wishlist</button>
        </div>
        </div>
      </div>
      <div className='col-4'>
        <p className='h2'>Reviews</p>
        {productDetailsById?.reviews?.map(eachReview => (
          <>
            <div style={{ display: 'flex' }}>
              <p className='fw-bold m-0' style={{ width: '40%' }} >{eachReview?.reviewerName}
              </p>
              <span className='text-black-50 ps-4'>
                {dateTimeFormatDisplay(eachReview?.date)}
              </span>
            </div>
            <RatingComp value={eachReview?.rating} />
            <p className='fw-normal'>{eachReview?.comment}</p>
          </>
        ))}
      </div>
      <div className='border border-white-50' />
      <div className='col'>
        <p className='h2 pt-4 ps-4'>Similar Products</p>
        <ProductInfo
          productResults={productList?.data || []}
        />
      </div>
    </div>
  )
}
