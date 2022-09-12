import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
import OurOffers from "./components/OurOffers/OurOffers";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <MainPage />
            <AboutUs />
            <OurOffers />
        </div>
    );
}

export default App;
