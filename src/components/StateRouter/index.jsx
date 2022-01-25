import React, { Component } from 'react';

export default class StateRouter extends Component {
    render() {
        const { state = {} } = this.props.location;
        const { msg, id } = state
        console.log({ state })
        return (
            <div>
                <h2>
                    state - router
                </h2>
                <ul>
                    <li>
                        msg: {`${msg}`}
                    </li>
                    <li>
                        id: {`${id}`}
                    </li>
                </ul>
            </div>
        );
    }
}
