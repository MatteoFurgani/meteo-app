import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MeteoSearch from "./components/MeteoSerch";
import MeteoResult from "./components/MeteoResult";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column h-100">
          <header>
            <MyNavbar />
          </header>
          <div className="flex-grow-1">
            <main>
              <Routes>
                <Route exact path="/" element={<MeteoSearch />} />
                <Route path="/MeteoResult" element={<MeteoResult />} />
              </Routes>
            </main>
          </div>
          <footer>
            <MyFooter />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
