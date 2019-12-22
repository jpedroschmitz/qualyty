function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThen(expected) {
      if (actual < expected) {
        throw new Error(`${actual} is not greater then ${expected}`);
      }
    },
    toBeLessThen(expected) {
      if (actual > expected) {
        throw new Error(`${actual} is not smaller then ${expected}`)
      }
    }
  }
}

module.exports = expect;
