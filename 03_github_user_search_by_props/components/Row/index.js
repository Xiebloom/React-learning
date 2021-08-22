import React, { Component } from 'react'
import Item from '../Item'
export default class row extends Component {
    render() {
        let {isFirst, isLoading, data, isErr} = this.props.situation
        return (
            <div>
                <div className="row">
                    {
                        isFirst === true ? <h2>Welcome!</h2> :
                        isLoading === true ? <h2> Loading... </h2> :
                        isErr ? <h2>{isErr}</h2> :
                        data.map(item => {
                            return <Item key={item.login} data={item}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
