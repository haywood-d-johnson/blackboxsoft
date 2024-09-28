import MenuBar from "./components/MenuBarComponent";
import AboutUs from "./components/AboutUsComponent";

import "./App.css";
import Services from "./components/SevicesComponent";

function App() {
    return (
        <div className="App">
            <div className="offscreen_circle-container"></div>
            <MenuBar />
            <AboutUs />
            <Services />
        </div>
    );
}

export default App;
