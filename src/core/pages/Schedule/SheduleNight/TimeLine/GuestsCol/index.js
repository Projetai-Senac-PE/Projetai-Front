import React from 'react';

function GuestsCol(props) {
    return (
        <>
            <h4 className="vertical-timeline-element-subtitle">{props.title}</h4>
            <div className="pt-3">
                {props.guests.map((item, index) => {
                    return (
                        <p className="p-0 m-0" key={index}>{item.name}</p>
                    )
                })}
            </div>
        </>
    );
}

export default GuestsCol;