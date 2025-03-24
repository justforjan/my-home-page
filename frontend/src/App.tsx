import HomePageRoutes from "./HomePageRoutes.tsx";
import useScrollRestoration from "./utils/useScrollRestoration.ts";

export default function App() {
    useScrollRestoration();

    return <HomePageRoutes></HomePageRoutes>;
}