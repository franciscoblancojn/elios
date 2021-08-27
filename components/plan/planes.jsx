import Plan from "@/components/plan"

const Planes = (props) => {
    var planes = props?.planes ?? []
    return (
        <div className="content-plan">
            {
                planes.length > 0 &&
                (
                    planes.map((e,i)=>(
                        <Plan
                        className={e.className}
                        title={e.title}
                        price={e.price}
                        text={e.text}
                        list={e.list}
                        note={e.note}
                        key={i}
                        ></Plan>
                    ))
                )
            }
        </div>
    )
}

export default Planes