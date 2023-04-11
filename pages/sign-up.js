import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function SignUp() {
    return (
        <>
            <Layout>
                <section className="page-title layout-02">
                    <div className="container">
                        <div className="inner align-center">
                            <h1 className="title">Create an account</h1>
                            <div className="desc">Already have an account? <Link href="/" title="Sign In">Sign In</Link></div>
                        </div>
                    </div>
                </section>

                <div className="container mb-5 pb-5">
                    <form action="#" className="sign-up">
                        <div className="field-input">
                            <label htmlFor="first_name">First name*</label>
                            <input type="text" name="first_name" id="first_name" placeholder="ex: Kevin" />
                        </div>
                        <div className="field-input">
                            <label htmlFor="last_name">Last name*</label>
                            <input type="text" name="last_name" id="last_name" placeholder="ex: Kay" />
                        </div>
                        <div className="field-input">
                            <label htmlFor="email">Email*</label>
                            <input type="text" name="email" id="email" placeholder="ex: kevin@uxper.co" />
                        </div>
                        <div className="field-input field-password">
                            <label htmlFor="password">Password*</label>
                            <input type="password" name="password" id="password" placeholder="********" />
                            <i className="lar la-eye view-password" />
                        </div>
                        <div className="field-input field-checkbox">
                            <input type="checkbox" defaultValue="yes" id="terms" name="terms" />
                            <label htmlFor="terms">I agree to the <Link href="/" title="Terms & conditions">Terms &amp; conditions</Link></label>
                        </div>
                        <div className="field-submit">
                            <input type="submit" name="submit" defaultValue="Register" />
                        </div>
                    </form>
                </div>
            </Layout>

        </>
    )
}
