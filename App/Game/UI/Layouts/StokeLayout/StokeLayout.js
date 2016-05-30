import React from 'react';
import { Link } from 'react-router';

var StokeLayout = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        var gameList = [
            {title: 'Trippy Tetra Tiles', code: 'ttt'},
            {title: 'Angels of Ascension', code: 'aoa'},
            {title: 'Hackatron', code: 'hackatron'},
            {title: 'Tile World', code: 'tile-world'},
            {title: 'Tilr', code: 'tilr'}
        ];

        return (
            <View style={styles.container}>
                <div className="container">
                    <div className="top-nav">
                        <div className="container-fluid">
                            <div className="row-fluid search-button-bar-container">
                                <div className="span12">
                                    <h1 className="pull-left logo">
                                      <Link to={"/"}>
                                          Stoke Games
                                      </Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.props.breadcrumb ? <div dangerouslySetInnerHTML={{__html: this.props.breadcrumb}} /> : (
                        <ul className="breadcrumb">
                            <li className="active">
                                <Link to={"/"}><i className="icon-home"></i> Stoke Games</Link>
                            </li>
                        </ul>
                    )}

                    <nav id="secondary" className="main-nav black-box tex">
                        <div className="nav-menu box">
                            <ul className="nav nav-list">
                                <li className="active">
                                    <Link to={"/"}>
                                        <i className="icon-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/games"}>
                                        <i className="icon-book"></i> Games
                                        <span className="pull-right badge">{gameList.length}</span>
                                    </Link>
                                </li>
                                <li className="nav-header">Games</li>
                                {gameList.map((gameItem) => {
                                    return (
                                        <li key={gameItem.code}>
                                            <Link to={"/games/" + gameItem.code}><i className="icon-folder-close"></i> {gameItem.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </nav>

                    <section id="main">
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <div className="span12">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span12">
                                <div className="footer">
                                    <div>Copyright 2013-{new Date().getFullYear()} &copy; <Link to={"/"}>Stoke Games</Link>. All rights reserved.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </View>
        );
    }
});

var styles = {
};

export default StokeLayout;
