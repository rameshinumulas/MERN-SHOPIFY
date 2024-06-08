import React from 'react'

export default function RatingComp({ value }) {
    const stars = [];
    const ceilValue = Math.ceil(value);
    for (let i = 1; i <= 5; i++) {
        if (i <= value) {
            stars.push(<span class="fa fa-star checked" />);
        } else if (i === ceilValue && value % 1 !== 0) {
            stars.push(<i class="fa fa-star-half-full checked"></i>);
        } else {
            stars.push(<span class="fa fa-star unCheck" />);
        }
    }

    return <div>{stars} <span>{parseFloat(value).toFixed(2)}</span></div>;
}
