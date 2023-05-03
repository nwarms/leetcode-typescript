import {describe, expect, test} from '@jest/globals';
import {floodFill as f} from './733-FloodFill';

describe('733-FloodFill', () => {
  test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', () => {
    expect(f([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
  });

  test('image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0', () => {
    expect(f([[0,0,0],[0,0,0]], 0, 0, 0)).toEqual([[0,0,0],[0,0,0]]);
  });

  test('image = [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 2', () => {
    expect(f([[0,0,0],[0,0,0]], 1, 0, 2)).toEqual([[2,2,2],[2,2,2]]);
  });
});