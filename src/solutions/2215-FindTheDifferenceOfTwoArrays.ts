/*
https://leetcode.com/problems/find-the-difference-of-two-arrays/
*/

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const findUnique = (source: number[], target: number[]) => {
    return source.reduce<number[]>((returnArray, current) => {
      if(!target.includes(current) && !returnArray.includes(current)){
        returnArray.push(current);
      }
      return returnArray;
    }, [] as number[]);
  }
  const distinctNum1 = findUnique(nums1, nums2);
  const distinctNum2 = findUnique(nums2, nums1);
  return [distinctNum1, distinctNum2];
};

export default findDifference;