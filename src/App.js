//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Button from './components/Button.js';

const App = () => {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const updateScore = (team, points) => {
        team === 'home'
            ? setHomeScore(homeScore + points)
            : team === 'away'
            ? setAwayScore(awayScore + points)
            : alert(`${team} is not a team`);
    };

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <h2 className="home__name">Lions</h2>
                        <div className="home__score">{homeScore}</div>
                    </div>
                    <div className="timer">00:03</div>
                    <div className="away">
                        <h2 className="away__name">Tigers</h2>
                        <div className="away__score">{awayScore}</div>
                    </div>
                </div>
                <BottomRow />
            </section>
            <section className="buttons">
                <div className="homeButtons">
                    <button
                        onClick={() => updateScore('home', 6)}
                        className="homeButtons__touchdown"
                    >
                        Home Touchdown
                    </button>
                    <button
                        onClick={() => updateScore('home', 3)}
                        className="homeButtons__fieldGoal"
                    >
                        Home Field Goal
                    </button>
                </div>
                <div className="awayButtons">
                    <Button
                        onClick={() => updateScore('away', 6)}
                        className="awayButtons__touchdown"
                    >
                        Away Touchdown
                    </Button>
                    <Button
                        onClick={() => updateScore('away', 3)}
                        className="awayButtons__fieldGoal"
                    >
                        Away Field Goal
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default App;
