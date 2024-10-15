import "./App.css";

import MenuBar from "./components/MenuBarComponent";
import AboutUs from "./components/AboutUsComponent";
import Services from "./components/SevicesComponent";
import Process from "./components/ProcessComponent";
import Contact from "./components/ContactComponent";
import Bubble from "./components/BubbleComponent";

function App() {
    return (
        <div className="App">
            <MenuBar />
            <AboutUs />
            <Process />
            <Services />
            <Contact />
            <Bubble />
        </div>
    );
}

export default App;
