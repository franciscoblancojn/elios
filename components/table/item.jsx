const Item = ({item,type}) => {
    const swType = {
        "text":item,
        "date":(new Date(item)).toLocaleString(),
        "object":JSON.stringify(item),
    }
    if(swType[type]){
        return swType[type]
    }
    return <div>{JSON.stringify(item)}</div>
}
export default Item