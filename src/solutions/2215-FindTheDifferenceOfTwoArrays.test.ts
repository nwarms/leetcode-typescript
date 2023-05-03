import {describe, expect, test} from '@jest/globals';
import f from './2215-FindTheDifferenceOfTwoArrays';

describe('2215-FindTheDifferenceOfTwoArrays', () => {
  test('[1], [2] are different', () => {
    expect(f([1], [2])).toEqual([[1], [2]]);
  });

  test('nums1 = [1,2,3], nums2 = [2,4,6]', () => {
    expect(f([1,2,3], [2,4,6])).toEqual([[1,3],[4,6]]);
  });

  test('nums1 = [1,2,3,3], nums2 = [1,1,2,2]', () => {
    expect(f([1,2,3,3], [1,1,2,2])).toEqual([[3],[]]);
  });
});