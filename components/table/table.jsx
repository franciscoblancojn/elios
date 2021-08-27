import {printValue} from "@/components/functions"
import LimitText from "@/components/card/limitText"

const Table = ({row=[],defaultkeys = null}) => {
    if(row.length == 0){
        return ""
    }
    const keys = defaultkeys || Object.keys(row[0])
    return(
        <div className="content-table" style={{paddingLeft:0,paddingRight:0}}>
            <div className="overflow">
                <table className="table-h">
                    <thead>
                        <tr>
                            {
                                keys.map((e,i)=>(
                                    <th key={i}>
                                        {keys[i]}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            row.map((r,i)=>(
                                <tr key={i}>
                                    {
                                        keys.map((e,j)=>{
                                            const n = JSON.stringify(r[e]).length
                                            return (
                                                <td key={`${i}-${j}`}>
                                                    <LimitText sw={n>100} >
                                                        {printValue({
                                                            key:e,
                                                            value:r[e],
                                                            KeysHead:keys
                                                        })}
                                                    </LimitText>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table