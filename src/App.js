import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <MainPage />
            <AboutUs />
        </div>
    );
}

export default App;
