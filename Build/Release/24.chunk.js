webpackJsonp([24],{993:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=e.site;return{site:t}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=(n(137),n(85)),c=n(2),s=c.React,f=(c.ReactDOM,c.PropTypes),p=(c.AppWrapper,c.AppConfig,c.Platform,c.Component),b=(c.AppRegistry,c.Navigator,c.StyleSheet,c.Text,c.View),d=(c.TouchableHighlight,c.WebView,function(t){function a(){r(this,a);var e=o(this,Object.getPrototypeOf(a).call(this));return e.state={},e}return i(a,t),l(a,[{key:"componentDidMount",value:function(){var t=this;c.getStyles(c.Platform.Env.isServer?n(25).readFileSync(e+"/Layout.css").toString():n(1127),"stokelayout-",function(e){t.setState({styles:e})})}},{key:"render",value:function(){var e=this.props.children;return this.state.styles?c.wrapStyles(this.state.styles,s.createElement(b,null,e)):s.createElement("div",null)}}]),a}(p));d.propTypes={site:f.object.isRequired},d.defaultProps={breadcrumb:null,site:{}},t["default"]=(0,u.connect)(a)(d)}).call(t,"/")},994:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(993);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o)["default"]}})},995:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(994),p=r(f),b=n(2),d=b.React,y=(b.ReactDOM,b.PropTypes,b.AppWrapper,b.AppConfig,b.Platform,b.Component),h=(b.AppRegistry,b.Navigator,b.StyleSheet,b.Text,b.View),m=(b.TouchableHighlight,b.WebView,function(e){function t(){return i(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this;return d.createElement(p["default"],null,d.createElement(h,{style:v.container},d.createElement(h,{style:v.eventChooser},d.createElement(h,{style:c({},v.box,{"background-image":"url(/App/Game/Assets/Other/Events/shoreline.jpg)"}),onClick:function(){return e.selectEvent(1)}},"May 31st - Shoreline Cleanup"),d.createElement(h,{style:v.box,onClick:function(){return e.selectEvent(2)}},"June 5th - Children Run"),d.createElement(h,{style:v.box,onClick:function(){return e.selectEvent(3)}},"Sept 10th - Paws for a Cause Walk"),d.createElement(h,{style:v.box,onClick:function(){return e.selectEvent(4)}},"December TBD - Food bank & Christmas Baurea")),d.createElement(h,{style:v.eventDetails},details)))}}]),t}(y)),v={container:{margin:"0 auto"},eventChooser:{"padding-top":"50px",width:"2000px",clear:"both","overflow-x":"scroll","background-color":"#eee"},eventDetails:{background:"#eee","border-radius":"5px",padding:"100px"},box:(u={"float":"left","font-family":'"Press Start 2P"',"font-size":"17px","text-align":"center",color:"#fff",width:"250px",height:"180px",margin:"30px",padding:"18px 15px"},o(u,"color","#000"),o(u,"background","#eee url(/Apps/Site/Projects/Lorien/Assets/Images/Events/default.png) no-repeat 0 50%"),o(u,"background-size","contain"),o(u,"border-radius","5px"),u)};t["default"]=m},996:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(995);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o)["default"]}})},1127:function(e,t){e.exports="$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n"}});