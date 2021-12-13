import React, {useState} from 'react'
import './getStarted.css'
import LoginModal from './loginModal'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default function GetStarted(props) {

    return (
        <div className="text-center getStarted-btn-div">
            <Link to='/login'><button 
            type="button" 
            className="btn btn-lg getStarted-btn">
                Get Started
            </button></Link>
        </div>
    )
}
