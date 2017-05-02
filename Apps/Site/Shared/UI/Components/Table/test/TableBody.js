const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const TableBody = require('../src/TableBody');

describe('TableBody', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableBody>TableBody</TableBody>,
      // should equal
      <tbody className="cf-table__body">TableBody</tbody>
    );
  });
});
