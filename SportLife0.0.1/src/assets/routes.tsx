import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home/index";
import { Sobre } from "../pages/sobre/index";
import { Contato } from "../pages/contato/index";
import { Perfil } from "../pages/perfil/index";
import { Layout } from "../Components/Layout";
import { NotFound } from "../pages/NotFound";
import Cadastro from "../pages/cadastro";
import Login from "../pages/login";


const router = createBrowserRouter ([
    {
        path:"/",
        element:<Cadastro/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        
        element: <Layout/>,
        children: [{
            path:"/home",
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
        },
        
        {
            path:"*",
            element:<NotFound/>
        }


    ]
    }
    
])

export {router}