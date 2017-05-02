const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Label = require('../src/Label');

describe('Label', function() {
  it('should render', function() {
    assertEqualJSX(
      <Label type="default">A Label</Label>,
      // should equal
      <span className="cf-label cf-label--default">
        A Label
      </span>
    );
  });

  it('should render with custom tagName', function() {
    assertEqualJSX(
      <Label type="default" tagName="small">A Label</Label>,
      // should equal
      <small className="cf-label cf-label--default">
        A Label
      </small>
    );
  });
});
