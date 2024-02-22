import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import me from './me.png';



function Home () {
    return (
        <>
        <div className="container">
            <h1 className="title"> Maggie Swomley </h1>
            <div className="intro"><img className="me" src={me} alt="me"></img></div>
            <p className="about">About<br></br>Hello, my name is Maggie Swomley and I live in Thomaston, Connecticut.  I am currently a student at MIT's Coding Bootcamp. I have a BA in Biology from Occidental College in Los Angeles, California.  I am passionate about all things STEM.  A fun fact about me is that I love animals.  I have three pets; a dog, Mollie, and two cats, Kaisa and Nyktos. </p>
        </div>
        </>
         );
}

export default Home;