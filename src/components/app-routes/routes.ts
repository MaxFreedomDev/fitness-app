import Login from "../login/login";
import Main from "../main/main";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../utils/constance";



export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
];

export const privateRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    }
];