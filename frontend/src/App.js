import './App.css';
import DashboardTemplate from "./components/templates/DashboardTemplate/DashboardTemplate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoomsTemplate from "./components/templates/RoomsTemplate/RoomsTemplate";

function App() {
    return (
        <html>
        <head>
            <title>EcoHome</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        </head>
        <body>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<DashboardTemplate/>}/>
                <Route exact path='/rooms' element={<RoomsTemplate/>}/>
            </Routes>
        </BrowserRouter>

        </body>
        </html>
    );
}

export default App;
