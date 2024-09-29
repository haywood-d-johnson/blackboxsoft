import "./App.css";

import MenuBar from "./components/MenuBarComponent";
import AboutUs from "./components/AboutUsComponent";
import Services from "./components/SevicesComponent";
import Process from "./components/ProcessComponent";
import Contact from "./components/ContactComponent";

function App() {
    return (
        <div className="App">
            <MenuBar />
            <AboutUs />
            <Process />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
