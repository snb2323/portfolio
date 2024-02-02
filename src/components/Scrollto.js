import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Scrolltop() {
    const { pathname } = useLocation();
    useEffect(() => {
        console.log(window.scrollY)
        window.scrollTo(0, 0);
    }, [pathname]);

}
