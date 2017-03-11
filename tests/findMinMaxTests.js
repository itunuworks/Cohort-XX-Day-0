var findMinMax = require('../app/main.js').findMinMax;

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1.3, 66.2] for [2.3, 53.3, 23.23, 66.2, 1.3, 4.2]', function(){
        expect(findMinMax([2.3, 53.3, 23.23, 66.2, 1.3, 4.2])).toEqual([1.3, 66.2]);
      });

      it('should return [-42, -0] for [-3, -23, -5, -42, -0]', function(){
        expect(findMinMax([-3, -23, -5, -42, -0])).toEqual([-42, -0]);
      });

      it('should return [-42, -0] for [4837, 2, -384.23, 47, 384.23]', function(){
        expect(findMinMax([4837, 2, -384.23, 47, 384.23])).toEqual([-384.23, 4837]);
      });
    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });
    
  });

})();