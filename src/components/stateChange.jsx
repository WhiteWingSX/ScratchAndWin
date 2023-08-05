import React, { useState, useEffect } from 'react';
import '../style/faces/style.css'

const lucky = [
  require('../img/Capa 2.png'),
  require('../img/Capa 3.png')
];

const badLucky = [
  require('../img/Capa 1.png'),
  require('../img/Jorge.png')
];

const StateChange = ({addData}) => {
  const [luck, setLuck] = useState(null);
  const [animate, setAnimate] = useState(false);



  const RandomLuck = () => {
    const probability = Math.random();

    if (probability < 0.4) {
      const randomLuckyIndex = Math.floor(Math.random() * lucky.length);
      setLuck(lucky[randomLuckyIndex]);
      addData(true);
    } else {
      const randomBadLuckyIndex = Math.floor(Math.random() * badLucky.length);
      setLuck(badLucky[randomBadLuckyIndex]);
      addData(false);
    }
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500); 
  };

  useEffect(() => {
    RandomLuck()
  }, []);

  return (
    <div>
      { luck && <img src={luck} className={`img ${animate ? 'img-spin' : ''}`} />}
    </div>
  );
}

export default StateChange;