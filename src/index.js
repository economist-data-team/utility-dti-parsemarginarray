/**
 * parseMarginArray
 *
 * Reads in an array that's like a CSS margin declaration: it should
 *   be given in [top right bottom left] order, but will handle
 *   omitted values as CSS does
 *
 * @param  {Array|Number}  marginArray - margin values as array, or
 *                                     simply as a single number
 *
 * @return {Object} margin values as an object
 */
import isNumeric from '@economist/utility-dti-isnumeric';

export default function parseMarginArray(marginArray) {
  if (isNumeric(marginArray)) {
    marginArray = [ Number(marginArray) ];
  }
  if (!(marginArray instanceof Array)) {
    return marginArray;
  }
  let top = 0, right = 0, bottom = 0, left = 0; // eslint-disable-line one-var, one-var-declaration-per-line
  switch (marginArray.length) {
    case 1:
      top = right = bottom = left = marginArray[0];
      break;
    case 2:
      top = bottom = marginArray[0];
      right = left = marginArray[1];
      break;
    case 3:  // eslint-disable-line no-magic-numbers
      top = marginArray[0];
      bottom = marginArray[2];
      right = left = marginArray[1];
      break;
    default:
      [ top, right, bottom, left ] = marginArray;
      break;
  }
  return { top, right, bottom, left };
}
