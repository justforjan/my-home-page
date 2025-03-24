import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollRestoration = () => {
    const location = useLocation();

    console.log(`Location pathname: ${location.pathname}`)

    useEffect(() => {
        const savedPositions = JSON.parse(sessionStorage.getItem("scrollPositions") || "{}");

        console.log(savedPositions);

        // Restore the saved scroll position
        setTimeout(() => {
            if (savedPositions[location.pathname] !== undefined) {
                console.log(savedPositions[location.pathname]);
                window.scrollTo({top: savedPositions[location.pathname], behavior: "instant"});
            }
        }, 100)

        // Save the scroll position when leaving the page
        const saveScrollPosition = () => {
            savedPositions[location.pathname] = window.scrollY;
            sessionStorage.setItem("scrollPositions", JSON.stringify(savedPositions));
        };

        window.addEventListener("scroll", saveScrollPosition);

        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, [location.pathname]);
};

export default useScrollRestoration;
