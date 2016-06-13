const Framework = require('../../../../../../Framework')
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework


import 'whatwg-fetch'
var marked = require('marked')
var cheerio = require('cheerio')

class Markdown extends Component {
    static propTypes = {
        src: PropTypes.string
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

    fetchPage(props) {
        this.setState({src: props.src})

        fetch(props.src)
            .then((res) => {
                return res.text()
            })
            .then((data) => {
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

    componentWillMount() {
        if (this.props.src === this.state.src) { return }
        this.fetchPage(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src === this.state.src) { return }
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
