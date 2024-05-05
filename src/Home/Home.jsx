import React, { useEffect } from 'react'
import laptop from '../Icons/laptop-book.png'
import './home.css';
import { ProductInfo } from '../commonComp/ProductInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';

export default function Home() {
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])
  console.log(productList?.data, 'productList')
  return (
    <div>
      <div className="card bg-cardBg text-black p-4 fs-1">
        <div className='row'>
          <div className='col-6 pt-5 pb-5'>
            <h6 className='card-text fw-bold'>Starting At $9999</h6>
            <h1 className='card-title fw-bolder'>
              The best notebook collection 2024
            </h1>
            <h3 className='card-title fw-bolder'>Exclusive offer -10% off this week</h3>
            <button className='btn btn-primary fw-bolder'>Show now</button>
          </div>
          <div className='col-6'>
            <img alt='baclground'  variant="top" src={laptop} width='100%' height='100%' />
          </div>
        </div>
      </div>
      <div>
        <h1 className='fw-bold global-family' style={{ paddingTop: '20px', paddingLeft: '25px' }}> Trending Products</h1>
        {productList?.data?.length > 0 && (
          <ProductInfo productResults={productList?.data || []} />
        )}
      </div>
    </div>
  )
}
