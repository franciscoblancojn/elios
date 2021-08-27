const Plan = (props) => {
    var title = props?.title ?? "Gratis"
    var price = props?.price ?? 0
    var text = props?.text ?? "Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit "
    var list = props?.list ?? []
    var note = props?.note ?? ""
    return (
        <div className={`card card-plan ${props.className || ""}`}> 
            <h3>
                {title}
            </h3>
            <div className="body">
                {
                    price > 0 &&
                    (
                    <div className="price">
                        ${price} / mes
                    </div>
                    )
                }
                {
                    text!="" &&
                    (
                        <p>
                            {text}
                        </p>
                    )
                }
                {
                    list.length > 0 &&
                    (
                        <ul>
                            {list.map((e,i)=>(
                                <li key={i}>
                                    {e}
                                </li>
                            ))}
                        </ul>
                    )
                }
                {
                    note != "" && 
                    (
                        <p className="note">
                            {note}
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Plan