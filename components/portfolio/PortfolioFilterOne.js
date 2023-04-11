import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilterOne({ portfolioStyle, portfolioClass }) {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid", {
                itemSelector: ".portfolio-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".portfolio-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 0);
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    },
        []
    );

    const activeBtn = (value) => (value === filterKey ? "is-active" : "");

    return (
        <>
            <div className="portfolio-action">
                <div className="button-group filter-button-group">
                    <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                        All <span>(12)</span>
                    </button>
                    <button className={activeBtn("design")} onClick={handleFilterKeyChange("design")}>Ui/Ux Design <span>(2)</span></button>
                    <button className={activeBtn("mockup")} onClick={handleFilterKeyChange("mockup")}>
                        Mockup <span>(4)</span>
                    </button>
                    <button className={activeBtn("illustrator")} onClick={handleFilterKeyChange("illustrator")}>
                        Illustrator <span>(2)</span>
                    </button>
                    <button className={activeBtn("branding")} onClick={handleFilterKeyChange("branding")}>
                        Branding <span>(4)</span>
                    </button>
                </div>
            </div>

            <div className={`grid ${portfolioStyle ? portfolioStyle : ""}`}>
                <div className="grid-sizer" />
                <div className={`portfolio-item grid-item--width2 ${portfolioClass ? portfolioClass : ""} branding`}>
                    <article className="portfolio ">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Dufa’s Burger">
                                <img src="/assets/images/portfolio-01.jpg" alt="Dufa’s Burger" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Branding">Branding</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Dufa’s Burger">Dufa’s Burger 01</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item grid-item--width3 ${portfolioClass ? portfolioClass : ""} mockup`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Sala App">
                                <img src="/assets/images/portfolio-02.jpg" alt="Sala App" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Mockup">Mockup</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Sala App">Sala App 02</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} mockup`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Food Packaging">
                                <img src="/assets/images/portfolio-03.jpg" alt="Food Packaging" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Mockup">Mockup</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Food Packaging">Food Packaging 03</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} branding`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Calendar Design">
                                <img src="/assets/images/portfolio-04.jpg" alt="Calendar Design" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Branding">Branding</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Calendar Design">Calendar Design</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} mockup`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Packs Premade Scenes">
                                <img src="/assets/images/portfolio-05.jpeg" alt="Packs Premade Scenes" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Mockup">Mockup</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Packs Premade Scenes">Packs Premade Scenes</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} branding`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Magazine Mockup Bundle">
                                <img src="/assets/images/portfolio-06.jpeg" alt="Magazine Mockup Bundle" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Branding">Branding</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Magazine Mockup Bundle">Magazine Mockup Bundle</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} design`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="The Golo App">
                                <img src="/assets/images/portfolio-07.jpeg" alt="The Golo App" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="The Golo App">The Golo App</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} illustrator`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Yeeow! Illustration Kit">
                                <img src="/assets/images/portfolio-08.jpeg" alt="Yeeow! Illustration Kit" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Illustrator">Illustrator</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Yeeow! Illustration Kit">Yeeow! Illustration Kit</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} design`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Waaahh! Illustration Kit">
                                <img src="/assets/images/portfolio-09.png" alt="Waaahh! Illustration Kit" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Ui/Ux Design">Ui/Ux Design</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Waaahh! Illustration Kit">Waaahh! Illustration Kit</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} illustrator`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Whoosh! Illustration Kit">
                                <img src="/assets/images/portfolio-10.jpeg" alt="Whoosh! Illustration Kit" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Illustrator">Illustrator</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Whoosh! Illustration Kit">Whoosh! Illustration Kit</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} mockup`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Brochure Folder Letter">
                                <img src="/assets/images/portfolio-11.jpeg" alt="Brochure Folder Letter" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Mockup">Mockup</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Brochure Folder Letter">Brochure Folder Letter</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
                <div className={`portfolio-item ${portfolioClass ? portfolioClass : ""} branding`}>
                    <article className="portfolio">
                        <div className="entry-thumbnail">
                            <Link href="/" title="Business & Leather Card">
                                <img src="/assets/images/portfolio-12.jpeg" alt="Business & Leather Card" />
                            </Link>
                        </div>
                        <div className="entry-content">
                            <div className="entry-category">
                                <Link href="/" title="Branding">Branding</Link>
                            </div>
                            <div className="entry-title">
                                <h3><Link href="/" title="Business & Leather Card">Business &amp; Leather Card</Link></h3>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

        </>
    );
};