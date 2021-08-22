import React, { Component } from 'react'
import axios from 'axios'

export default class jumbotron extends Component {

    searchUser = () => {
        // 告知父组件，W正在查找
        this.props.setAll({
            isFirst : false,
            isLoading : true
        })
        // 获得 input 框输入的值
        let { value } = this.searchNode
        console.log(value);
        // 发送网络请求，查找对应用户
        let url = `/search/users?q=${value}`
        axios.get(url).then(
            res => {
                // 提取有效信息
                let users = res.data.items.map( item => {
                    return {
                        avatar_url : item.avatar_url,
                        login : item.login,
                        html_url : item.html_url
                    }
                })
                console.log(users);
                // 告知父组件，信息
                this.props.setAll({
                    isLoading : false,
                    data : users
                })
            },
            err => {
                // 告知父组件，出错
                this.props.setAll({
                    isLoading : false,
                    isErr : err.message
                })
            }
        )
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={(c) => { this.searchNode = c }} type="text" placeholder="enter the name you search" />&nbsp;
                        <button onClick={this.searchUser}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
