import { Homepage } from "./components/home"
import { Navbar } from "./components/Nav"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar/>
            <Homepage/>
        </>
    )
}

export default App

