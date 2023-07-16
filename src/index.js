import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./style.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


