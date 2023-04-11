import Layout from "@/components/layout/Layout";
import Chat_Service_Section1 from "@/components/sections/homepage/Chat_Service/Chat_Service_Section1";
import Chat_Service_Section2 from "@/components/sections/homepage/Chat_Service/Chat_Service_Section2";
import Chat_Service_Section3 from "@/components/sections/homepage/Chat_Service/Chat_Service_Section3";
import Chat_Service_Section4 from "@/components/sections/homepage/Chat_Service/Chat_Service_Section4";
import Chat_Service_Section5 from "@/components/sections/homepage/Chat_Service/Chat_Service_Section5";
import Chat_Service_Section6 from "@/components/sections/homepage/Chat_Service/Chat_Service_Section6";

export default function HomeChatservice() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Chat_Service_Section1 />
                <Chat_Service_Section2 />
                <Chat_Service_Section3 />
                <Chat_Service_Section4 />
                <Chat_Service_Section5 />
                <Chat_Service_Section6 />


            </Layout>

        </>
    )
}
