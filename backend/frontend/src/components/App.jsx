import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Display from "./display";
import Update from "./update";
import Insert from "./insert";
import { Link } from 'react-router-dom';
export default function App() {

  return (
    <div>
        <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/insert' element={<Insert />} />
        {/* Add more routes here */}
      </Routes>
      </Router>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/"> Home Page </Link>
        </li>
        <li>
          <Link to="/insert"> Insert </Link> {/* Specify the correct "to" prop value */}
        </li>
      </ul>
    </nav>
  );
}
