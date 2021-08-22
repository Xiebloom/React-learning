import React, { Component } from 'react'
import axios from 'axios'
import pb from 'pubsub-js'

export default class jumbotron extends Component {

    searchUser = async () => {
        // 发布消息，加载中
        pb.publish('Change State', {
            isFirst: false,
            isLoading: true
        })
        // 获得 input 框输入的值
        let { value } = this.searchNode
        console.log(value);
        // 发送网络请求，查找对应用户
        let url = `/search/users?q=${value}`
        //#region 利用axios 
        /* axios.get(url).then(
            res => {
                // 提取有效信息
                let users = res.data.items.map( item => {
                    return {
                        avatar_url : item.avatar_url,
                        login : item.login,
                        html_url : item.html_url
                    }
                })
                console.log('获得信息: ',users);
                // 发布消息，信息
                pb.publish('Change State',{
                    isLoading : false,
                    data : users
                })
            },
            err => {
                // 发布消息，出错
                pb.publish('Change State',{
                    isLoading : false,
                    isErr : err.message
                })
            }
        ) */
        //#endregion

        // 利用 Fetch
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(res,data);
            // 提取有效信息
            let users = data.items.map(item => {
                return {
                    avatar_url: item.avatar_url,
                    login: item.login,
                    html_url: item.html_url
                }
            })
            console.log('获得信息: ', users);
            // 发布消息，信息
            pb.publish('Change State', {
                isLoading: false,
                data: users
            })
        } catch (err) {
            pb.publish('Change State', {
                isLoading: false,
                isErr: err.message
            })
        }


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
