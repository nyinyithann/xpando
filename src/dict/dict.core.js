class Dict extends Map {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'Dict';
  }

  static get [Symbol.species]() {
    return Dict;
  }
}

export default Dict;
