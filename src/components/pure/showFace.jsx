import React, { useEffect, useState } from 'react';
import '../../style/faces/style.css'

const goodImg = [
    require('../../img/Capa 3.png'),
    require('../../img/Capa 2.png')
    ];

const badImg = [
    require('../../img/Capa 1.png'),
    require('../../img/Jorge.png')
    ];

const ShowFaces = ({win, finish}) => {

    const [correct, setCorrect] = useState(null);
    const [incorrect, setIncorrect] = useState(null);
    const [animate, setAnimate] = useState(false);

    const Answer = () => {
        if (!win) {
            const randomGoodImgIndex = Math.floor(Math.random() * goodImg.length);
            setCorrect(goodImg[randomGoodImgIndex]);
        }else if (win) {
            const randomBadImgIndex = Math.floor(Math.random() * badImg.length);
            setIncorrect(badImg[randomBadImgIndex]);
        }
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 500);
    };

    useEffect(() => {
        Answer()
    }, []);

    return (
        <div>
            {correct && (
                <img
                    src={correct}
                    style={{ width: '130px', height: '130px'}}
                    className={`img ${animate ? 'img-spin' : ''}`}
                />
            )}
            {incorrect && (
                <img
                    src={incorrect}
                    style={{ width: '130px', height: '130px'}}
                    className={`img ${animate ? 'img-spin' : ''}`}
                />
            )}
        </div>
    );
}

export default ShowFaces;