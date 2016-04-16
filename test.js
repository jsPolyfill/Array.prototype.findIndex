'use strict';
import test from 'ava';

Array.prototype.findIndex = undefined;

require('./findIndex.js');
const planets = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Mars' },
  { id: 5, name: 'Jupiter' },
  { id: 6, name: 'Saturn' },
  { id: 7, name: 'Uranus' },
  { id: 8, name: 'Neptune' },
];

test('should find an element in an array', (t) => {
  t.deepEqual(
    planets.findIndex( (planet) => planet && planet.name === 'Venus'),
    1
  );
  t.deepEqual(
    planets.findIndex( (planet) => planet && planet.name === 'Earth'),
    2
  );
  t.deepEqual(
    planets.findIndex( (planet) => planet && planet.name === 'Jupiter'),
    4
  );
  t.deepEqual(
    planets.findIndex( (planet) => planet && planet.name === 'Neptune'),
    7
  );
});

function searchPluto(planet) {
  return planet && planet.name === 'Pluto';
}

test('should return -1 on not found', (t) => {
  t.deepEqual(planets.findIndex(searchPluto), -1);
});

test('should return -1 with different prototypes from Array', (t) => {
  t.deepEqual(planets.findIndex.call(Number, searchPluto), -1);
  t.deepEqual(planets.findIndex.call(String, searchPluto), -1);
  t.deepEqual(planets.findIndex.call(Object, searchPluto), -1);
  t.deepEqual(planets.findIndex.call(Function, searchPluto), -1);
});

test('should throws with null as Prototype', (t) => {
  const searchIndex = () =>  {
    [].findIndex.call(null)
  };
  t.throws(searchIndex, TypeError );
});

test('should throws when the param is not a function', (t) => {
  const searchIndex = (param)  => {
    return () => {
      [].findIndex(param);
    }
  };
  t.throws(searchIndex(1), TypeError);
  t.throws(searchIndex(''), TypeError);
  t.throws(searchIndex(), TypeError);
  t.throws(searchIndex(null), TypeError);
  t.throws(searchIndex({}), TypeError);
});
