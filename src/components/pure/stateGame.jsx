import React, { useState, useEffect } from 'react';
import QuestionRandom from '../questionRandom';
import ImgRandom from './ImgRandom';
import PatternOne from './pattern1';
import PatternTwo from './pattern2';
import PatternThree from './pattern3';

const StateGame = () => {

    const [result, setResult] = useState([]);
    const [finish, setFinish] = useState(false);
    const [win, setWin] = useState(false);
    const [loading, setLoading] = useState(false);


    const addData = (data) => {
        setResult([...result,data]);
        console.log(data);
    }

    const ResetGame = () => {
        setResult([]);
        setFinish(false);
        setWin(false);
        setLoading(true);
        setTimeout(() => {setLoading(false)}, 2000);
    }

    useEffect(() => {
        console.log(result);
        const countTrue = result.filter(e => e === true).length
        const countBad = result.filter(e => e === false).length
        if(countBad == 3){
            setTimeout(() => {alert('you loose monkey qliao')}, 100);
            setFinish(true);
        }  else if (countTrue == 3) {
            setTimeout(() => {alert('you win bastard qliao :3')}, 100);
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
            <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >Scratch and Win</h3>
            <table style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <tbody style={{borderSpacing: '0'}}>
                    <tr>
                        <td className='square1'><PatternOne/></td>
                        <td className='square2'><PatternTwo/></td>
                        <td className='square1'style={{cursor: 'pointer'}}><QuestionRandom finish={finish} addData={addData}/></td>
                        <td className='square2'style={{cursor: 'pointer'}}><QuestionRandom finish={finish} addData={addData}/></td>
                        <td className='square1'><PatternTwo/></td>
                        <td className='square2'><PatternOne/></td>  

                    </tr>
                    <tr>
                        <td className='square3'><PatternTwo/></td>
                        <td className='square4'><PatternOne/></td>
                        <td className='square3' style={{cursor: 'pointer'}}><QuestionRandom finish={finish} addData={addData}/></td>
                        <td className='square4' style={{cursor: 'pointer'}}><QuestionRandom finish={finish} addData={addData}/></td>
                        <td className='square3'><PatternOne/></td>
                        <td className='square4'><PatternTwo/></td>
                    </tr>
                    <tr>
                        <td className='square2'><PatternOne/></td>
                        <td className='square1'><PatternTwo/></td>                        
                        <td className='square2'style={{cursor: 'pointer'}}><QuestionRandom finish={finish} addData={addData}/></td>
                        <td className='square1'style={{cursor: 'pointer'}}><QuestionRandom finish={finish} addData={addData}/></td>
                        <td className='square2'><PatternTwo/></td>
                        <td className='square1'><PatternOne/></td>
                    </tr>
                </tbody>
            </table>
            {finish ?
            <>
            <p>{win ? 'You Win' : 'You loose'}</p>
            <button onClick={ResetGame}>Try again</button>
            </>
            :
            null
            }
        </div>
    );
}

export default StateGame;