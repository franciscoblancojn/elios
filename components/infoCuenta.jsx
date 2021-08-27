import React,{Component} from "react"
import ls from 'local-storage'

class InfoCuenta extends React.Component {
    state = {
        conect: false,
        typeConect:"woocommerce",
        name:"",
        url:"",
        facebookID:"",
        googleID:""
    }
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.setState({
            name:localStorage.host,
            url:`https://${localStorage.host}`,
        })
    }
    render(){
        return(
            <div className="cardCuenta">
                <div className="headCard">
                    <div className="img"></div>
                    <div className="isConnect">
                        {(this.state.conect)?"Connected":"Disconect"}
                        <span className="pointConent" conect={`${this.state.conect}`}></span>
                        <img src={`/icons/${this.state.typeConect}.png`} alt="CMS" className="CMS"/>
                    </div>
                </div>
                <div className="bodyCard">
                    <h3 className="name">
                        {`Nombre de la cuenta: ${this.state.name}`}
                    </h3>
                    <a href={this.state.url} className="urlPage" target="_blank">
                        {this.state.url}
                    </a>
                    <div className="facebookID">
                        <span>
                            Facebook Ad Account ID: {this.state.facebookID}
                        </span>
                        <img src="/icons/facebook.png" alt="facebook"/>
                    </div>
                    <div className="googleID">
                        <span>
                            Google Ads Account ID: {this.state.googleID}
                        </span>
                        <img src="/icons/google.png" alt="google"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoCuenta;