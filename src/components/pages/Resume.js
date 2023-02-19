import React from 'react';

export default function Resume() {
    return (
        <div className='content-container resume'>
            <h2>Technologies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
            <h3></h3>
            <a className='download-link' href={process.env.PUBLIC_URL + "/images/collinsBrian-Resume2022.pdf"} download>(resume.pdf)</a>
        </div>
    )
}