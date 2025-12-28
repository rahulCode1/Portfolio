import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "", element: <Home />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
