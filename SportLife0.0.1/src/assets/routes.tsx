import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home/index";
import { Sobre } from "../pages/sobre/index";
import { Contato } from "../pages/contato/index";
import { Perfil } from "../pages/perfil/index";


const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/sobre",
        element:<Sobre/>
    },
    {
        path:"/contato",
        element:<Contato/>
    },
    {
        path:"/perfil",
        element:<Perfil/>
    }
])

export {router}