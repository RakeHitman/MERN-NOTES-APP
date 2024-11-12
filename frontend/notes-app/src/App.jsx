import { Homepage } from "./components/home"
import { Navbar } from "./components/Nav"
import {Register} from "./components/AuthRelated/Register.jsx"
import {Login} from "./components/AuthRelated/Login.jsx"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { Notes } from "./components/NotesRelated/Notes"
import {FavNotes} from "./components/NotesRelated/FavouriteNotes.jsx"
import { useState } from "react"

function App() {

    // const [isRegistered , setIsRegister] = useState(false);
    
    // const registrationStatus = () => {
    //     setIsRegister(true);
    // }

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/Home"  element={<Homepage/>}/>
                    <Route path="/Notes" element={<Notes/>}/>
                    <Route path="/Favourites" element={<FavNotes/>}/>
                    <Route path="/register"  element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App

