import { HOME, CREATE, READ, UPDATE, DELETE } from "./consts";

import Home from "../pages/Home";
import Create from "../pages/Create";
import Read from "../pages/Read";
import Update from "../pages/Update";
import Delete from "../pages/Delete";


export const routes = [
    {
        path: HOME,
        element: Home,
    },
    {
        path: CREATE,
        element: Create,
    },
    {
        path: READ,
        element: Read,
    },
    {
        path: UPDATE,
        element: Update,
    },
    {
        path: DELETE,
        element: Delete,
    },
]