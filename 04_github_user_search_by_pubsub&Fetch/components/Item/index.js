import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {avatar_url, login, html_url} = this.props.data;
        console.log({avatar_url, login, html_url}) ;
        return (
            <div className="card">
                <a href={html_url} target="_blank" rel="noreferrer">
                    <img alt='p' src={avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}
