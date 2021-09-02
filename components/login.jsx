import React,{Component} from "react"
import ls from 'local-storage'

import app from "@/app/app"
import Icon from "./icon"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user:"",
            password:"",
            passwordHidden : true
        };
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault()
        localStorage.setItem("user",this.state.user)
        localStorage.setItem("password",this.state.password)
        app.request("isClient",(result) => {
            localStorage.setItem( "host" , result.result.host )
            var cuentas = localStorage.cuentas
            if (cuentas == undefined) {
                cuentas = "{}"
            }
            cuentas = JSON.parse(cuentas)
            cuentas[ls.get('user')] = {
                "user" : ls.get('user'),
                "password" : ls.get('password'),
                "host" : ls.get('host'),
            }
            localStorage.setItem("cuentas",JSON.stringify(cuentas))
            window.location.reload()
        })
    }
    render() {
        return (
            <div id="contentLogin" className="contentLogin">
                <form onSubmit={this.handleSubmit}>
                    <div className="contentIcon">
                        <div className="icon">
                            <Icon></Icon>
                        </div>
                        <svg width="272" height="103" viewBox="0 0 272 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.186 41.8662C43.923 41.8662 55.944 53.0212 55.944 68.4742C55.919 69.7655 55.8232 71.0544 55.657 72.3352C55.5762 73.0018 55.2557 73.6163 54.7552 74.0639C54.2547 74.5116 53.6084 74.7619 52.937 74.7682H16.311C16.6144 78.1908 18.1971 81.373 20.7434 83.68C23.2897 85.987 26.6122 87.249 30.048 87.2142C34.0418 87.168 37.9295 85.9229 41.207 83.6402C42.636 82.7822 43.923 82.4952 44.927 83.6402L50.792 90.3632C51.0672 90.5941 51.286 90.8849 51.4315 91.2133C51.5771 91.5417 51.6457 91.899 51.632 92.258C51.6183 92.617 51.5227 92.968 51.3525 93.2844C51.1823 93.6007 50.942 93.874 50.65 94.0832C45.927 98.5192 38.629 101.955 29.332 101.955C12.163 101.955 0 88.3552 0 71.9112C0.004 55.7412 12.163 41.8662 29.186 41.8662ZM39.204 64.7542C38.9679 62.1302 37.771 59.6858 35.8432 57.89C33.9153 56.0943 31.3922 55.0738 28.758 55.0242C26.0372 55.0258 23.4089 56.0119 21.3585 57.8004C19.3081 59.5888 17.9742 62.0589 17.603 64.7542H39.204Z" fill="url(#paint0_linear)"/>
                            <path d="M73.6799 3.09109C73.7044 2.3768 73.9994 1.69852 74.5051 1.19351C75.0109 0.688507 75.6896 0.394515 76.4039 0.371094H88.4209C89.1343 0.395328 89.8117 0.689808 90.316 1.19485C90.8203 1.6999 91.1137 2.37775 91.1369 3.09109V97.8011C91.113 98.5142 90.8193 99.1917 90.3152 99.6966C89.811 100.201 89.134 100.496 88.4209 100.521H76.4039C75.6898 100.497 75.0115 100.203 74.5059 99.6979C74.0003 99.1931 73.7051 98.5152 73.6799 97.8011V3.09109Z" fill="url(#paint1_linear)"/>
                            <path d="M119.448 46.7311C119.448 46.0093 119.734 45.3171 120.244 44.8063C120.754 44.2956 121.446 44.0081 122.168 44.0071H134.043C134.4 44.0073 134.754 44.078 135.084 44.2151C135.414 44.3522 135.713 44.553 135.966 44.806C136.218 45.059 136.418 45.3592 136.554 45.6896C136.69 46.0199 136.76 46.3738 136.759 46.7311V98.5181C136.736 99.2314 136.442 99.9093 135.938 100.414C135.434 100.919 134.756 101.214 134.043 101.238H122.168C121.455 101.213 120.777 100.919 120.272 100.414C119.767 99.909 119.473 99.2315 119.448 98.5181V46.7311Z" fill="url(#paint2_linear)"/>
                            <path d="M184.543 42.582C200.713 42.582 213.871 56.311 213.871 72.476C213.871 88.933 200.713 102.666 184.543 102.666C168.373 102.666 155.215 88.9331 155.215 72.4731C155.215 56.3111 168.377 42.582 184.543 42.582ZM184.543 87.213C192.124 87.213 198.28 80.632 198.28 72.476C198.28 64.466 192.124 58.031 184.543 58.031C176.816 58.031 170.81 64.466 170.81 72.476C170.81 80.632 176.816 87.213 184.543 87.213Z" fill="url(#paint3_linear)"/>
                            <path d="M229.178 94.3731L233.039 86.6461C233.156 86.3353 233.344 86.0556 233.586 85.8286C233.829 85.6015 234.12 85.4332 234.438 85.3366C234.756 85.24 235.092 85.2177 235.42 85.2713C235.748 85.325 236.059 85.4532 236.33 85.6461C236.33 85.6461 242.765 89.0821 249.351 89.0821C252.208 89.0821 254.216 87.9371 254.216 85.5041C254.216 82.9301 252.208 81.3551 244.628 78.3521C233.611 74.0581 228.463 68.1931 228.463 59.4671C228.463 50.7411 234.898 42.5891 249.494 42.5891C257.933 42.5891 264.085 45.0171 267.088 47.0211C267.742 47.3926 268.236 47.9928 268.474 48.7063C268.712 49.4197 268.678 50.1961 268.379 50.8861L264.801 58.1791C264.443 58.73 263.899 59.134 263.269 59.3175C262.638 59.5011 261.962 59.4519 261.365 59.1791C261.365 59.1791 254.925 56.1791 249.494 56.1791C246.062 56.1791 244.629 57.6121 244.629 59.4691C244.629 62.0431 247.203 62.9051 252.497 65.0501C263.514 69.3401 271.811 74.0601 271.811 85.2231C271.811 94.6661 263.511 102.676 249.06 102.676C239.621 102.676 233.04 99.6761 230.037 97.3821C229.566 97.0588 229.223 96.5814 229.066 96.0322C228.909 95.483 228.949 94.8963 229.178 94.3731Z" fill="url(#paint4_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="27.972" y1="41.8662" x2="27.972" y2="101.955" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5DCFF"/>
                                    <stop offset="1" stopColor="#A7B5FF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="82.4084" y1="0.371094" x2="82.4084" y2="100.521" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5DCFF"/>
                                    <stop offset="1" stopColor="#A7B5FF"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="128.104" y1="44.0071" x2="128.104" y2="101.238" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5DCFF"/>
                                    <stop offset="1" stopColor="#A7B5FF"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="184.543" y1="42.582" x2="184.543" y2="102.666" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5DCFF"/>
                                    <stop offset="1" stopColor="#A7B5FF"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear" x1="250.137" y1="42.5891" x2="250.137" y2="102.676" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#B5DCFF"/>
                                    <stop offset="1" stopColor="#A7B5FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="iconText">
                            Analytics & Pixel Tracking
                        </div>
                        <div className="iconsCMS">
                            <img src="/icons/woocommerce.png" alt="woocommerce"/>
                            <img src="/icons/shopify.png" alt="shopify"/>
                            <img src="/icons/wordpress.png" alt="wordpress"/>
                        </div>
                    </div>
                    <label htmlFor="user">
                        <input
                            id="user"
                            name="user"
                            placeholder="Usuario"
                            type="text"
                            onChange={this.handleChange}
                            className="inputForm"
                        />
                    </label>
                    <label htmlFor="password">
                        <input
                            id="password"
                            name="password"
                            placeholder="***********"
                            type={`${this.state.passwordHidden?"password":"text"}`}
                            onChange={this.handleChange}
                            className="inputForm"
                        />
                        <svg 
                        className="iconPasswordHidden"
                        onClick={()=>{
                            this.setState({passwordHidden:!this.state.passwordHidden})
                        }}
                        width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9761 8.59717C18.8986 8.59717 17.8453 8.91669 16.9493 9.51532C16.0534 10.114 15.3551 10.9648 14.9428 11.9603C14.5304 12.9558 14.4225 14.0512 14.6328 15.108C14.843 16.1648 15.3618 17.1356 16.1238 17.8975C16.8857 18.6594 17.8564 19.1783 18.9132 19.3885C19.97 19.5987 21.0654 19.4908 22.0609 19.0785C23.0564 18.6661 23.9073 17.9678 24.5059 17.0719C25.1046 16.176 25.4241 15.1227 25.4241 14.0452C25.423 12.6006 24.8487 11.2155 23.8272 10.194C22.8057 9.17255 21.4207 8.59823 19.9761 8.59717Z" fill="#878787"/>
                            <path d="M19.977 0.425049C15.6647 0.427439 11.453 1.72786 7.88997 4.15705C4.32697 6.58625 1.57771 10.0317 0 14.0451C1.57565 18.0597 4.32435 21.5064 7.88771 23.9358C11.4511 26.3653 15.6638 27.6647 19.9765 27.6647C24.2892 27.6647 28.5019 26.3653 32.0653 23.9358C35.6287 21.5064 38.3773 18.0597 39.953 14.0451C38.3764 10.0312 35.6275 6.58511 32.0645 4.15577C28.5015 1.72643 24.2894 0.426409 19.977 0.425049ZM19.977 23.125C18.1811 23.125 16.4256 22.5925 14.9324 21.5948C13.4392 20.5971 12.2754 19.179 11.5882 17.5198C10.9009 15.8607 10.7211 14.035 11.0715 12.2736C11.4218 10.5123 12.2866 8.89438 13.5565 7.62452C14.8263 6.35466 16.4442 5.48987 18.2056 5.13952C19.9669 4.78917 21.7926 4.96898 23.4518 5.65622C25.1109 6.34346 26.529 7.50727 27.5267 9.00047C28.5245 10.4937 29.057 12.2492 29.057 14.0451C29.0562 16.4531 28.0993 18.7622 26.3967 20.4651C24.6941 22.1679 22.385 23.125 19.977 23.126V23.125Z" fill="#878787"/>
                        </svg>

                    </label>
                    <button id="btnSubmit" className="btnForm">
                        ACCEDER
                    </button>
                    <p>
                        Powered by <strong>AI</strong>
                    </p>
                </form>
                <style jsx>
                    {`
                        .icon{
                            width:140px;
                        }
                        .iconText{
                            font-size:28px;
                            font-weight:bold;
                            margin:10px 0;
                        }
                        .contentIcon{
                            display:flex;
                            flex-wrap:wrap;
                            justify-content:center;
                            width:400px;
                            margin: auto;    
                            max-width: 100%;
                        }
                        .iconsCMS{
                            margin-bottom:20px;
                        }
                        p{
                            text-align:center;
                            font-size:19px;
                        }
                        label{
                            position:relative;
                            display:block;
                        }
                        form{
                            width:400px;
                            max-width:100%;
                        }
                        .iconPasswordHidden{
                            position:absolute;
                            top:0;
                            right:25px;
                            bottom:0;
                            margin:auto;
                            cursor:pointer;
                        }
                    `}
                </style>
            </div>
        )
    }
}
export default Login