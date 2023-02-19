import React from 'react';

export default function Portfolio() {
    return (
        <div>
            <main>
                <div class='content-container portfolio'>
                    <div className="project-container">
                        <div class='image-container'>
                            <img className="project-img" src={process.env.PUBLIC_URL + "/images/NoteTaker.png"} alt="Note-Taker Application" />
                        </div>
                        <div class='link-container'>
                            <a className="project-github" href="https://github.com/briancollins02/challenge11-ExpressNotes/"> <img className="github-logo" 
                            src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />  </a>
                            <a className="project-deploy" href="https://warm-stream-37708.herokuapp.com"><p> Note Taker </p></a>
                        </div>
                    </div>
                    <div className="project-container">
                        <div class='image-container'>
                            <img className="project-img" src={process.env.PUBLIC_URL + "/images/weather.png"} alt="Weather Forecast Application" />
                        </div>
                        <div class='link-container'>
                            <a className="project-github" href="https://github.com/briancollins02/Challenge06-WeatherApi/"> <img className="github-logo" 
                            src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />  </a>
                            <a className="project-deploy" href="https://briancollins02.github.io/Challenge06-WeatherApi/"><p>Weather App</p></a>
                        </div>
                    </div>
                    <div className="project-container">
                        <div class='image-container'>
                            <img className="project-img" src={process.env.PUBLIC_URL + "/images/passGen.png"} alt="Password Generator Application" />
                        </div>
                        <div class='link-container'>
                            <a className="project-github" href="https://github.com/briancollins02/challenge03-PasswordGenerator/"> <img className="github-logo" 
                            src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />  </a>
                            <a className="project-deploy" href="https://briancollins02.github.io/challenge03-PasswordGenerator/"><p> PWGenerator </p></a>
                        </div>
                    </div>
                    <div className="project-container">
                        <div class='image-container'>
                            <img className="project-img" src={process.env.PUBLIC_URL + "/images/timedQuiz.png"} alt="Timed-Quiz Application" />
                        </div>
                        <div class='link-container'>
                            <a className="project-github" href="https://github.com/briancollins02/challenge04-TimedQuiz/"> <img className="github-logo" 
                            src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />  </a>
                            <a className="project-deploy" href="https://briancollins02.github.io/challenge04-TimedQuiz/"><p> Trivia Quiz </p></a>
                        </div>
                    </div>
                    <div className="project-container">
                        <div class='image-container'>
                            <img className="project-img" src={process.env.PUBLIC_URL + "/images/watchZone.png"} alt="Watch-Zone Ecommerce Application" />
                        </div>
                        <div class='link-container'>
                            <a className="project-github" href="https://github.com/YehOkiHub/EcommerceStore/"> <img className="github-logo" 
                            src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />  </a>
                            <a className="project-deploy" href="https://rocky-everglades-44813.herokuapp.com/"><p> Watch Zone </p></a>
                        </div>
                    </div>
                    <div className="project-container">
                        <div class='image-container'>
                            <img className="project-img" src={process.env.PUBLIC_URL + "/images/workScheduler.png"} alt="Note-Taker Application" />
                        </div>
                        <div class='link-container'>
                            <a className="project-github" href="https://github.com/briancollins02/challenge05-SimplePlanner/"> <img className="github-logo" 
                            src={process.env.PUBLIC_URL + "/images/github-link.png"} alt="Github Logo" />  </a>
                            <a className="project-deploy" href="https://briancollins02.github.io/challenge05-SimplePlanner/"><p> Work Planner </p></a>
                        </div>
                    </div>
                </div>   
            </main>
        </div>
    )
}