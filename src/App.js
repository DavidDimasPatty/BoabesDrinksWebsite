import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home';
import Detail from "./components/detail";
function App() {
  return (
   <Router>
      <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/detail/:nama" element={<Detail/>}></Route>
      </Routes>
   </Router>
  );
}

export default App;
