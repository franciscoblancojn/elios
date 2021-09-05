import Img from '@/components/img'

const Item = ({item,type,image}) => {
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
    const printLink = (url) => {
        return <a href={url} target="_blank">{url}</a>
    }
    const swType = {
        "string":item,
        "date":(new Date(item)).toLocaleString(),
        "object":printObject(item),
        "a":printLink(item)
    }
    if(swType[type]){
        
        return <>
            {image &&
                <Img src={`/icons/${item.toLowerCase().replace(" ","-")}.png`} alt={item} />
            }
            {swType[type]}
        </>
    }
    return <div>
        {JSON.stringify(item)}
    </div>
}
export default Item