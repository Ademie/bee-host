import React from 'react'
import { GiGoldBar } from 'react-icons/gi'

function Gold() {
    return (
        <div className="card">
            <div className="icon">
            <GiGoldBar/>
            </div>
            <h4>Gold</h4>
            <h1>$5.55</h1>
            <p>per month</p>
            <ul>
                <li>10 Accounts</li>
                <li>15 Websites</li>
                <li>Free SSL Certificate</li>
                <li>Priority Support</li>
            </ul>
            <button>
                START NOW
            </button>
        </div>
    )
}

export default Gold
