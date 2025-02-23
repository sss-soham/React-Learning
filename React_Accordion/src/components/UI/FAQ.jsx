/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export const FAQ = ({curElem, onToggle, isActive}) => {
    const {question, answer} = curElem;
    return (
        <li key={curElem.id}>
            <div className="accordion-grid">
                <p>{curElem.question}</p>
                <button
                className={isActive ? "active-btn" : ""}
                onClick={onToggle}>{isActive ? "Close" : "Show"}</button>
            </div>
            <p>{isActive && answer}</p>
        </li>
    )
}