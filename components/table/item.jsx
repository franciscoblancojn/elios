const Item = ({item,type}) => {
    if(item == null){
        return ""
    }
    const printArray = (array) => {
        return <ul>
            {array.map((element,i)=>{
                const type = typeof element
                return <li key={i}>
                    <Item item={element} type={type}/>
                </li>
            })}
        </ul>
    }
    const printObject = (obj) => {
        if(Array.isArray(obj)) {
            return printArray(obj)
        }
        const keys = Object.keys(obj)
        return <ul className="subTable">
            {keys.map((key,i)=>{
                const type = typeof obj[key]
                return <tr key={i}>
                    <td><strong>{key}: </strong></td>
                    <td><Item item={obj[key]} type={type}/></td>
                </tr>
            })}
        </ul>
    }
    const swType = {
        "string":item,
        "date":(new Date(item)).toLocaleString(),
        "object":printObject(item),
    }
    if(swType[type]){
        return swType[type]
    }
    return <div>{JSON.stringify(item)}</div>
}
export default Item