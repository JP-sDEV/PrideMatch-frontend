import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import {Image, Row } from "react-bootstrap";
import DisplayGames from "./components/landing/DisplayGames"
import "./components/landing/Landing.css"
import React, { useContext } from "react";
import top10games from "./assets/top10games.png";

import { Context, LoadStateFromLocal } from "./store";

function App() {
    const {state, setState} = useContext(Context);
    if (state) {
        LoadStateFromLocal(setState)
    }else {
        console.log("no state present")
    }

    return (
        <div className="App background">
            <NavigationBar/>
            <Image src={top10games} alt="Top 10 Games"/>
            <DisplayGames />
        </div>
    )
}

export default App;
