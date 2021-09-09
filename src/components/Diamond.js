import React from 'react'
import { GiCutDiamond } from 'react-icons/gi'
function Diamond() {
    return (
        <div className="card">
            <div className="icon">
            <GiCutDiamond/>
            </div>
            <h4>Diamond</h4>
            <h1>$15.55</h1>
            <p>per month</p>
            <ul>
                <li>Unlimited Accounts</li>
                <li>25 Websites</li>
                <li>Free SSL Certificate</li>
                <li>24/7 Support</li>
            </ul>
            <button>
                START NOW
            </button>
        </div>
    )
}

export default Diamond
