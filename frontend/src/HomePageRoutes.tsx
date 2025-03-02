import {Routes, Route} from "react-router";
import MainPage from "./pages/MainPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";


function NoMatch() {
    return(
        <>
            <p>This page does not exist</p>
            <a href="/">Home</a>
        </>
    )
}


export default function HomePageRoutes ()  {

    return (
        <Routes>
            <Route path="/" element={<MainPage />}> </Route>
            <Route path="/project/:pid" element={<ProjectPage />}> </Route>
            <Route path="*" element={<NoMatch />}> </Route>
        </Routes>
        )

}