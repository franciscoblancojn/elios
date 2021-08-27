import React,{Component} from "react"
const keysNumber = [
    "product_id","quantity","variation_id","price","weight","length","width","height"
]
const keysRange = [
    "id",
    "product_id","order_id","customer_id","Sessions","Events",
    "date",
    "quantity",
    "variation_id",
    "price",
    "sku",
    "weight",
    "length",
    "width",
    "height",
    "total",
    "time"
]
const keysSelect = [
    "product_type",
    "state",
    "payment",
    "platform",
    "event",
    "OS",
    "Browser",
    "System"
]
const keysSearch = [
    "name",
    "ip",
    "billing_first_name",	
    "billing_last_name",
    "billing_address_1",
    "billing_address_2",
    "billing_city",
    "billing_state",
    "billing_postcode",
    "billing_country",
    "billing_email",
    "billing_phone",
    "products",
    "event_target",
    "event_id",
    "event_class",
    "utm",
    "ipCustomer"
]
const keysNone = [
    "permalink",
    "host",
    "url",
    "userAgent",
    "pageUrl",
    "event_href"
]
class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys : props.keys,
            rows : props.rows,
            filtro : "",
            min : "",
            max : "",
            search : "",
            select : "",
            filterBy : null,
            active:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
        this.filtrar = this.filtrar.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }
    selectFilter(ele){
        const e = ele.target.value
        this.setState({
            filterBy:e,
            min : "",
            max : "",
            search : "",
            select : "",
            filtro : "",
        })
        var type = "text"
        if(e == "date"){
            type = "date"
        }
        var input = (<div></div>)
        if(keysRange.indexOf(e)>-1) {
            input = (
                <div className="contentInputFilter">
                    <input type="text" name="search" id="search" hidden/>
                    <input 
                    id="min"
                    name="max" 
                    className="input input_range"
                    type={type}
                    placeholder="Min"
                    onChange={this.handleChange}
                    />
                    <input 
                    id="max"
                    name="max" 
                    className="input input_range"
                    type={type}
                    placeholder="Max"
                    onChange={this.handleChange}
                    />
                </div>
            )
        }else if(keysSearch.indexOf(e)>-1) {
            input = (
                <div className="contentInputFilter">
                    <input 
                    id="search"
                    name="search" 
                    className="input input_search"
                    type="text"
                    placeholder="Search"
                    onChange={this.handleChange}
                    />
                </div>
            )
        }else if(keysSelect.indexOf(e)>-1) {
            const auxrows = [...this.state.rows]
            const rowsItem = auxrows.map((c)=>c[e])
            const rowsItemNoRepit = rowsItem.filter((item,index)=>rowsItem.indexOf(item)===index)
            input = (
                <select 
                id="select"
                name="select" 
                onChange={this.handleChange}
                defaultValue=""
                className="selectFilters"
                >   
                <option value="" disabled>Select</option>
                {
                    rowsItemNoRepit.map((e,i)=>(
                        <option value={e} key={i}>
                            {e}
                        </option>
                    ))
                }
                </select>
            )
        }
        this.setState({filtro:(
            <div className="contentSelectFilter">
                {input}
                <button className="btnFilter" onClick={this.filtrar}>
                    Filtrar
                </button>
            </div>
        )})
    }
    filtrar(){
        const auxrows = [...this.state.rows]
        const e  = this.state.filterBy
        if(keysRange.indexOf(e)>-1) {
            const min = this.state.min
            const max = this.state.max
            if (min==null || min=="" ) {
                alert("Ingrese Minimo")
                return;
            }
            if (max==null || max=="") {
                alert("Ingrese Maximo")
                return;
            }
            var minimo = min;
            var maximo = max;
            if(keysNumber.indexOf(e)>-1){
                minimo = parseFloat(min)
                maximo = parseFloat(max)
            }
            if(minimo > maximo){
                alert("Minimo mayor a Maximo")
                return;
            }
            const rowsSend = auxrows.filter(row => {
                var value = row[e]
                if(keysNumber.indexOf(e)>-1){
                    value = parseFloat(value)
                }else{
                    value = value.toString().toLocaleLowerCase()
                }
                return  value >= minimo && value <= maximo;
            });
            this.props.changeRowFilters(rowsSend)
        }else if(keysSearch.indexOf(e)>-1) {
            const search = this.state.search
            if (search==null || search=="") {
                alert("Ingrese Valor a Buscar")
                return;
            }
            const rowsSend = auxrows.filter(row => {
                var value = row[e]
                if(keysNumber.indexOf(e)>-1){
                    value = parseFloat(value)
                }else{
                    value = value.toString().toLocaleLowerCase()
                }
                return  value.indexOf(search.toLocaleLowerCase())>-1;
            });
            this.props.changeRowFilters(rowsSend)
        }else if(keysSelect.indexOf(e)>-1) {
            const select = this.state.select
            if (select==null || select=="") {
                alert("Seleccione Valor a Filtrar")
                return;
            }
            const rowsSend = auxrows.filter(row => {
                var value = row[e]
                if(keysNumber.indexOf(e)>-1){
                    value = parseFloat(value)
                }else{
                    value = value.toString().toLocaleLowerCase()
                }
                return  value.indexOf(select.toLocaleLowerCase())>-1;
            });
            this.props.changeRowFilters(rowsSend)
        }
    }
    render(){
        return(
            <div>
                <button className="btnOpenFilter" onClick={()=>{this.setState({active:!this.state.active})}}>Filtrar</button>
                <div className="contentFilters" active={`${this.state.active}`}>
                    <h1>Filtros</h1>
                    <p>Filtrar por:</p>
                    <select className="selectFilters" name="filterBy" id="filterBy" onChange={this.selectFilter} defaultValue="">
                        <option value="" disabled>Select</option>
                        {this.state.keys.map((e,i)=>{
                            if(keysNone.indexOf(e)>-1)return "";
                            return (
                                <option value={e} key={i}>
                                    {e}
                                </option>
                            )
                        })}
                    </select>
                    <div>
                        {this.state.filtro}
                    </div>
                    <label htmlFor="checkboxFilter" className="btnCloseFilter"></label>
                </div>
            </div>
        )
    }
}
export default Filters;