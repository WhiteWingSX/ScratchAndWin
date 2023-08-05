import React, { useState, useEffect } from 'react';
import PatternOne from './pattern1';
import PatternTwo from './pattern2';
import QuestionRandom1 from '../questionRandom1';
import QuestionRandom2 from '../questionRandom2';
import '../../style/button/style.css'

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



    const handleSquareClick = () => {
        setClickedSquare(true);
      };

      const handleSquareClick1 = () => {
        setClickedSquare1(true);
      };

      const handleSquareClick2 = () => {
        setClickedSquare2(true);
      };

      const handleSquareClick3 = () => {
        setClickedSquare3(true);
      };

      const handleSquareClick4 = () => {
        setClickedSquare4(true);
      };

      const handleSquareClick5 = () => {
        setClickedSquare5(true);
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
                        <td className={`square1 img ${clickedSquare ? 'square-clicked' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSquareClick}>
                             <QuestionRandom2 finish={finish} addData={addData}/>
                             </td>
                        <td className={`square2 img ${clickedSquare1 ? 'square-clicked1' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSquareClick1}>
                             <QuestionRandom1 finish={finish} addData={addData}/>
                             </td>
                        <td className='square1 img'><PatternTwo/></td>
                        <td className='square2 img'><PatternOne/></td>  

                    </tr>
                    <tr>
                        <td className='square3 img'><PatternOne/></td>
                        <td className='square4 img'><PatternTwo/></td>
                        <td className={`square3 img ${clickedSquare2 ? 'square-clicked2' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSquareClick2}>
                             <QuestionRandom1 finish={finish} addData={addData}/>
                             </td>
                        <td className={`square4 img ${clickedSquare3 ? 'square-clicked3' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSquareClick3}>
                             <QuestionRandom2 finish={finish} addData={addData}/>
                             </td>
                        <td className='square3 img'><PatternOne/></td>
                        <td className='square4 img'><PatternTwo/></td>
                    </tr>
                    <tr>
                        <td className='square2 img'><PatternTwo/></td>
                        <td className='square1 img'><PatternOne/></td>
                        <td className={`square2 img ${clickedSquare4 ? 'square-clicked4' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSquareClick4}>
                             <QuestionRandom2 finish={finish} addData={addData}/>
                             </td>
                        <td className={`square1 img ${clickedSquare5 ? 'square-clicked5' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSquareClick5}>
                             <QuestionRandom1 finish={finish} addData={addData}/>
                             </td>
                        <td className='square2 img'><PatternTwo/></td>
                        <td className='square1 img'><PatternOne/></td>  
                    </tr>
                </tbody>
            </table>
            </div>
            {finish ?
            <>
            <p style={{fontSize: '45px', fontWeight: 'bold'}}>{win ? 'You Win' : 'You Loose'}</p>
            <button onClick={ResetGame} className='btn'>Try again</button>
            </>
            :
            <button onClick={ResetGame} className='btn'>Reset</button>
            }
            
        </div>
    );
}

export default StateGame;