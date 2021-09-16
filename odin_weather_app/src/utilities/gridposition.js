const getCSSGridPosition = () => {
  const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];

  const getGridPos = () => {
    if (gridPositionCSS.length === 0) {
      return 'ARRAY EMPTY';
    }

    const randomNumber = Math.floor(Math.random() * gridPositionCSS.length);
    const gridPos = gridPositionCSS[randomNumber];
    gridPositionCSS.splice(randomNumber, 1);

    return gridPos;
  };

  return getGridPos;
};

const CSSGridPosition = getCSSGridPosition();

export default CSSGridPosition;
