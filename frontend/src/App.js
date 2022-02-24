import './App.css';
import DashboardTemplate from "./components/templates/DashboardTemplate/DashboardTemplate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoomsTemplate from "./components/templates/RoomsTemplate/RoomsTemplate";
import SolarSystemTemplate from "./components/templates/SolarSystemTemplate/SolarSystemTemplate";

function App() {
    return (
        <html>
        <head>
            <title>EcoHome</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
        </head>
        <body>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<DashboardTemplate/>}/>
                <Route exact path='/rooms' element={<RoomsTemplate/>}/>
                <Route exact path='/solar-system' element={<SolarSystemTemplate/>}/>
            </Routes>
        </BrowserRouter>
        </body>
        </html>
    );
}

export default App;
