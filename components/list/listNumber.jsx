const ListNumber = (props) => {
    const list = props.list ?? []
    return (
        <ul className="list-number">
            {list.map((e, i)=>{
                return (
                    <li key={i}>
                        <span>
                            {e}
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListNumber