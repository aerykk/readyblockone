const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Sup = require('../src/Sup');

describe('Sup', function() {
  it('should render', function() {
    assertEqualJSX(
      <Sup>Sup</Sup>,
      // should equal
      <sup className="cf-sup">Sup</sup>
    );
  });
});
