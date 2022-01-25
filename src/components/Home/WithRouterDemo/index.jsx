import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class WithRouterDemo extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <p> 非路由组件，使用 withRouter() 进行加工后，也能使用路由的 histroy 的方法</p>
                <button onClick={this.goBack}> back </button>
            </div>
        );
    }
}

export default withRouter(WithRouterDemo)
