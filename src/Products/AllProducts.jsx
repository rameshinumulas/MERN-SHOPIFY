import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductInfo } from '../commonComponents/ProductInfo';
import { getAllProducts } from '../redux/actions';

export default function AllProducts() {
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state);
  const [state, setState] = useState({});
  const handleGetCategoryData = (value) => {
    setState({ ...state, selectedCategory: value })
    dispatch(getAllProducts(value))
  }
  return (
    <div className='row p-3'>
      <div className='col-2 card border-0 bg-gray'>
        <h5 className='fw-bold fs-5 text-black'>Categories</h5>
        {productList?.categoriesList?.map(cate => (
          <p key={cate}
            role='button'
            className={`mb-2 ${state.selectedCategory === cate ? 'text-black fw-bold' : ''}`}
            onClick={() => handleGetCategoryData(cate)}
          >
            {cate}
          </p>
        ))}
      </div>
      <div className='col-10'>
        <div>Products &nbsp; {'>'} <span className='text-black fs-5 fw-bold'>{state.selectedCategory}</span></div>
      {productList?.data?.length > 0 && (
          <ProductInfo
            productResults={productList?.data || []}
            cardThree
          />
        )}
      </div>
    </div>
  )
}
