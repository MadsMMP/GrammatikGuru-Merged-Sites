import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ContactOne() {
    return (
        <>
            <Layout pageTitleDesc="We’re happy to talk to you." pageTitle="Get in Touch">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <div className="heading">
                                    <h2 className="heading-title">Let’s talk.</h2>
                                    <div className="heading-desc">If you have any questions about the subscription or are not sure which plan is right for you, contact our team and let’s schedule a call.</div>
                                </div>
                                <div className="contact-boxs">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="contact-box">
                                                <Link href="/tel:1-335-670-6542" title="Call us" className="background-navy">Call us<span>1-335-670-6542</span></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="contact-box">
                                                <Link href="/mailto:hello@uxper.co" title="Email us" className="background-dark">Email us<span>hello@uxper.co</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="heading">
                                    <h2 className="heading-title">Address</h2>
                                    <div className="heading-desc">2866  Oakway Lane, New York, USA</div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669535!2d-0.2664033999507271!3d51.52873980503857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTHXDom4gxJDDtG4sIFbGsMahbmcgUXXhu5FjIEFuaA!5e0!3m2!1svi!2s!4v1672298826574!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form layout-01">
                                <div className="heading">
                                    <h2 className="heading-title">Send us a message.</h2>
                                    <div className="heading-desc">Feel free to contact us with questions, potential partnerships, or media inquiries.</div>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="first_name">First name*</label>
                                                <input type="text" name="first_name" id="first_name" placeholder="Enter your first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="last_name">Last name*</label>
                                                <input type="text" name="last_name" id="last_name" placeholder="Enter your last name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="work_email">Work email*</label>
                                                <input type="text" name="work_email" id="work_email" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-input">
                                                <label htmlFor="phone_number">Phone number</label>
                                                <input type="text" name="phone_number" id="phone_number" placeholder="Enter your phone number" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-input field-textarea">
                                                <label htmlFor="message">Message*</label>
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Write your message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-submit">
                                                <input type="submit" defaultValue="Send Message" name="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
