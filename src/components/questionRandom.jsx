import React, { useEffect, useState } from 'react';
import StateChange from './stateChange';

const questionImg = [
    require('../img/Capa 2.png'),
    require('../img/Capa 3.png'),
]

const QuestionRandom = ({addData, finish}) => {

    const [questionActual, setQuestionActual] = useState(questionImg[0]);
    const [clicked, setClicked] = useState(false);

    const ChangeImg = () => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * questionImg.length);
        } while (randomIndex === questionActual); // Asegura que el índice sea diferente al anterior.
    
        setQuestionActual(randomIndex);
      };
    
      useEffect(() => {
        const interval = setInterval(ChangeImg, 1000); // Llama a ChangeImg cada 1 segundo.
    
        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta.
      }, [questionActual]);

    return (
        <div>
        {clicked ? <StateChange addData={addData}/>  : 
        <img className='img' onClick={() => !finish && setClicked(true)} src={questionImg[questionActual]} />
        }
            
        </div>
    );
}

export default QuestionRandom;

