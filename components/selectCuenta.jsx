import React,{Component} from "react"

class SelectCuenta extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeCuenta = this.handleChangeCuenta.bind(this);
    }
    handleChangeCuenta(e){
        const newAcount = e.target.value

        const cuentas = JSON.parse(localStorage.cuentas)
        const s = cuentas[newAcount]

        localStorage.setItem( "user" , s.user )
        localStorage.setItem( "password" , s.password )
        localStorage.setItem( "host" , s.host )

        window.location.reload()
    }
    render(){
        const cuentas = JSON.parse(localStorage.cuentas)
        var cuentaMap = Object.values(cuentas);
        return(
            <label htmlFor="selectCuenta" className="contentSelectCuenta inputForm">
                <span className="titleSelectCuenta">
                    Seleccionar Cuenta:
                </span>
                <select 
                id="selectCuenta" 
                className="selectCuenta " 
                defaultValue={localStorage.user}
                onChange={this.handleChangeCuenta}>
                    {cuentaMap.map((e,i)=>{
                        return (
                            <option value={e.user} key={i}>
                                {e.user}
                            </option>
                        )
                    })}
                </select>
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconSelect">
                    <path d="M11.3213 11.5C11.1348 11.694 10.9111 11.8484 10.6635 11.9538C10.416 12.0592 10.1497 12.1136 9.88066 12.1136C9.61161 12.1136 9.34534 12.0592 9.09779 11.9538C8.85025 11.8484 8.62652 11.694 8.44002 11.5L0.644709 3.38598C0.373131 3.10328 0.190596 2.74694 0.119802 2.36127C0.0490093 1.97559 0.0930843 1.57761 0.246544 1.2168C0.400003 0.855989 0.656076 0.548279 0.98292 0.331932C1.30976 0.115585 1.69296 0.000148773 2.08484 -2.28882e-05L17.6755 -2.28882e-05C18.0676 -0.000439644 18.4512 0.114572 18.7785 0.33069C19.1058 0.546809 19.3623 0.854487 19.5162 1.21542C19.67 1.57634 19.7143 1.97458 19.6436 2.36053C19.5729 2.74648 19.3904 3.1031 19.1186 3.38598L11.3213 11.5Z" fill="var(--color-4)"/>
                </svg>
            </label>
        )
    }
}
export default SelectCuenta;