import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root"),
);
