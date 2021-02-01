class Uniq extends Set {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'Uniq';
  }

  static get [Symbol.species]() {
    return Uniq;
  }
}

export default Uniq;
