const request = (type = "", json = {} , respondOk = (e) => console.log(e), respondError = (e) => console.log(e)) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = {
        "type": type,
        "mongoCheckVerify": process.env.NEXT_PUBLIC_KEY,
        ...json
    };
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
    };

    fetch("https://pixeltracking.startscoinc.com/appM", requestOptions)
        .then(response => response.text())
        .then(result => respondOk(JSON.parse(result)))
        .catch(error => respondError(error));
}

export const CreateAccount = ({name,surname,uid,email}, respondOk = (e) => console.log(e), respondError = (e) => console.log(e)) => {
    request(
        "postUser",
        {
            name,
            surname,
            uid,
            email
        },
        respondOk,
        respondError
    )
}
export const GetUser = ({uid,email}, respondOk = (e) => console.log(e), respondError = (e) => console.log(e)) => {
    request(
        "getUser",
        {
            query:{
                uid:uid,
                email:email
            }
        },
        respondOk,
        respondError
    )
}
export const PutQuestionnaire = ({uid,email,questionnaire}, respondOk = (e) => console.log(e), respondError = (e) => console.log(e)) => {
    request(
        "putQuestionnaire",
        {
            uid,
            email,
            questionnaire
        },
        respondOk,
        respondError
    )
}
export const getEvents = ({key = "", host = "", query = {}, _return = {} , respondOk = (e) => console.log(e), respondError = (e) => console.log(e)}) => {
    request(
        "getEvents",
        {
            key,
            host,
            query,
            return : _return
        },
        respondOk,
        respondError
    )
}
export const getClientes = ({key = "", host = "", query = {}, _return = {} , respondOk = (e) => console.log(e), respondError = (e) => console.log(e)}) => {
    request(
        "getClientes",
        {
            key,
            host,
            query,
            return : _return
        },
        respondOk,
        respondError
    )
}