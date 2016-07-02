const Framework = require('../../Framework')
const {AppWrapper, AppConfig, React, Provider, Component, T, Router, match, routerMiddleware, syncHistoryWithStore, ReduxAsyncConnect, loadOnServer, renderToString} = Framework

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
        store: T.object
    }

    render() {
        const {ui, store} = this.props
        const state = store.getState()

        return (
            <html lang="en">
                <head>
                    <title>{state.site.title}</title>

                    {state.site.head.meta && state.site.head.meta.map((attributes) => {
                        return <meta {...attributes} />
                    })}

                    {state.site.head.link && state.site.head.link.map((attributes) => {
                        return <link {...attributes} />
                    })}

                    {state.site.head.script && state.site.head.script.map((attributes) => {
                        return <script {...attributes} />
                    })}
                </head>

                <body className={state.site.styles ? state.site.styles.body : ''}>
                    {Framework.Platform.Env.isServer && <div id="ui" dangerouslySetInnerHTML={{__html: renderToString(ui)}} />}
                    {!Framework.Platform.Env.isServer && <div id="ui">{ui}</div>}

                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />

                    <script src="/Build/Release/site.web.bundle.js"></script>

                    {state.site.support && state.site.support.isEnabled && (
                        <script dangerouslySetInnerHTML={{__html: `
                                (function(d,n){var s,a,p;s=document.createElement("script");s.type="text/javascript";s.async=true;s.src=(document.location.protocol==="https:"?"https:":"http:")+"//cdn.nudgespot.com"+"/nudgespot.js";a=document.getElementsByTagName("script");p=a[a.length-1];p.parentNode.insertBefore(s,p.nextSibling);window.nudgespot=n;n.init=function(t){function f(n,m){var a=m.split('.');2==a.length&&(n=n[a[0]],m=a[1]);n[m]=function(){n.push([m].concat(Array.prototype.slice.call(arguments,0)))}}n._version=0.1;n._globals=[t];n.people=n.people||[];n.params=n.params||[];m="track register unregister identify set_config people.delete people.create people.update people.create_property people.tag people.remove_Tag".split(" ");for(var i=0;i<m.length;i++)f(n,m[i])}})(document,window.nudgespot||[]);nudgespot.init("67ba08d5786cfed850d1ed984c9dcbaa");
                        `}} />
                    )}

                    {state.site.analytics && state.site.analytics.isEnabled && (
                        <script dangerouslySetInnerHTML={{__html: `
                          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                          ga('create', '${state.site.analytics.GA.id}', 'auto');
                          ga('send', 'pageview');
                        `}} />
                    )}
                </body>
            </html>
        )
    }
}

export default HTML
