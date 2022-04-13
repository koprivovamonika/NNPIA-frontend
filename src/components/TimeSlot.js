import './style.css'
import React, { useState } from "react";

function TimeSlot(){
    const [tripType, setTripType] = useState("oneWay");
    return (
                <div
                    className="radio-btn"
                    onClick={() => {
                        setTripType("oneWay");
                    }}
                >
                    <input
                        type="radio"
                        value={tripType}
                        name="tripType"
                        checked={tripType == "oneWay"}
                    />
                    One-way
                </div>
    );
}
export default TimeSlot;

