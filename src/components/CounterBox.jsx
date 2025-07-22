import React from "react";

const CounterBox = () => {
    return (
        <div className="counter-box">
            <div className="icon">
                <img src="assets/img/icon/course.svg" alt="" />
            </div>
            <div>
                <span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
                <h6 className="title">+ Total Cources </h6>
            </div>
        </div>
    )
}
export default CounterBox