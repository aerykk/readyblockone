const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Dropdown = require('../src/Dropdown');
const DropdownLink = require('../src/DropdownLink');

describe('DropdownLink', function() {
  it('should render with to', function() {
    assertEqualJSX(
      <Dropdown onClose={() => {}}>
        <DropdownLink to="/foo">Route to /foo</DropdownLink>
      </Dropdown>,
      // should equal
      <ul role="menu" className="cf-dropdown cf-dropdown--left">
        <li className="cf-dropdown__link" role="menuitem">
          <a href="/foo" className="cf-link">Route to /foo</a>
        </li>
      </ul>
    );
  });

  it('should render with onClick', function() {
    assertEqualJSX(
      <Dropdown onClose={() => {}}>
        <DropdownLink onClick={() => {}}>onClick handler</DropdownLink>
      </Dropdown>,
      // should equal
      <ul role="menu" className="cf-dropdown cf-dropdown--left">
        <li className="cf-dropdown__link" role="menuitem">
          <a href="#!" role="button" className="cf-link">onClick handler</a>
        </li>
      </ul>
    );
  });
});
