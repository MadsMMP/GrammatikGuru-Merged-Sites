import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BlogMasonary({ blogStyle }) {
    // Isotope
    const isotope = useRef();
    // const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid", {
                itemSelector: ".element-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".element-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 1000);
    }, []);


    return (
        <>
            <div className="blog-middle isotope">
                <div className="blog-action top-action flex flex-align-c flex-content-sb">
                    <div className="results">Showing 1-9 of 15 results</div>
                    <div className="sort flex flex-align-c flex-content-sb">
                        <div className="sort-item sort-category">
                            <select name="category" id="category">
                                <option value="all">All Categories</option>
                                <option value="marketing">Marketing</option>
                                <option value="creative">Creative</option>
                                <option value="tutorials">Tutorials</option>
                                <option value="ui_ux_design">Ui/Ux Design</option>
                                <option value="resources">Resources</option>
                                <option value="ebooks">Ebooks</option>
                            </select>
                        </div>
                        <div className="sort-item sort-tag">
                            <select name="tag" id="tag">
                                <option value="all">All Tags</option>
                                <option value="marketing">Design</option>
                                <option value="creative">Saas</option>
                                <option value="tutorials">Startup</option>
                                <option value="ui_ux_design">Ui/Ux</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-sizer" />
                    <div className="element-item">
                        <article className={`post post-masonry format-video post-featured ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="Top 6 Membership Sites for Beginners">
                                    <img src="/assets/images/post-01.jpg" alt="Top 6 Membership Sites for Beginners" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Marketing">Marketing</Link>
                                    <Link href="/" title="Creative">Creative</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="Top 6 Membership Sites for Beginners">Top 6 Membership Sites for Beginners</Link><span>Featured</span></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry format-gallery ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="How to become a web designer in 2022">
                                    <img src="/assets/images/post-02.jpeg" alt="How to become a web designer in 2022" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Tutorials">Tutorials</Link>
                                    <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="How to become a web designer in 2022">How to become a web designer in 2022</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry format-video ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="20 best affiliate programs for online creators in 2022">
                                    <img src="/assets/images/post-03.jpeg" alt="20 best affiliate programs for online creators in 2022" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Resources">Resources</Link>
                                    <Link href="/" title="Tutorials">Tutorials</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="20 best affiliate programs for online creators in 2022">20 best affiliate programs for online creators in 2022</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry format-quote ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="Behind the website of a renowned athlete">
                                    <img src="/assets/images/post-04.jpeg" alt="Behind the website of a renowned athlete" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Resources">Resources</Link>
                                    <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="Behind the website of a renowned athlete">Behind the website of a renowned athlete</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry format-link ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="Give users choice: Design ecosystems, not paths">
                                    <img src="/assets/images/post-05.jpeg" alt="Give users choice: Design ecosystems, not paths" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Ebooks">Ebooks</Link>
                                    <Link href="/" title="Tutorials">Tutorials</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="Give users choice: Design ecosystems, not paths">Give users choice: Design ecosystems, not paths</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry format-audio ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="So you want to build a company merch store">
                                    <img src="/assets/images/post-06.jpeg" alt="So you want to build a company merch store" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Resources">Resources</Link>
                                    <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="So you want to build a company merch store">So you want to build a company merch store</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="What does a UX designer do?">
                                    <img src="/assets/images/post-07.jpeg" alt="What does a UX designer do?" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Tutorials">Tutorials</Link>
                                    <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="What does a UX designer do?">What does a UX designer do?</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="From design agency to the future of web design">
                                    <img src="/assets/images/post-08.jpg" alt="From design agency to the future of web design" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Resources">Resources</Link>
                                    <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="From design agency to the future of web design">From design agency to the future of web design</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                    <div className="element-item">
                        <article className={`post post-masonry ${blogStyle ? blogStyle : ""}`}>
                            <div className="entry-thumbnail">
                                <Link href="/" title="The guide to responsive web design in 2022">
                                    <img src="/assets/images/post-09.jpeg" alt="The guide to responsive web design in 2022" />
                                </Link>
                            </div>
                            <div className="entry-content">
                                <div className="entry-category">
                                    <Link href="/" title="Resources">Resources</Link>
                                    <Link href="/" title="Tutorials">Tutorials</Link>
                                </div>
                                <div className="entry-title">
                                    <h3><Link href="/" title="The guide to responsive web design in 2022">The guide to responsive web design in 2022</Link></h3>
                                </div>
                                {!blogStyle == "style-card" && <>
                                    <div className="entry-description">
                                        <p>Gated content can be an incredible way to monetize your work as a creator. So, what is gated content you may ask? It’s exclusive content that is behind a “barrier” - allowing your fans to either ...</p>
                                    </div>
                                    <div className="entry-action">
                                        <Link href="/" title="Read More">Read More<i className="las la-long-arrow-alt-right" /></Link>
                                    </div>
                                </>}
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </>
    );
};