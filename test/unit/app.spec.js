describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This ism Hard')).toBe('This Ism Hard');
        });
        it('exam', function () {
            expect(exercise.upperCase('ala ma kota')).toBe('Ala Ma Kota');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([4, 3, 2])).toBe(3);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([2, 3, 'str', 4])).toBe(3);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax([1,2,3,4,5 ])).toEqual(4);
        });
    });
});
