import {getLeads} from "@/app/app"

const getClientsLive = async (min = 5) => {
    const distinct = "ipAddress"
    const query = {
        date:{
            $gte: (new Date).getTime() - (60000 * min),
        },
    }
    const result = await getLeads({distinct,query})
    return {
        ...result,
        count : result?.ipAddress?.length || 0
    }
}
export default getClientsLive