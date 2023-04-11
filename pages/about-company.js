import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function AboutCompany() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout siteContentClass="pb0">
                <section className="section-banner">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="content pdr80">
                                    <div className="heading">
                                        <div className="heading-sub">About Company</div>
                                        <h2 className="heading-title">We help small businesses with big hearts make meaningful hires.</h2>
                                    </div>
                                    <div className="button-wrap">
                                        <Link href="/contact-01" className="button fullfield">Get in touch</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image pdl80">
                                    <img src="/assets/images/banner-image-04.png" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-text spdt">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="text-left pdr80">
                                    <h2>Our Mission</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec vehicula arcu.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-right pdr80">
                                    <p>Vestibulum vitae orci et nisi iaculis commodo vitae eu velit. Nullam id erat in orci consequat aliquam at sed nisi. Nullam consequat leo at justo consectetur, vel vehicula odio consequat. Aliquam accumsan dictum leo sed dignissim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section spdtb">
                    <div className="container">
                        <div className="block-counter layout-02">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="counter-box">
                                        <div className="number"><span className="counter"><CounterUp count={2018} time={1} /></span></div>
                                        <div className="title">Year founded</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="counter-box">
                                        <div className="number"><span className="counter"><CounterUp count={60} time={1} /></span><span className="suffix">+</span></div>
                                        <div className="title">Projects</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="counter-box">
                                        <div className="number"><span className="counter"><CounterUp count={10} time={1} /></span><span className="suffix">+</span></div>
                                        <div className="title">Awwarts</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="counter-box">
                                        <div className="number"><span className="counter"><CounterUp count={50} time={1} /></span><span className="suffix">+</span></div>
                                        <div className="title">Team members</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-video">
                    <div className="container">
                        <div className="popup-wrapper ratio" style={{ aspectRatio: 4 / 2 }}>
                            <img src="/assets/images/our-team.jpeg" alt="Popup Video" />
                            <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                    </div>
                </div>
                <section className="section-team spdtb">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">Meet our team</h2>
                            <p>Our people make the difference</p>
                        </div>
                        <div className="block-team layout-01">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <img src="/assets/images/mem-1.png" alt="Member" />
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Stéphane Gibert</h4>
                                                <div className="position">Co-Founder</div>
                                                <ul className="share">
                                                    <li className="twitter"><Link href="/" title="twitter"><i className="lab la-twitter" /></Link></li>
                                                    <li className="linkedin"><Link href="/" title="linkedin"><i className="lab la-linkedin-in" /></Link></li>
                                                    <li className="instagram"><Link href="/" title="instagram"><i className="lab la-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <img src="/assets/images/mem-2.png" alt="Member" />
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">Miriam Jesus</h4>
                                                <div className="position">UX, UI Designer</div>
                                                <ul className="share">
                                                    <li className="twitter"><Link href="/" title="twitter"><i className="lab la-twitter" /></Link></li>
                                                    <li className="linkedin"><Link href="/" title="linkedin"><i className="lab la-linkedin-in" /></Link></li>
                                                    <li className="instagram"><Link href="/" title="instagram"><i className="lab la-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="member-box align-center">
                                        <div className="inner">
                                            <div className="member-avatar">
                                                <img src="/assets/images/mem-3.png" alt="Member" />
                                            </div>
                                            <div className="member-content">
                                                <h4 className="name">John Doe</h4>
                                                <div className="position">Head of Makerting</div>
                                                <ul className="share">
                                                    <li className="twitter"><Link href="/" title="twitter"><i className="lab la-twitter" /></Link></li>
                                                    <li className="linkedin"><Link href="/" title="linkedin"><i className="lab la-linkedin-in" /></Link></li>
                                                    <li className="instagram"><Link href="/" title="instagram"><i className="lab la-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrap align-center">
                                <Link href="/our-team" className="button fullfield">View All Team</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-partner background-grey spdtb">
                    <div className="container">
                        <div className="heading align-center">
                            <h2 className="heading-title">Our investors</h2>
                            <div className="heading-desc">We’re lucky to be joined on this journey by some of the <br /> best investors in the game.</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-6">
                                <div className="partner-box">
                                    <img src="/assets/images/client-01.webp" alt="Partner" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="partner-box">
                                    <img src="/assets/images/client-02.webp" alt="Partner" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="partner-box">
                                    <img src="/assets/images/client-03.webp" alt="Partner" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="partner-box">
                                    <img src="/assets/images/client-04.webp" alt="Partner" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="partner-box">
                                    <img src="/assets/images/client-05.png" alt="Partner" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="partner-box">
                                    <img src="/assets/images/client-06.webp" alt="Partner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-banner background-navy layout-02" style={{ backgroundImage: 'url("/assets/images/banner-image-02.jpg")' }}>
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content devider-right">
                                        <div className="heading heading-alway-white">
                                            <div className="heading-sub">Work with us</div>
                                            <h2 className="heading-title">Now let's grow yours!</h2>
                                        </div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button borderline-white">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
