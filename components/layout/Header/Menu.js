import Link from "next/link";

export default function Menu() {
    return (
        <>
            <div className="main-menu">
                <div className="menu-action">
                    <span className="item menu-back">
                        <i className="las la-arrow-left" />
                    </span>
                    <span className="item menu-close">
                        <i className="las la-times" />
                    </span>
                </div>

                <ul>
                    <li className="is-mega-menu">
                        <Link href="/services-01">FEATURES </Link>
                    </li>

                    <li className="is-mega-menu">
                        <Link href="/pricing-03">PRISER </Link>
                    </li>

                    <li className="is-mega-menu">
                        <Link href="/about-company">OMKRING OS </Link>
                    </li>

                    <li className="is-mega-menu">
                        <Link href="/contact-01">KONTAKT OS </Link>
                    </li>
                    
                </ul>

            </div>

        </>
    )
}