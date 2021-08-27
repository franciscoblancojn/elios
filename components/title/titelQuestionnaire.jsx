const TitelQuestionnaire = (props) => {
    var user = props.currentUser
    var name = user?.name ?? "Hola"
    return (
        <div className="contentTitle"> 
            <h1>
                <strong>{name},</strong> descubre como rastrear a tus clientes y ¡ahorra tiempo!
            </h1>
            <h2>
                Ayúdanos a personalizar tu experiencia contándonos un poco sobre ti.
            </h2>
        </div>
    )
}

export default TitelQuestionnaire