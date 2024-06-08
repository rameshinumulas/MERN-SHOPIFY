import React from 'react'

export default function Profile({ userDetails }) {
  return (
    <div>
      <div className='text-uppercase text-white fw-bold'> {userDetails?.firstName} {userDetails?.lastName} </div>
    </div>
  )
}
