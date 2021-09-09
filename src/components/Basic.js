import React from 'react'
import { FaFire } from 'react-icons/fa'

function Basic() {
    return (
        <div className="card">
            <div className="icon">
                <FaFire/>
            </div>
            <h4>Basic</h4>
            <h1>$0.00</h1>
            <p>per month</p>
            <ul>
                <li>1 Account</li>
                <li>5 Websites</li>
                <li>Free SSL Certificate</li>
                <li>Basic Support</li>
            </ul>
            <button>
                START NOW
            </button>
        </div>
    )
}

export default Basic
