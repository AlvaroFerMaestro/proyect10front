import { Eventos } from "../../pages/Eventos/Eventos";
import { Login } from "../../pages/Login/Login";
import { MisEventos } from "../../pages/MisEventos/MisEventos";
import { Principal } from "../../pages/Principal/Principal";

export const routes = [
    {
        path: "/",
        text: "Home",
        page: Principal
    },
    {
        path: "/Eventos",
        text: "Eventos",
        page: Eventos
    },
    {
        path: "/MisEventos",
        text: "Mis Eventos",
        page: MisEventos
    },
    {
        path: "/Login",
        text: "Conectate",
        page: Login
    },
]