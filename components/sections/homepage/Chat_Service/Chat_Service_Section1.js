import Link from "next/link";
export default function Chat_Service_Section1() {
    return (
        <>
            <section className="section background-cover-right opt120 spdb" style={{ backgroundImage: 'url(/assets/images/hcs-02.png)' }}>
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="heading mb32">
                                <h2 className="heading-title size-xl">Få styr på grammatikken<br /> med kun et <span className="color-navy no-underline">Klik</span></h2>
                                <div className="heading-desc">Sproget er vores stærkeste værktøj - lad os bruge det rigtigt sammen</div>
                            </div>
                            <div className="button-wrap mt32">
                                <Link href="/contact-01" className="button fullfield xs-mb10" title="Try it free">Prøv GrammatikGuru i dag!</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images lg-mt32 layout-03">
                                <div className="inner">
                                    <img className="img01   img-jump" src="/assets/images/grammatik_pc.png" alt="Image" />
                                    <img className="img21" src="/assets/images/hcs-03.png" alt="Image" />
                                    <img className="img22" src="/assets/images/hcs-04.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}