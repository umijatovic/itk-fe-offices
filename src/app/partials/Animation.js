import React from 'react';
import './Animation.scss';
import { animationArr} from '../shared/constants';

const Animation = () => 
    <div className="sk-cube-grid">
        {animationArr.map((el, i) => <div key={i} className={`sk-cube sk-cube${i}`}></div>)}
    </div>

export default Animation;
