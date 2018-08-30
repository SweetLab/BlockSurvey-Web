import React, { Component } from 'react';
import './css/main.css'

class Main extends Component {
    render() {
        return (
            <div className="MypageMain">
                <div className="header">
                    <span className="UserData">Welcome 석 민</span>
                </div>
                <div className="filter"></div>
                <div className="LoginDetails">
                    <span className="MainTitle">Login&nbsp;Details</span>
                    <div className="filter"></div>
                    <div className="LoginMain">
                        <div className="LoginData">
                            <div className="Slide">
                                <div className="Contents">
                                    <span className="Title">Name</span>
                                    <span className="UserText">석 민</span>
                                    <span className="Edit">Edit</span>
                                </div>
                                <div className="filter"></div>
                                <div className="Contents">
                                    <span className="Title">Password</span>
                                    <span className="UserText">***********</span>
                                    <span className="Edit">Edit</span>
                                </div>
                            </div>
                            <div className="Slide">
                                <div className="Contents">
                                    <span className="Title">NickName</span>
                                    <span className="UserText">ExampleEmail@example.com</span>
                                    <span className="Edit">Edit</span>
                                </div>
                                <div className="filter"></div>
                                <div className="Contents">
                                    <span className="Title">E-mail</span>
                                    <span className="UserText">ExampleEmail@example.com</span>
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

export default Main;