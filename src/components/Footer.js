import React from 'react';

export default function About() {
    return (
        <div className='footer'>
            <ul>
                <li>
                    <a className="project-github" href="https://github.com/briancollins02"> 
                        <img className="github-logo" src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />
                    </a>
                </li>
                <li>
                    <a className="project-github" href="https://www.linkedin.com/in/brian-collins-028a66266/"> 
                        <img className="github-logo" src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="Github Logo" />
                    </a>
                </li>
                <li>
                    <a className="project-github" href="https://twitter.com/BrianCollins02"> 
                        <img className="github-logo" src={process.env.PUBLIC_URL + "/images/twitter.webp"} alt="Github Logo" />
                    </a>
                </li>
            </ul>
        </div>
    )
}