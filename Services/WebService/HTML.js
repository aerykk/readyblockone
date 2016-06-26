import React, {Component, PropTypes} from 'react'
import serialize from 'serialize-javascript'

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class HTML extends Component {
    static propTypes = {
        ui: PropTypes.node,
        store: PropTypes.object
    }

    render() {
        const {ui, store} = this.props

        return (
            <html lang="en">
                <head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <meta charSet="utf-8" />
                    <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

                    <title></title>
                    <meta content="" name="description" />

                    <link href="/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />

                    <meta content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0" name="viewport" />

                    <link href="/Apps/Site/Shared/Assets/Other/app.css" media="screen" rel="stylesheet" type="text/css" />
                </head>

                <body className="application_layout pages_controller home_action">
                    <div id="ui">{ui}</div>

                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8" />

                    <script src="/Apps/Site/Vendor/script.min.js"></script>
                    <script src="/Build/Release/site.web.bundle.js"></script>

                    <script dangerouslySetInnerHTML={{__html: `
                            (function(d,n){var s,a,p;s=document.createElement("script");s.type="text/javascript";s.async=true;s.src=(document.location.protocol==="https:"?"https:":"http:")+"//cdn.nudgespot.com"+"/nudgespot.js";a=document.getElementsByTagName("script");p=a[a.length-1];p.parentNode.insertBefore(s,p.nextSibling);window.nudgespot=n;n.init=function(t){function f(n,m){var a=m.split('.');2==a.length&&(n=n[a[0]],m=a[1]);n[m]=function(){n.push([m].concat(Array.prototype.slice.call(arguments,0)))}}n._version=0.1;n._globals=[t];n.people=n.people||[];n.params=n.params||[];m="track register unregister identify set_config people.delete people.create people.update people.create_property people.tag people.remove_Tag".split(" ");for(var i=0;i<m.length;i++)f(n,m[i])}})(document,window.nudgespot||[]);nudgespot.init("67ba08d5786cfed850d1ed984c9dcbaa");
                    `}} />

                    <script dangerouslySetInnerHTML={{__html: `
                      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                      ga('create', 'UA-37708346-1', 'auto');
                      ga('send', 'pageview');
                    `}} />
                </body>
            </html>
        )
    }
}

export default HTML
