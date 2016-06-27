const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


import 'whatwg-fetch'
var marked = require('marked')
var cheerio = require('cheerio')

class Markdown extends Component {
    static propTypes = {
        src: T.string
    }

    static defaultProps = {
        src: null
    }

    constructor() {
        super()

        this.state = {
            src: null,
            title: '',
            body: '',
            items: [],
            options: {}
        }
    }

    setPage(props, data) {
        var title = ''
        var body = ''
        var items = []
        var html = marked(data)
        var $ = cheerio.load('<div id="top">' + html + '</div>')
        var $content = $('#top > #content')
        var $title = $('#top > h1')

        if ($title.length) {
            title = $title.remove().text()
        }

        if ($content.length) {
            body = $('<div>').append($content.nextUntil('h2')).html()

            $('#top > h2').each(function() {
                items.push({
                    title: $(this).text(),
                    body: $('<div>').append($(this).nextUntil('h2')).html()
                })
            })
        } else {
            body = $('#top').html()
        }

        this.setState({
            title: title,
            body: body,
            items: items
        })

        props.onChange && props.onChange(this.state)

        this.forceUpdate()
    }

    fetchPage(props) {
        if (props.src === this.state.src) { return }

        this.setState({src: props.src})

        if (Framework.Platform.Env.isServer) {
            var fs = require('fs')
            var data = fs.readFileSync(__dirname + '/../../../../../../..' + props.src).toString()

            this.setPage(props, data)
        } else {
            fetch(props.src)
                .then((res) => {
                    return res.text()
                })
                .then((data) => {
                    this.setPage(props, data)
                }).catch((ex) => {
                    this.setState({
                        title: 'Not found',
                        body: 'Could not find that page!',
                        items: []
                    })

                    props.onChange && props.onChange(this.state)

                    this.forceUpdate()
                })
        }
    }

    componentWillMount() {
        this.fetchPage(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.fetchPage(nextProps)
    }

    render() {
        return (
            <div
                ref="md"
                dangerouslySetInnerHTML={{__html: this.state.body}}
            />
        )
    }
}

export default Markdown
