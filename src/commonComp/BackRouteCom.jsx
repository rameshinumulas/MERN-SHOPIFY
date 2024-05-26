import React from 'react'
import { useNavigate } from 'react-router-dom'


function BackRouteCom({ backText='Back', backRoute='/' }) {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate(backRoute)
    }
    return (
        <div role='button' onClick={handleClickBack}>
            <p>{' < '} {backText}</p>
        </div>
    )
}

export default BackRouteCom
