import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from 'react';

export default function ServiceOne() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };


    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            <Layout pageTitleSub="WHAT WE DO" pageTitle="Innovation tailored to you">

                <div className="section-banner ratio" style={{ aspectRatio: 3 / 1 }}>
                    <img src="/assets/images/our-team.jpeg" alt="Team" className="full-w" />
                </div>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title size-l">We Offer a Wide <br /> Variety of IT Services</h2>
                        </div>
                        <div className="block-icon-box layout-02">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-01.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Qualitative Research</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-02.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Social Marketing</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-03.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Graphic Design</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-04.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Reportyng &amp; Analysis</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-05.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Development</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="icon-box p48">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src="/assets/images/services-06.svg" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h3 className="title">People Science</h3>
                                                <div className="desc">It is a long established fact that a reader will be distracted</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-pricing spdt">
                    <div className="container">
                        <div className="toggle">
                            <span className="text">Monthly</span>
                            <span className={`switch ${isToggled ? "is-active" : ""}`} onClick={toggleTrueFalse}></span>
                            <span className="text">Anually</span>
                            <span className="discount">
                                <span className="discount-text">Save 20%</span>
                            </span>
                        </div>
                        <div className="pricing-table is-active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pricing-box">
                                        <div className="inner background-grey">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={62} height={64} viewBox="0 0 62 64">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g transform="translate(-535.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(400.000000, 108.000000) translate(0.000000, 0.000000)">
                                                                            <path fill="#FF1F25" fillRule="nonzero" d="M62 10.706c0 5.913-4.73 10.706-10.567 10.706H18.028c-5.836 0-10.567-4.793-10.567-10.706C7.461 4.793 12.192 0 18.028 0h33.405C57.27 0 62 4.793 62 10.706z" />
                                                                            <rect width="54.539" height="21.412" x="7.461" y="35.227" fill="#FF1F25" fillRule="nonzero" rx="10.706" transform="translate(34.730623, 45.933484) rotate(-180.000000) translate(-34.730623, -45.933484)" />
                                                                            <rect width="50.708" height="17.557" x={1} y="10.216" stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} rx="8.779" transform="translate(26.353898, 18.994105) rotate(-180.000000) translate(-26.353898, -18.994105)" />
                                                                            <rect width="50.708" height="17.557" x={1} y="45.443" stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} rx="8.779" transform="translate(26.353898, 54.221490) rotate(-180.000000) translate(-26.353898, -54.221490)" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="name">Free</div>
                                            <div className="price"><div className="number">$0</div> / month</div>
                                            <div className="desc"><p>Perfect for startups</p></div>
                                            <ul className="list">
                                                <li className="active">2 users</li>
                                                <li className="active">SaaS Metrics</li>
                                                <li>Team collaboration</li>
                                                <li>Export HTML code</li>
                                                <li>Upload Your Logo</li>
                                            </ul>
                                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pricing-box popular">
                                        <div className="inner background-grey">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={67} height={65} viewBox="0 0 67 65">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path fill="#FFDD0F" d="M39.457 57.373l.386.002v-.009C54.35 57.014 66 45.088 66 30.428V14.306c0-.589-.475-1.067-1.062-1.067-11.964 0-22.023 8.243-24.838 19.4l.011-1.103C40.291 14.173 26.334 0 9.053 0c-.705 0-1.28.57-1.287 1.28l-.242 23.28c-.185 17.846 13.984 32.453 31.66 32.808v.006l.273-.001z" transform="translate(-934.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(800.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                            <path stroke="var(--sala-neutral-dark, $neutral_dark)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M30.742 39.092L30.484 64C13.44 63.51-.177 49.38.002 32.135l.241-23.28c.003-.2.165-.361.364-.361 16.767 0 30.31 13.75 30.135 30.598zM31.166 46.376l-.126 17.62c13.87-.491 24.963-11.945 24.963-26.001V21.873c0-.077-.062-.139-.138-.139-13.573 0-24.602 11.004-24.7 24.642z" transform="translate(-934.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(800.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="name">Basic<span className="badge-popular">Popular</span></div>
                                            <div className="price"><div className="number">${isToggled ? "59" : "19"}</div> / month</div>
                                            <div className="desc"><p>Perfect for company</p></div>
                                            <ul className="list">
                                                <li className="active">Unlimited users</li>
                                                <li className="active">SaaS Metrics</li>
                                                <li className="active">Team collaboration</li>
                                                <li>Export HTML code</li>
                                                <li>Upload Your Logo</li>
                                            </ul>
                                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pricing-box">
                                        <div className="inner background-grey">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={56} height={64} viewBox="0 0 56 64">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path fill="#0057FC" fillRule="nonzero" d="M7.625 1.855C7.625.831 8.46 0 9.487 0h44.651C55.167 0 56 .83 56 1.855v53.347c0 1.025-.833 1.855-1.862 1.855H46.72c-21.591 0-39.095-17.441-39.095-38.956V1.855z" transform="translate(-135.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(0.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                            <path stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} d="M45.513 9.798V63c-12.284-.019-23.403-4.988-31.456-13.012C5.99 41.949 1 30.844 1 18.578h0v-8.78h44.513z" transform="translate(-135.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(0.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                            <path stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} d="M25.686 38.067l-.507 19.667c-8.426-4.06-15.262-10.805-19.42-19.17h0l19.927-.497z" transform="translate(-135.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(0.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="name">Premium</div>
                                            <div className="price"><div className="number">${isToggled ? "69" : "29"}</div> / month</div>
                                            <div className="desc"><p>Perfect for business</p></div>
                                            <ul className="list">
                                                <li className="active">Unlimited users</li>
                                                <li className="active">SaaS Metrics</li>
                                                <li className="active">Team collaboration</li>
                                                <li className="active">Export HTML code</li>
                                                <li className="active">Upload Your Logo</li>
                                            </ul>
                                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pricing-box">
                                        <div className="inner background-grey">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={62} height={64} viewBox="0 0 62 64">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g transform="translate(-535.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(400.000000, 108.000000) translate(0.000000, 0.000000)">
                                                                            <path fill="#FF1F25" fillRule="nonzero" d="M62 10.706c0 5.913-4.73 10.706-10.567 10.706H18.028c-5.836 0-10.567-4.793-10.567-10.706C7.461 4.793 12.192 0 18.028 0h33.405C57.27 0 62 4.793 62 10.706z" />
                                                                            <rect width="54.539" height="21.412" x="7.461" y="35.227" fill="#FF1F25" fillRule="nonzero" rx="10.706" transform="translate(34.730623, 45.933484) rotate(-180.000000) translate(-34.730623, -45.933484)" />
                                                                            <rect width="50.708" height="17.557" x={1} y="10.216" stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} rx="8.779" transform="translate(26.353898, 18.994105) rotate(-180.000000) translate(-26.353898, -18.994105)" />
                                                                            <rect width="50.708" height="17.557" x={1} y="45.443" stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} rx="8.779" transform="translate(26.353898, 54.221490) rotate(-180.000000) translate(-26.353898, -54.221490)" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="name">Free</div>
                                            <div className="price"><div className="number">$0</div> / month</div>
                                            <div className="desc"><p>Perfect for startups</p></div>
                                            <ul className="list">
                                                <li className="active">2 users</li>
                                                <li className="active">SaaS Metrics</li>
                                                <li>Team collaboration</li>
                                                <li>Export HTML code</li>
                                                <li>Upload Your Logo</li>
                                            </ul>
                                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pricing-box popular">
                                        <div className="inner background-grey">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={67} height={65} viewBox="0 0 67 65">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path fill="#FFDD0F" d="M39.457 57.373l.386.002v-.009C54.35 57.014 66 45.088 66 30.428V14.306c0-.589-.475-1.067-1.062-1.067-11.964 0-22.023 8.243-24.838 19.4l.011-1.103C40.291 14.173 26.334 0 9.053 0c-.705 0-1.28.57-1.287 1.28l-.242 23.28c-.185 17.846 13.984 32.453 31.66 32.808v.006l.273-.001z" transform="translate(-934.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(800.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                            <path stroke="var(--sala-neutral-dark, $neutral_dark)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M30.742 39.092L30.484 64C13.44 63.51-.177 49.38.002 32.135l.241-23.28c.003-.2.165-.361.364-.361 16.767 0 30.31 13.75 30.135 30.598zM31.166 46.376l-.126 17.62c13.87-.491 24.963-11.945 24.963-26.001V21.873c0-.077-.062-.139-.138-.139-13.573 0-24.602 11.004-24.7 24.642z" transform="translate(-934.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(800.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="name">Basic<span className="badge-popular">Popular</span></div>
                                            <div className="price"><div className="number">$59</div> / month</div>
                                            <div className="desc"><p>Perfect for company</p></div>
                                            <ul className="list">
                                                <li className="active">Unlimited users</li>
                                                <li className="active">SaaS Metrics</li>
                                                <li className="active">Team collaboration</li>
                                                <li>Export HTML code</li>
                                                <li>Upload Your Logo</li>
                                            </ul>
                                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pricing-box">
                                        <div className="inner background-grey">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={56} height={64} viewBox="0 0 56 64">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path fill="#0057FC" fillRule="nonzero" d="M7.625 1.855C7.625.831 8.46 0 9.487 0h44.651C55.167 0 56 .83 56 1.855v53.347c0 1.025-.833 1.855-1.862 1.855H46.72c-21.591 0-39.095-17.441-39.095-38.956V1.855z" transform="translate(-135.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(0.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                            <path stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} d="M45.513 9.798V63c-12.284-.019-23.403-4.988-31.456-13.012C5.99 41.949 1 30.844 1 18.578h0v-8.78h44.513z" transform="translate(-135.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(0.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                            <path stroke="var(--sala-neutral-dark, $neutral_dark)" strokeWidth={2} d="M25.686 38.067l-.507 19.667c-8.426-4.06-15.262-10.805-19.42-19.17h0l19.927-.497z" transform="translate(-135.000000, -1008.000000) translate(0.000000, 900.000000) translate(135.000000, 0.000000) translate(0.000000, 108.000000) translate(0.000000, 0.000000)" />
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="name">Premium</div>
                                            <div className="price"><div className="number">$69</div> / month</div>
                                            <div className="desc"><p>Perfect for business</p></div>
                                            <ul className="list">
                                                <li className="active">Unlimited users</li>
                                                <li className="active">SaaS Metrics</li>
                                                <li className="active">Team collaboration</li>
                                                <li className="active">Export HTML code</li>
                                                <li className="active">Upload Your Logo</li>
                                            </ul>
                                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Get Started">Get Started</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center mb60">
                            <h2 className="heading-title size-l">Frequently asked questions</h2>
                            <p className="heading-desc">Haven’t got your answer? <Link href="/" title="Contact our support now">Contact our support now</Link></p>
                        </div>
                        <div className="block-accordion enable layout-02">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={isActive.key == 1 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(1)}>
                                        <h4 className="title">Do I have to pay for each agent account?</h4>
                                        <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={isActive.key == 2 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(2)}>
                                        <h4 className="title">Are there any additional costs?</h4>
                                        <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={isActive.key == 3 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(3)}>
                                        <h4 className="title">Do you provide customer service agents?</h4>
                                        <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={isActive.key == 4 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(4)}>
                                        <h4 className="title">Are there any discounts avalaible?</h4>
                                        <div className="content" style={isActive.key == 4 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={isActive.key == 5 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(5)}>
                                        <h4 className="title">Do you provide customer service agents?</h4>
                                        <div className="content" style={isActive.key == 5 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={isActive.key == 6 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(6)}>
                                        <h4 className="title">Are there any discounts avalaible?</h4>
                                        <div className="content" style={isActive.key == 6 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdt align-center pb-5 mb-5">
                    <div className="block-trial layout-01">
                        <div className="container">
                            <img className="image-top" src="/assets/images/macaroni-vertical.webp" alt="Trial" />
                            <div className="sub">We can’t wait to meet you!</div>
                            <h2 className="title">Let's Talk</h2>
                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Contact us">Contact us</Link></div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    )
}
