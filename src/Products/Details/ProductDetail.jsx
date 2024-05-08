import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../redux/actions';
import { useParams } from 'react-router-dom';

export default function ProductDetail(props) {
  // const { match: { params: { id } } } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetailsById } = useSelector(state => state);
  console.log(productDetailsById, 'dd---');
  useEffect(() => {
    dispatch(getProductById(id));
  }, [])
  return (
    <div className='row p-3'>
      <div className='col-4'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide w-"
          data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            {productDetailsById?.productImages?.map((eachCur, index) => (
              <div className={`carousel-item${index === 0 ? " active" : ""}`} key={index}>
                <img src={eachCur} class="img-fluid d-block w-100 h-100" alt="..."></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='col-6'>

      </div>
      Details used
    </div>
  )
}
