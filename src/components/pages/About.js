import React from 'react';

export default function About() {
    return (
        <div className='content-container about'>
            
            <img className='avatar' src={process.env.PUBLIC_URL + "/images/avatar.jpeg"} />

            <p>
                short Bio
            </p>
        </div>
    )
}