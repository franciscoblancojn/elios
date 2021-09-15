const NoItems = ({lang}) => {
    return (
        <div className="no-item">
            <img src="/img/UpsElios.svg" alt="Ups" />
            <h1>
                {lang.table.no_items}
            </h1>
        </div>
    )
}
export default NoItems