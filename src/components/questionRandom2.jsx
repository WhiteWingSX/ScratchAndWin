import React, { useState } from 'react';
import StateChange from './stateChange';

const questionImg = require('../img/Capa 2.png');


const QuestionRandom2 = ({addData, finish}) => {

    const [clicked, setClicked] = useState(false);

    return (
        <div>
        {clicked ? <StateChange addData={addData}/>  : 
        <img className='img' onClick={() => !finish && setClicked(true)} src={questionImg} style={{height: '120px',
    width: '120px'}}/>
        }            
        </div>
    );
}

export default QuestionRandom2;