function isVec(source) {
  return Object.prototype.toString.call(source) === '[object Vec]';
}

export default isVec;
