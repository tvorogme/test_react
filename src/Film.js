import React from 'react';
import './App.css';

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            desc: props.desc,
            pathname: props.pathname,
            url: props.url
        }
    }

    go = () => {
        window.location = this.state.pathname
    };

    render_short = () => <div onClick={this.go} className={'film'}>
        <h2>{this.state.name}</h2>
        <p>{this.state.desc}</p>
    </div>;

    render_full = () => <div>Тут будет видео {this.state.name}</div>;

    render() {
        return window.location.pathname === this.state.pathname ? this.render_full() : this.render_short()
    }
}

export default Film;
