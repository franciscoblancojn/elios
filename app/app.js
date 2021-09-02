


import a_CreateAccount from '@/app/CreateAccount'
export const CreateAccount = () => a_CreateAccount
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