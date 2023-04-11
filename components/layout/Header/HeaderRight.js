import Link from 'next/link'

export default function HeaderRight() {
    return (
        <>
            <div className="header-right flex flex-align-c flex-content-e">
                <div className="customer">
                    <Link href="/sign-in">
                        <i className="las la-user-circle" />
                        <span>Log Ind</span>
                    </Link>
                </div>
                <div className="buttons">
                    <Link href="/sign-up" className="button fullfield">
                        <i className="las la-headset" />
                        <span>Opret Konto</span>
                    </Link>
                </div>
            </div>

        </>
    )
}