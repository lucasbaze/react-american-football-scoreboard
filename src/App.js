//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import './App.css';
import BottomRow from './components/BottomRow.js';
import Button from './components/Button.js';
import Input from './components/Input.js';
import * as Head from './components/Header.js';

const App = () => {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [down, setDown] = useState(4);
    const [quarter, setQuarter] = useState(4);
    const [yards, setYards] = useState(10);
    const [yardLine, setYardLine] = useState(50);
    const [time, setTime] = useState(20);

    const updateScore = (team, points) => {
        team === 'home'
            ? setHomeScore(homeScore + points)
            : team === 'away'
            ? setAwayScore(awayScore + points)
            : alert(`${team} is not a team`);
    };

    const updateDown = () => {
        down === 4 ? setDown(0) : setDown(down + 1);
    };

    const updateQuarter = () => {
        quarter === 4 ? setQuarter(0) : setQuarter(quarter + 1);
    };

    const updateYards = value => {
        setYards(value);
    };

    const updateYardLine = value => {
        setYardLine(value);
    };

    useEffect(() => {
        console.log('useEffect here');
        setTimeout(() => {
            setTime(time + 1);
        }, 1000);
    }, [time]);

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <Head.Header2>Lions</Head.Header2>
                        <div className="home__score">{homeScore}</div>
                    </div>
                    <div className="timer">{time}</div>
                    <div className="away">
                        <Head.Header2>Tigers</Head.Header2>
                        <div className="away__score">{awayScore}</div>
                    </div>
                </div>
                <BottomRow
                    down={down}
                    quarter={quarter}
                    yards={yards}
                    yardLine={yardLine}
                />
            </section>
            <section className="buttons">
                <div className="homeButtons">
                    <Button onClick={() => updateScore('home', 6)}>
                        Home Touchdown
                    </Button>
                    <Button onClick={() => updateScore('home', 3)}>
                        Home Field Goal
                    </Button>
                </div>
                <div className="awayButtons">
                    <Button onClick={() => updateScore('away', 6)}>
                        Away Touchdown
                    </Button>
                    <Button onClick={() => updateScore('away', 3)}>
                        Away Field Goal
                    </Button>
                </div>
                <div>
                    <Button
                        backgroundColor="rebeccapurple"
                        onClick={() => updateDown()}
                    >
                        Next Down
                    </Button>
                    <Button onClick={() => updateQuarter()}>
                        Next Quarter
                    </Button>
                </div>
                <div>
                    <Input
                        as="input"
                        placeholder="Yards"
                        value={yards}
                        onChange={e => updateYards(e.target.value)}
                        min="0"
                        max="100"
                    />
                    <Input
                        as="input"
                        placeholder="Ball On"
                        value={yardLine}
                        onChange={e => updateYardLine(e.target.value)}
                        min="0"
                        max="100"
                    />
                </div>
            </section>
        </div>
    );
};

export default App;
