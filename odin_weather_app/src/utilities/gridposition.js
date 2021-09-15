// NEEDS PROMISE AND AWAIT. UPDATE STATE DOENT WAIT FOR RETURN IF IT NEEDS TO RUN AGIAN.
const gridPositionTest = () => {
  let unavaliableGridPosition = [];
  const getGridPos = () => {
    //   GRID POSITION STRINGS FOR CSS STYLE
    const gridPositionCSS = ['tl', 'tc', 'tr', 'cl', 'cr', 'bl', 'bc', 'br'];
    console.log(
      'GENERTATE**************************************************************************************'
    );
    //   GET RANDOM NUMBER FOR CSSPOSITION ARRAY
    const gridPositionNum = Math.floor(Math.random() * 8) + 1;

    if (unavaliableGridPosition.indexOf(gridPositionNum) === -1) {
      console.log(unavaliableGridPosition.indexOf(gridPositionNum));
      unavaliableGridPosition.push(gridPositionNum);
      console.log(unavaliableGridPosition);
      console.log(gridPositionNum);
      console.log(gridPositionCSS[gridPositionNum - 1]);
      return gridPositionCSS[gridPositionNum - 1];
    } else if (unavaliableGridPosition.length >= 8) {
      // DELETE FIRST ELEMENT IN LOCATIONS ARRAY AND REPLACE NEW FUNCTION
      console.log('arr complete');
    } else {
      getGridPos();
    }
  };

  return getGridPos;
};

const test = gridPositionTest();

export default test;
