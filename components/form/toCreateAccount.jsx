import Link from 'next/link'

const ToCreateAccount = ({lang}) => {
    return (
        <div className="ToCreateAccount">
            <h3>
                {lang.form.ToCreateAccount.title}
            </h3>
            <Link href="/register">
                <a className="btn-3" style={{width:"100%"}}>
                    {lang.form.ToCreateAccount.btn}
                </a>
            </Link>
            <p className="terminos_condiciones">
                {lang.form.ToCreateAccount.tmc}
            </p>
        </div>
    )
}
export default ToCreateAccount