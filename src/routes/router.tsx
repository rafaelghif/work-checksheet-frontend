import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import InputChecksheet from "../pages/InputChecksheet";
import Location from "../pages/Location";
import Shift from "../pages/Shift";
import Task from "../pages/Task";
import Employee from "../pages/Employee";
import Login from "../pages/Login";

const router = createBrowserRouter([{
    path: "/",
    element: <InputChecksheet />
}, {
    path: "login",
    element: <Login />
}, {
    path: "dashboard",
    element: <Dashboard />
}, {
    path: "employee",
    element: <Employee />,
}, {
    path: "location",
    element: <Location />
}, {
    path: "shift",
    element: <Shift />
}, {
    path: "task",
    element: <Task />
}]);

export default router;