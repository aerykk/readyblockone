const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Loading = require('../src/Loading');

describe('Loading', function() {
  it('should render', function() {
    assertEqualJSX(
      <Loading/>,
      <div className="cf-loading" role="status">
        <span className="cf-loading__label">Loading</span>
      </div>
    );
  });
});
