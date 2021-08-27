import React,{Component} from "react"
import ls from 'local-storage'
import App from "./app";

class UserActive extends React.Component {
    state = {
        users:0
    }
    constructor(props) {
        super(props);
        this.updateCount = this.updateCount.bind(this);
    }
    updateCount = () => {
        App.request("getUserActive",(result) => {
            var result = result.result
            this.setState({
                users : result.userActives
            })
        })
        setTimeout(() => {
            this.updateCount()
        }, 10 * 1000);
    }
    componentDidMount(){
        if(ls.get('type') == "ok"){
            this.updateCount()
        }
    }
    render(){
        return(
            <div>
                <h2 className="titleUserActivos">
                    Usuarios activos ahora mismo
                </h2>
                <div className="nameUserActivos">
                    {this.state.users}
                </div>
            </div>
        )
    }
}
export default UserActive;