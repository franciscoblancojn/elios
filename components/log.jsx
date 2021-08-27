const Log = (props) => {
    console.log(props);
    return (
        <pre>
            {JSON.stringify(props)}
        </pre>
    )
}

export default Log