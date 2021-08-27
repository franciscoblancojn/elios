import React,{Component} from "react"
import ls from 'local-storage'
import Head from "./head"


class Panel extends React.Component {
    state = {
        content:""
    }
    constructor(props) {
        super(props);
        this.handleChangeContent = this.handleChangeContent.bind(this);
    }
    handleChangeContent(e){
        const value =  e.target.getAttribute('value')
        switch (value) {
            case "users":
                
                break;
            case "events":
                
                break;
            case "orders":
                
                break;
            case "products":
                
                break;
        }
    }
    render(){
        return(
            <div id="panel">
                <Head handleChangeContent={this.handleChangeContent}></Head>
                {this.state.content}
            </div>
        )
    }
}
export default Panel