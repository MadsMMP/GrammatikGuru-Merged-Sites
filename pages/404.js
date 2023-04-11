import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Page404() {
    return (
        <>
            <Layout>
                <main id="main" className="site-main">
                    <div className="site-content">
                        <div className="container">
                            <div className="row flex-align-c">
                                <div className="col-lg-6">
                                    <div className="content-404">
                                        <h1>404 - Not found!</h1>
                                        <p>This page could not be found. <br /> Continue to the <Link href="/index" title="Homepage">Homepage</Link></p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/assets/images/404.png" alt={404} />
                                </div>
                            </div>
                        </div>
                    </div>{/* SITE CONTENT */}
                </main>

            </Layout>
        </>
    )
}
