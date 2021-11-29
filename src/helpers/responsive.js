const {Dimensions} = require('react-native');

const {width, height} = Dimensions.get('screen');

const ww = param => {
  return width * param || width;
};
const wh = param => {
  return height * param || height;
};

export {ww, wh};
