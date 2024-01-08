import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import "./about.scss"

const About = () => {
  
    return (
    <div className='p-bar '>
        <div className="skills">
            <h1>My skills</h1> <br/>
            <p>Tech Asernal: Versatile and Proficient</p>
        </div>
        <div className="p-box">

            <div className="pbar-box">
                <p>HTML</p>
                <ProgressBar completed={90} animateOnRender={true}/>
            </div>

            <div className="pbar-box">
                <p>CSS</p>
                <ProgressBar completed={96} animateOnRender={true} bgColor='orange'/>
            </div>

            <div className="pbar-box">
                <p>JavaScript</p>
                <ProgressBar completed={94} animateOnRender={true}/>
            </div>

            <div className="pbar-box">
                <p>React</p>
                <ProgressBar completed={97} animateOnRender={true} bgColor='orange'/>
            </div>

            <div className="pbar-box">
                <p>Vite</p>
                <ProgressBar completed={95} animateOnRender={true}/>
            </div>

            <div className="pbar-box">
                <p>Version Control: Git</p>
                <ProgressBar completed={80} animateOnRender={true} bgColor='orange'/>
            </div>

            <div className="pbar-box">
                <p>Bootstrap</p>
                <ProgressBar completed={80} animateOnRender={true}/>
            </div>

            <div className="pbar-box">
                <p>Tailwind css</p>
                <ProgressBar completed={80} animateOnRender={true} bgColor='orange'/>
            </div>

            <div className="pbar-box">
                <p>PHP</p>
                <ProgressBar completed={50} animateOnRender={true}/>
            </div>

            <div className="pbar-box">
                <p>MySQLi</p>
                <ProgressBar completed={50} animateOnRender={true} bgColor='orange'/>
            </div>
        
        </div>
    </div>
  )
}

export default About