import React, { Component } from 'react';
import axios from 'axios';
import './css/main.css'
import cookie from 'react-cookies'

class MypageMain extends Component {
    constructor(props){
        super(props);
        this.state={
            id: '홍길동',
            password: '************',
            walletAddr: '',
            email: '',
        }
    }
    componentWillMount(){
        axios({
            method:'get',
            url:'http://35.200.68.244:8080/users',
            params: {
                serial: cookie.load('Token')
            }
        }).then(res=>{
            const {id, email, walletAddr} = res.data;
            this.setState({
                id: id,
                email: email,
                walletAddr: walletAddr,
            });
            return;
        })
    }
    render() {
        const {id, email, password,walletAddr} = this.state;
        return (
            <div className="MypageMain">
                <div className="header">
                    <span className="UserData">{'Welcome '+id}</span>
                </div>
                <div className="filter"></div>
                <div className="LoginDetails">
                    <span className="MainTitle">Login&nbsp;Details</span>
                    <div className="filter"></div>
                    <div className="LoginMain">
                        <div className="LoginData">
                            <div className="Slide">
                                <div className="Contents">
                                    <span className="Title">ID</span>
                                    <span className="UserText">{id}</span>
                                </div>
                                <div className="filter"></div>
                                <div className="Contents">
                                    <span className="Title">Password</span>
                                    <span className="UserText">{password}</span>
                                    <span className="Edit">Edit</span>
                                </div>
                            </div>
                            <div className="Slide">
                                <div className="Contents">
                                    <span className="Title">Wallet address</span>
                                    <span className="UserText walletAddr">{walletAddr}</span>
                                    <span className="Edit">Edit</span>
                                </div>
                                <div className="filter"></div>
                                <div className="Contents">
                                    <span className="Title">E-mail</span>
                                    <span className="UserText">{email}</span>
                                    <span className="Edit">Edit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MypageMain;