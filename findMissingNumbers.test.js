const findMissingNumbers = require('./findMissingNumbers');

describe('findMissingNumbers', () => {
  it('should find missing numbers in the provided example', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([5, 6]);
  });

  it('should handle an empty input array', () => {
    const nums = [];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });

  it('should handle an array with all numbers in order', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([]);
  });

  it('should handle a large range of numbers', () => {
    const nums = [1, 2, 3, 4, 6, 7, 8, 10];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([5]);
  });

  it('should handle a single missing number', () => {
    const nums = [1, 2, 3, 4, 6, 7, 8, 9, 10];
    const result = findMissingNumbers(nums);
    expect(result).toEqual([5]);
  });
});
