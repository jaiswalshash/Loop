import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

import moptro_logo from '../../assets/MOPTro Logo 2.png'
import snail_logo from '../../assets/snail_img.png'
import quark_logo from '../../assets/quark_img.png'
import lite_img from '../../assets/lite_img.png'
import moptro_snail from '../../assets/moptro_snail.png'
import Home from "../Home/Home";

import './loginbody.css'

const Body = () => {
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const tok = localStorage.getItem("authenticated");

    console.log(tok)
    // Credentials
    const users = [
        {
          username: 'admin1',
          password: 'gdt@123'
        },
        {
          username:'admin2',
          password:'gdt@789'
        }
    ];
    
    const [data, setData] = useState({
        username: '',
        password: ''
      });
      const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
      }
      const checkUser = () => {
        const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
        if(usercheck) {
            setShowComponent(true);
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
        }else {
            setShowComponent(false);
            console.log("Wrong password or username");
        }
        console.log(data.username);
        console.log(usercheck);
      }
      useEffect(() => {
        checkUser(users)
          }, [data.username, data.password])
                  
    const [showComponent, setShowComponent] = useState(false);
    const [showWarning, setWarning] = useState("hidden");
    function handleClick() {
        if (!showComponent) {
            setWarning("text");
        }
    }

    let button;
    if (showComponent) {
        button = <NavLink to = "/home" > <button id="login-button" type="submit">Login</button></NavLink>
    }
    else {
        button =  <NavLink to = "/" ><button id="login-button" type="submit" onClick={handleClick}>Login</button></NavLink>
    }
    
    
    return (
        <div className="login-main">
            <div className="data">
                <form className="sign-in">
                    <h2 className="login-signin">Sign in</h2>
                    <input
                        id="login-input"
                        type="text"
                        name="username"
                        value={data.username}
                        placeholder="E-mail"
                        onChange={changeHandler}
                        autoComplete = "off"
                        required = {true} 
                    />
                    <input 
                        id="login-input"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Password"
                        onChange={changeHandler}
                        required = {true}
                        />

                    <input 
                        id = "warning"
                        type= {showWarning}
                        placeholder="Wrong E-mail or password!!"
                    />
                    <div className="forget-password"><h4>Forget Password?</h4></div>
                    {button}
                </form>
                <div className="login-logo">
                    <img src = {moptro_logo} alt= "" />
                    <h1 className="login-title">W2H CONNECT</h1>
                </div>
                
            </div>

            <div className="moptros">
                <div className="vehicle">
                    <img src = {snail_logo} alt = "" />
                    <h5>MoptroB®</h5>
                </div>
                <div className="vehicle">
                    <img src = {lite_img} alt = ""/>
                    <h5>LITE®</h5>
                </div>
                <div className="vehicle">
                    <img src = {quark_logo} alt = ""/>
                    <h5>SNAIL®</h5>
                </div>
                <div className="vehicle">
                    <img src = {moptro_snail} alt = ""/>
                    <h5>WASP®</h5>
                </div>

            </div>
        </div>
    )

}

export default Body