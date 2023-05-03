/*
https://leetcode.com/problems/flood-fill/
*/

export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const initalColour = image[sr][sc];
  if(initalColour === color){
    console.log('inital colour match, skip everything', initalColour, color)
    return image;
  }

  const testCellExits = (r: number, c: number) => {
    console.log('cell exists', r, c, r >= 0 && c >=0 && image.at(r)?.at(c) !== undefined)
    return r >= 0 && c >=0 && image.at(r)?.at(c) !== undefined;
  }

  const changeColour = (r: number, c: number) => {
    if(!testCellExits(r,c)){
      return;
    }
    if(image[r][c] === initalColour){
      image[r][c] = color;
      changeColour(r-1, c)
      changeColour(r+1, c)
      changeColour(r, c-1)
      changeColour(r, c+1)
    }
  }
  changeColour(sr, sc);

  return image; 
};