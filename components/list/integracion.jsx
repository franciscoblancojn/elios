import Link from 'next/link'

const ListIntegracion = ({title,btn}) => {
    return (
        <div className="list-integracion">
            <h3>
                {title}
            </h3>
            <ul>
                <li>
                    <img src="/icons/wordpressx2.png" alt="Wordpress"/>
                    Wordpress
                    <Link href="/connect/wordpress">
                        <a className="btn">{btn.conectar}</a>
                    </Link>
                </li>
                <li>
                    <img src="/icons/woocommercex2.png" alt="Woocommerce"/>
                    Woocommerce
                    <Link href="/connect/woocommerce">
                        <a className="btn">{btn.conectar}</a>
                    </Link>
                </li>
                <li disabled>
                    <img src="/icons/shopifyx2.png" alt="Shopify"/>
                    Shopify
                    <Link href="/connect/shopify">
                        <a className="btn">{btn.proximamente}</a>
                    </Link>
                </li>
                <li disabled>
                    <img src="/icons/vtexx2.png" alt="Vtex"/>
                    Vtex
                    <Link href="/connect/vtex">
                        <a className="btn">{btn.proximamente}</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ListIntegracion