const TitelIcon = (props) => {
    return (
        <div className="titleIcon"> 
            <h1>
                {props.icon ?? ""}
                {props.title}
            </h1>
            <h2>
                {props.subtitle}
            </h2>
        </div>
    )
}

export default TitelIcon