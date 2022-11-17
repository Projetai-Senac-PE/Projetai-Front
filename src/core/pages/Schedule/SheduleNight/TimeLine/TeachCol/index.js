import React from 'react';

function TeachCol(props) {
    return (
        <>
            <h4 className="vertical-timeline-element-subtitle">{props.title}</h4>
            <div className="pt-3">
                {props.teachers.map((item, index) => {
                    return (
                        <p className="p-0 m-0" key={index}>{item.name}</p>
                    )
                })}
            </div>
        </>
    );
}

export default TeachCol;