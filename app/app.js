import a_CreateAccount from '@/app/CreateAccount'
export const CreateAccount = a_CreateAccount

import a_getLeads from '@/app/getLeads'
export const getLeads = a_getLeads

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