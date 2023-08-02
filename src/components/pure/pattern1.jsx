import React, { useEffect, useState } from 'react';

const RandomImg = [
  require('../../img/Capa 3.png'),
];

const PatternOne = () => {
  const [imgIndex, setImgIndex] = useState(0); // Índice de la imagen actual.

  const ChangeImg = () => {
    // Incrementamos el índice para mostrar la siguiente imagen en orden.
    setImgIndex((prevIndex) => (prevIndex + 1) % RandomImg.length);
  };

  useEffect(() => {
    const interval = setInterval(ChangeImg, 1000); // Llama a ChangeImg cada 1 segundo.

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta.
  }, []);

  return (
    <div>
      <img src={RandomImg[imgIndex]} className='img' />
    </div>
  );
};

export default PatternOne;