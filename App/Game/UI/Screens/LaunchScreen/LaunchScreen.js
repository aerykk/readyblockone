import React from 'react';

var StartScreen = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    _clickHost: function() {
        window.UI_state.screenKey = 'hostGame';
        window.UI_controller.setState(window.UI_state);
    },
    _clickJoin: function() {
        window.UI_state.screenKey = 'joinGame';
        window.UI_controller.setState(window.UI_state);
    },
    _clickInstantAction: function() {
        Orion.game.engine.state.start('Game');
    },


    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.hostButton} onClick={this._clickHost}>HOST GAME</View>
            </View>
        );
    }
});

var styles = {
    container: {
        position: 'absolute',
        top: 320,
        left: 570,
        width: 235,
        height: 200,
        padding: '20px 0px 0px 10px',
        opacity: 0.9,
        background: '#01242C',
        border: '3px solid #fff',
        //boxShadow: '3px 3px 0 #1DFFFE',
        borderRadius: '0px'
    },
    hostButton: {
        width: 185,
        height: 55,
        'font-family': '"Press Start 2P"',
        'font-size': '17px',
        'text-align': 'center',
        'color': '#fff',
        //'color': '#FE0313',
        'padding': '18px 15px',
    },
};

export default StartScreen;
