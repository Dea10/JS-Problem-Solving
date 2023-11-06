const twoSum = require('./twoSum');

describe('twoSum', () => {
    it('should find indices for a valid target in a sorted array', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      expect(result).toEqual([0, 1]);
    });
  
    it('should find indices for a valid target in an unsorted array', () => {
      const nums = [3, 2, 4];
      const target = 6;
      const result = twoSum(nums, target);
      expect(result).toEqual([1, 2]);
    });
  
    it('should handle duplicate numbers correctly', () => {
      const nums = [3, 3];
      const target = 6;
      const result = twoSum(nums, target);
      expect(result).toEqual([0, 1]);
    });
  
    it('should handle negative numbers', () => {
      const nums = [4, -1, 6, 9];
      const target = 5;
      const result = twoSum(nums, target);
      expect(result).toEqual([1, 2]);
    });
  
    it('should return an empty array for an invalid target', () => {
      const nums = [1, 2, 3, 4];
      const target = 10;
      const result = twoSum(nums, target);
      expect(result).toEqual([]);
    });
  });