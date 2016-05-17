import React from 'react';
var marked = require('marked');
import 'whatwg-fetch';
var cheerio = require('cheerio');

var Markdown = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            title: '',
            body: '',
            items: []
        };
    },
    fetchPage: function(props) {
        fetch(props.src)
            .then((res) => {
                return res.text();
            }).then((data) => {
                var title = '';
                var body = '';
                var items = [];
                var html = marked(data);
                var $ = cheerio.load('<div id="top">' + html + '</div>');
                var $content = $('#top > #content');

                if ($content.length) {
                    title = $('#top > h1').text();
                    body = '<div>' + $content.nextUntil('h2').wrap('<p>').parent().html() + '</div>';

                    $('#top > h2').each(function() {
                        items.push({
                            title: $(this).text(),
                            body: '<div>' + $(this).nextUntil('h2').wrap('<p>').parent().html() + '</div>'
                        });
                    });
                } else {
                    body = $('#top').html();
                }

                this.setState({
                    title: title,
                    body: body,
                    items: items
                });

                props.onChange && props.onChange(this.state);

                this.forceUpdate();
            }).catch(function(ex) {
                this.setState({
                    title: 'Not found',
                    body: 'Could not find that page!',
                    items: []
                });

                props.onChange && props.onChange(this.state);

                this.forceUpdate();
            });
    },
    componentWillMount: function() {
        this.fetchPage(this.props);
    },
    componentWillReceiveProps: function(nextProps, nextState) {
        this.fetchPage(nextProps);
    },
    render: function () {
        return <div
            ref="md"
            dangerouslySetInnerHTML={{__html: this.state.body}}
        />;
    }
});

export default Markdown;
