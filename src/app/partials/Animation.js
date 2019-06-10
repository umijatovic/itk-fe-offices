import React from 'react';
import './Animation.scss';

const Animation = () => {
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="sk-cube-grid">
            {arr.map((el, i) =>{
                return <div key={i} className={`sk-cube sk-cube${i}`}></div>
            })}
        </div>
    )
}

export default Animation;