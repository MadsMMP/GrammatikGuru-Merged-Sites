import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function PricingThree() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => { setToggled(!isToggled) };


    return (
        <>
            <Layout pageTitle="Simple Pricing" pageTitleDesc="…to help you grow your business, not your bill.">
                <div className="section-pricing background-grey spdtb">
                    <div className="container">
                        <div className="toggle" onClick={toggleTrueFalse}>
                            <span className="text">Monthly</span>
                            <span className={`switch ${isToggled ? ' is-active' : ''}`} />
                            <span className="text">Anually</span>
                            <span className="discount">
                                <span className="discount-text">Save 20%</span>
                            </span>
                        </div>
                        <div className="pricing-table layout-03 is-active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="pricing-box">
                                        <div className="inner">
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
                                        <div className="inner">
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
                                            <div className="price"><div className="number">${isToggled ? " 59" : " 19"}</div> / month</div>
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
                                        <div className="inner">
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
                                            <div className="price"><div className="number">${isToggled ? " 69" : " 29"}</div> / month</div>
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
                        <div className="clients align-center mt60">
                            <span className="title">Trusted by 1000+ brands worldwide</span>
                            <ul className="content">
                                <li><img src="/assets/images/client-01.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-02.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-03.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-04.webp" alt="Client" /></li>
                                <li><img src="/assets/images/client-05.png" alt="Client" /></li>
                                <li><img src="/assets/images/client-06.webp" alt="Client" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section-table spdt">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">Full Plan Comparison</h2>
                            <p className="heading-desc">Easy to switch, upgrade, or cancel at any time.</p>
                        </div>
                        <table className="full-plan table-responsive">
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th>
                                        <div className="name">Free</div>
                                        <div className="price">$0/month</div>
                                    </th>
                                    <th>
                                        <div className="name">Basic</div>
                                        <div className="price">$9/month</div>
                                    </th>
                                    <th>
                                        <div className="name">Pro</div>
                                        <div className="price">$29/month</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4} className="colspan-full">Pricing</td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Real-time team reports</td>
                                    <td className="is-active" data-title="Free"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Easy-to-share results</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="colspan-full">Features</td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Real-time team reports</td>
                                    <td className="is-active" data-title="Free"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Easy-to-share results</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Team goal setting</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Manager learning center</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td data-title="Basic"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Industry benchmarking</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td data-title="Basic"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="colspan-full">Security</td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Real-time team reports</td>
                                    <td className="is-active" data-title="Free"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Easy-to-share results</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                                <tr>
                                    <td className="title" data-title="Features">Team goal setting</td>
                                    <td data-title="Free"><i className="las la-times" /></td>
                                    <td className="is-active" data-title="Basic"><i className="las la-check" /></td>
                                    <td className="is-active" data-title="Pro"><i className="las la-check" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="section spdt">
                    <div className="container">
                        <div className="heading align-center mb60">
                            <h2 className="heading-title">Pricing FAQs</h2>
                            <p className="heading-desc">Haven’t got your answer? <Link href="/" title="Contact our support now">Contact our support now</Link></p>
                        </div>
                        <div className="block-accordion layout-01">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Do I have to pay for each agent account?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Are there any additional costs?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Do you provide customer service agents?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-item">
                                        <h4 className="title"><i className="las la-question-circle" />Are there any discounts avalaible?</h4>
                                        <div className="content"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section spdt align-center">
                    <div className="block-trial layout-01">
                        <div className="container">
                            <img className="image-top" src="/assets/images/macaroni-vertical.webp" alt="Trial" />
                            <h2 className="title">Start your <span>14-days</span> Free trial</h2>
                            <div className="desc"><p>Bring your team together. No contracts, no commitments.</p></div>
                            <div className="button-wrap"><Link href="/contact-01" className="button fullfield" title="Try It Free Now">Try It Free Now<i className="las la-long-arrow-alt-right" /></Link></div>
                        </div>
                    </div>
                </section>
            </Layout>


        </>
    )
}
