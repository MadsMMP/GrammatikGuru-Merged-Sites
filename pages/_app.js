
import '../public/assets/libs/bootstrap/css/bootstrap.min.css';
import '../public/assets/libs/line-awesome/css/line-awesome.min.css';
// import '../public/assets/libs/swiper/swiper-bundle.min.css'

import 'animate.css';
import { useEffect, useState } from "react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../styles/css/style.css';
export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
       
    }, []);
    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div id="preload" className="preload"><div className="spin"></div></div>
            )}
        </>
    )
}
