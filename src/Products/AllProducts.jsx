import React from 'react'
import { useSelector } from 'react-redux'
import { ProductInfo } from '../commonComp/ProductInfo';

export default function AllProducts() {
  const { productList } = useSelector(state => state);
  return (
    <div className='row p-3'>
      <div className='col-2 card border-0 bg-gray'>
        <h5 className='fw-bold fs-5 text-black'>Categories</h5>
        {productList?.categoriesList?.map(cate => (
          <p key={cate} role='button' className='mb-2'>
            {cate}
          </p>
        ))}
      </div>
      <div className='col-10'>
      {productList?.data?.length > 0 && (
          <ProductInfo productResults={productList?.data || []} />
        )}
      </div>
    </div>
  )
}
