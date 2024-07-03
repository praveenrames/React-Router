import { BrowserRouter, Route, Routes } from "react-router-dom"
import All from "./Compontes/All"
import Career from "./Compontes/Career"
import Cyber from "./Compontes/Cyber"
import DataScience from "./Compontes/DataScience"
import FullStackDevelopment from "./Compontes/FullStackDevelopment"
import Nopage from "./Compontes/Nopage"
import TopBar from "./Compontes/TopBar"
import './App.css'


function App() {
  return (
    <>
     <BrowserRouter>
      <TopBar />
            <Routes>
                <Route path='/'element={<All />}/>
                <Route path='/fullstackdevelopment' element={<FullStackDevelopment />}/>
                <Route path='/datascience' element={<DataScience />}/>
                <Route path='/Cyber' element={<Cyber />}/>
                <Route path='/career' element={<Career />}/>
                <Route path='*' element={<Nopage />}/>
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App