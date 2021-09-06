import Item from "@/components/table/item"

const Single = ({item,keys}) => {
    return (
        <>
            {
                keys.map((key,i)=>(
                    <div key={i} className={`textItem ${key.id}`}>
                        <strong>{key.name}: </strong>
                        <Item item={item[key.id]} type={key.type} image={key.image} modal={false}/>
                    </div>
                ))
            }
        </>
    )
}
export default Single