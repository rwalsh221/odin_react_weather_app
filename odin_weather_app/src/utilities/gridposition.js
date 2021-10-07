const getCSSGridPosition = () => {
  const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];

  // ADD GRID POSITION BACK TO ARRAY ON DELETE OR ERROR
  const addGridPosition = (input) => {
    gridPositionCSS.push(input);
  };

  // GET GRID POSITION FOR LOCATION
  const getGridPos = () => {
    if (gridPositionCSS.length === 0) {
      return 'ARRAY EMPTY';
    }

    const randomNumber = Math.floor(Math.random() * gridPositionCSS.length);
    const gridPos = gridPositionCSS[randomNumber];
    gridPositionCSS.splice(randomNumber, 1);

    return gridPos;
  };

  return { addGridPosition, getGridPos };
};

const CSSGridPosition = getCSSGridPosition();

export default CSSGridPosition;

// const gridPositionTest = () => {
//   let unavaliableGridPosition = [];
//   const getGridPos = () => {
//     //   GRID POSITION STRINGS FOR CSS STYLE
//     const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];

//     //   GET RANDOM NUMBER FOR CSSPOSITION ARRAY
//     const gridPositionNum = Math.floor(Math.random() * 8) + 1;

//     if (unavaliableGridPosition.indexOf(gridPositionNum) === -1) {
//       unavaliableGridPosition.push(gridPositionNum);
//       console.log(unavaliableGridPosition);
//     } else if (unavaliableGridPosition.length >= 8) {
//       // DELETE FIRST ELEMENT IN LOCATIONS ARRAY AND REPLACE
//       console.log('arr complete');
//     } else {
//       getGridPos();
//     }
//     return gridPositionCSS[gridPositionNum - 1];
//   };

//   return getGridPos;
// };

// const test = gridPositionTest();
