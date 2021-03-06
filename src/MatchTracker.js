import React from 'react';
import { Gift } from 'react-feather';
import { useSelector } from 'react-redux';


export default function MatchTracker() {
    const matches = useSelector((state) => state && state.matches);


    return (
        <div className="score-tracker-container">
            <div className="score-slot">
                <Gift className={matches && matches[0] ? "gift" : "score"} />
            </div>

            <div className="score-slot">
                <Gift className={matches && matches[1] ? "gift" : "score"} />
            </div>

            <div className="score-slot">
                <Gift className={matches && matches[2] ? "gift" : "score"} />
            </div>

            <div className="score-slot">
                <Gift className={matches && matches[3] ? "gift" : "score"} />
            </div>
        </div>
    );
}