const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Abbr = require('../src/Abbr');

describe('Abbr', function() {
  it('should render', function() {
    assertEqualJSX(
      <Abbr title="Abbreviation">Abbr</Abbr>,
      // should equal
      <abbr className="cf-abbr" title="Abbreviation">Abbr</abbr>
    );
  });
});
