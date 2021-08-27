const TitlePlan = (props) => {
    var user = props.currentUser
    var name = user?.name ?? "Hola"
    return (
        <div className="contentTitle"> 
            <h1>
                <strong>{name},</strong> selecciona un plan
            </h1>
        </div>
    )
}

export default TitlePlan