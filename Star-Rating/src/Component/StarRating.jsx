import {FaStar} from 'react-icons/fa';
import './styles.css'
import { useState } from 'react';

export function StarRating({length = 5}){

    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);


   
    return (
        <div className='container'>
            {
                [...Array(length)].map((_, index) => {
                    let starNumber = index + 1;
                 return ( <FaStar 
                    style={{fontSize: '2em'}} 
                    key={index} 
                    onMouseEnter={() => setHover(starNumber)}
                    onMouseLeave={() => setHover(starNumber)}
                    onClick={() => setRating(starNumber)}
                    className={starNumber <= (hover || rating) ? 'active' : 'inactive'}
                    /> )

                })
            }
        </div>
    )
}