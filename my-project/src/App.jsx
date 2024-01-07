import "./App.css";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import { Provider } from "react-redux";
import { store } from "../redux/store";


function App() {
  return (
    <Provider store={store}>
    <NavBar/>
    <Home/>
    </Provider>
  )
}
export default App