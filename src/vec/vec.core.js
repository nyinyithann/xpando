class Vec extends Array {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'Vec';
  }

  static get [Symbol.species]() {
    return Vec;
  }
}

export default Vec;
