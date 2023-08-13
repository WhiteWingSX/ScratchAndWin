import React, { useState, useEffect } from 'react';
import PatternOne from './pattern1';
import PatternTwo from './pattern2';
import QuestionRandom1 from '../questionRandom1';
import QuestionRandom2 from '../questionRandom2';
import '../../style/button/style.css'
import ShowFaces from './showFace';


const StateGame = () => {

    const [result, setResult] = useState([]);
    const [finish, setFinish] = useState(false);
    const [win, setWin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [clickedSquare, setClickedSquare] = useState(false);
    const [clickedSquare1, setClickedSquare1] = useState(false);
    const [clickedSquare2, setClickedSquare2] = useState(false);
    const [clickedSquare3, setClickedSquare3] = useState(false);
    const [clickedSquare4, setClickedSquare4] = useState(false);
    const [clickedSquare5, setClickedSquare5] = useState(false);
    const [show, setShow] = useState(false);
    const [lock, setLock] = useState(false);
    const [lock1, setLock1] = useState(false);
    const [lock2, setLock2] = useState(false);
    const [lock3, setLock3] = useState(false);
    const [lock4, setLock4] = useState(false);
    const [lock5, setLock5] = useState(false);

    const handleSquareClick = () => {
        setClickedSquare(true);
        setLock(true);
      };

      const handleSquareClick1 = () => {
        setClickedSquare1(true);
        setLock1(true)
      };

      const handleSquareClick2 = () => {
        setClickedSquare2(true);
        setLock2(true);
      };

      const handleSquareClick3 = () => {
        setClickedSquare3(true);
        setLock3(true);
      };

      const handleSquareClick4 = () => {
        setClickedSquare4(true);
        setLock4(true);
      };

      const handleSquareClick5 = () => {
        setClickedSquare5(true);
        setLock5(true);
      };

    const addData = (data) => {
        setResult([...result,data]);
    }

    const ResetGame = () => {
        setResult([]);
        setFinish(false);
        setWin(false);
        setLoading(true);
        setTimeout(() => {setLoading(false)}, 0);
        setClickedSquare(false);
        setClickedSquare1(false);
        setClickedSquare2(false);
        setClickedSquare3(false);
        setClickedSquare4(false);
        setClickedSquare5(false);
        setShow(false)
        setLock(false)
        setLock1(false)
        setLock2(false)
        setLock3(false)
        setLock4(false)
        setLock5(false)
    }

    useEffect(() => {
        const countTrue = result.filter(e => e === true).length
        const countBad = result.filter(e => e === false).length
        if(countBad == 3){
            setFinish(true);
        }  else if (countTrue == 3) {
            setFinish(true);
            setWin(true);
        }
    }, [result]);

    if(loading){
        return (
            <div>
                Loading...
            </div>
        )}

    return (
        <div>

            <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize: '45px', fontWeight: 'bold'}} >Scratch and Win</h3>
                <div>
                <table style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <tbody style={{borderSpacing: '0',}}>
                    <tr>
                        <td className='square1 img'><PatternTwo/></td>
                        <td className='square2 img'><PatternOne/></td>
                        <td className={`square1 img ${clickedSquare ? 'square-clicked' : ''} ${show && !clickedSquare && !lock ? 'square5' : ''} `}
                            style={{ cursor: 'pointer' }}
                            onClick={!show ? handleSquareClick : () => setClickedSquare(false)}>
                            { show && !clickedSquare && !lock ? <ShowFaces win={win} /> : <QuestionRandom2 finish={finish} addData={addData}/> }
                             </td>
                         <td className={`square2 img ${clickedSquare1 ? 'square-clicked1' : ''} ${show && !clickedSquare1 && !lock1 ? 'square6' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={!show ? handleSquareClick1 : () => setClickedSquare1(false)}>
                             { show && !clickedSquare1 && !lock1 ? <ShowFaces win={win} finish={finish}/> : <QuestionRandom1 finish={finish} addData={addData}/> }
                             </td>
                        <td className='square1 img'><PatternTwo/></td>
                        <td className='square2 img'><PatternOne/></td>
                    </tr>
                    <tr>
                        <td className='square3 img'><PatternOne/></td>
                        <td className='square4 img'><PatternTwo/></td>
                        <td className={`square3 img ${clickedSquare2 ? 'square-clicked2' : ''} ${show && !clickedSquare2 && !lock2 ? 'square6' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={!show ? handleSquareClick2 : () => setClickedSquare2(false)}>
                            { show && !clickedSquare2 && !lock2 ? <ShowFaces win={win} finish={finish}/> : <QuestionRandom1 finish={finish} addData={addData}/> }
                             </td>
                        <td className={`square4 img ${clickedSquare3 ? 'square-clicked3' : ''} ${show && !clickedSquare3 && !lock3 ? 'square5' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={!show ? handleSquareClick3 : () => setClickedSquare3(false)}>
                            { show && !clickedSquare3 && !lock3 ? <ShowFaces win={win} finish={finish}/> : <QuestionRandom2 finish={finish} addData={addData}/> }
                             </td>
                        <td className='square3 img'><PatternOne/></td>
                        <td className='square4 img'><PatternTwo/></td>
                    </tr>
                    <tr>
                        <td className='square2 img'><PatternTwo/></td>
                        <td className='square1 img'><PatternOne/></td>
                        <td className={`square2 img ${clickedSquare4 ? 'square-clicked4' : ''} ${show && !clickedSquare4 && !lock4 ? 'square5' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={!show ? handleSquareClick4 : () => setClickedSquare4(false)}>
                            { show && !clickedSquare4 && !lock4 ? <ShowFaces win={win} finish={finish}/> : <QuestionRandom2 finish={finish} addData={addData}/> }
                             </td>
                        <td className={`square1 img ${clickedSquare5 ? 'square-clicked' : ''} ${show && !clickedSquare5 && !lock5 ? 'square6' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={!show ? handleSquareClick5 : () => setClickedSquare5(false)}>
                            { show && !clickedSquare5 && !lock5 ? <ShowFaces win={win} finish={finish}/> : <QuestionRandom1 finish={finish} addData={addData}/> }
                             </td>
                        <td className='square2 img'><PatternTwo/></td>
                        <td className='square1 img'><PatternOne/></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {finish ?
            <>
                <div>
            <p style={{fontSize: '45px', fontWeight: 'bold'}}>{win ? 'You Win' : 'You Lose'}</p>
            </div>
                <button onClick={ResetGame} className='btn'>¿Try again?</button>
                <button onClick={() => setShow(true)} className='btn'>Show Faces</button>
            </>
            :
                <button onClick={ResetGame} className='btn'>Reset</button>
            }
        </div>
    );
}

export default StateGame;