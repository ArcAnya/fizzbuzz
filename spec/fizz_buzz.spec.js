const { expect } = require('chai');
const FizzBuzz = require('../src/fizzBuzz.js');

describe('FizzBuzz game', () => {
    let game;

    before( () => {
        game = new FizzBuzz();
    });

it('is expected to return 1 if given 1', () => {
    expect(game.play(1)).to.eql(1)
})

it('is expected to return fizz if given 3', () => {
    expect(game.play(3)).to.eql("fizz")
})

it('is expected to return buzz if given 5', () => {
    expect(game.play(5)).to.eql("buzz")
})

it('is expected to return fizz-buzz if given 15', () => {
    expect(game.play(15)).to.eql("fizz-buzz")
})

});