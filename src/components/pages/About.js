import React from 'react';

export default function About() {
    return (
        <div className='content-container about'>

            <p>
                Hi, I'm Brian, a full-stack web-developer based in Atlanta with a passion for learning
                and delivering the best work to my ability. I have a background in the arts and music that gives
                me a unique perspective and approach to finding the solutions to your web-related problems.
                Should you want to reach out and contact me to work on your next web-related endeavor or have me
                as a part of your team, a contact form is available, and my socials are linked at the bottom of this page.
            </p>
            <img className='avatar' src={process.env.PUBLIC_URL + "/images/avatar.jpeg"} />
        </div>
    )
}