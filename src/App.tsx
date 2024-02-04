import {  Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense  } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames(`app ${theme}`)}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/about">about</Link>
            <Link to="/">main</Link>
            <Suspense fallback={"loading..."}>
                    <Routes>
                        <Route path="/about" element={<AboutPageAsync />} />
                        <Route path="/" element={<MainPageAsync />} />
                    </Routes>
            </Suspense>
        </div>
    );
};

export default App;