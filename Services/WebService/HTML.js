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
                    <div id="ui" dangerouslySetInnerHTML={{ __html: ui }}></div>

                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />

                    <script src="/Build/Release/site.web.bundle.js"></script>

                    <script async src={"https://www.googletagmanager.com/gtag/js?id=" + state.site.analytics.GA.id}></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${state.site.analytics.GA.id}');
                        `
                    }}>
                    </script>
                </body>
            </html>
        )
    }
}

export default HTML
