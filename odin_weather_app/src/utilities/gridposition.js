let unavaliableGridPosition = [];

const getGridPosition = () => {
  //   GRID POSITION STRINGS FOR CSS STYLE
  const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];

  //   GET RANDOM NUMBER FOR CSSPOSITION ARRAY
  const gridPositionNum = Math.floor(Math.random() * 8) + 1;

  if (unavaliableGridPosition.indexOf(gridPositionNum) === -1) {
    unavaliableGridPosition.push(gridPositionNum);
  } else if (unavaliableGridPosition.length >= 8) {
    console.log('arr complete');
  } else {
    getGridPosition();
  }
  return gridPositionCSS[gridPositionNum - 1];
};

export default getGridPosition;
