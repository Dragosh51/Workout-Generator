import './landingPage.css';
import dragonHead from '../../assets/dragon head.png';
import React from 'react';
import { Link } from 'react-router-dom';


const landingPage = () => {
    return (
        <div className="landingPage">
            <div className="header">
                <div className="title">Dragon X Training</div>
                <div className="nav">
                    <button>Contact</button>
                    <button>Login</button>
                </div>
            </div>
            <div className="body">
                <div className="intro_card">
                <img src={dragonHead} alt="dragon head image" />
                    <p>Free online workout generator
                    <br/>Pre-made workouts
                    <br/>From a personal trainer with 5 years of experience
                    </p>
                </div>
                <button className="get_started"><Link to='/Home'>Get Started</Link>
                </button>
            </div>
        </div>
    )
}

export default landingPage;