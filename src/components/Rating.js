import React from 'react'
import { FaStar } from 'react-icons/fa';

const Rating = ({rate, setVal=()=>{}}) => {
    return (
        <div>
            {[...Array(5)].map((star, i)=>{

            const ratingValue = i +1 ;
            return (
                <label key ={i}>
                    <input type = 'radio' 
                        name = 'rate' 
                        value = {ratingValue}
                        onClick = {()=>setVal(ratingValue)}
                    />

                    <FaStar className = 'star' 
                        size ={25} 
                        color = {ratingValue <= rate ? '#ffc107': '#000'}
                    />
                    
                </label>
            )
            })}
        </div>
    )
}

export default Rating
