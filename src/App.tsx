import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css"
import router from "./routes/router";

const App = () => {
    return (
        <>
            <Toaster />
            <RouterProvider router={router} />
        </>

    );
}

export default App;