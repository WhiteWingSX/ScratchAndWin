import React, { useEffect, useState } from 'react';

const RandomImg = [
  require('../../img/Capa 1.png'),
  require('../../img/Capa 2.png'),
  require('../../img/Capa 3.png'),
  require('../../img/Jorge.png'),
];

const ImgRandom = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const ChangeImg = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * RandomImg.length);
    } while (randomIndex === imgIndex); // Asegura que el índice sea diferente al anterior.

    setImgIndex(randomIndex);
  };

  useEffect(() => {
    const interval = setInterval(ChangeImg, 1000); // Llama a ChangeImg cada 1 segundo.

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta.
  }, [imgIndex]);

  return (
    <div>
      <img src={RandomImg[imgIndex]} className='img' />
    </div>
  );
};

export default ImgRandom;