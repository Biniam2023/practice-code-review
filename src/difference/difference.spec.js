import { difference } from './difference.js';

describe('README test', () => {
  it('should exclude values from the second param', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
  it('should exclude values from the second param', () => {
    expect(difference([1, 2, 3], [3, 4])).toEqual([1, 2]);
  });
  it('should exclude values from the second param', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });
});
