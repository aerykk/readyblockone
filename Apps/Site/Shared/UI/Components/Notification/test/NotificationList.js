const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const NotificationList = require('../src/NotificationList');

describe('NotificationList', function() {
  it('should render', function() {
    assertEqualJSX(
      <NotificationList>NotificationList</NotificationList>,
      // should equal
      <div className="cf-notifications">NotificationList</div>
    );
  });
});
