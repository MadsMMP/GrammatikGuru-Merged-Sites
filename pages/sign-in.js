import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function SignIn() {
    return (
        <>
            <Layout>
                <section className="page-title layout-02">
                    <div className="container">
                        <div className="inner align-center">
                            <h1 className="title">Sign in</h1>
                            <div className="desc">New user? <Link href="/sign-up" title="Create an account">Create an account</Link></div>
                        </div>
                    </div>
                </section>
                <div className="container mb-5 pb-5">
                    <form action="#" className="sign-in">
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
                            <input type="checkbox" defaultValue="yes" id="remember" name="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="field-submit">
                            <input type="submit" name="submit" defaultValue="Sign In" />
                        </div>
                    </form>
                </div>
            </Layout>

        </>
    )
}
