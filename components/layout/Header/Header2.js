
import HeaderRight from './HeaderRight';
import Logo from './Logo';
import Menu from './Menu';

export default function Header2() {
    return (
        <>
            <header id="header" className={`site-header`}>
                <div className="container-fluid">
                    <div className="row flex-align-c inner">
                        <div className="col-lg-3 col-6">
                            <div className="header-left flex flex-align-c">
                                <Logo />
                            </div>
                        </div>
                        <div className="col-lg-6 col-0 text-center">
                            <div className="header-center">
                                <Menu />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <HeaderRight />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}