/* import { navigate } from "../../utils/functions/navigate";
import { routes } from "../../utils/routes/routes";
import "./Header.css"

export const Header = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")

    for (const route of routes) {
        const li = document.createElement("li");
        const a = document.createElement("a");


        a.addEventListener ("click", (e) => navigate(e, route));


        a.textContent = route.text;
        a.href = route.path;
        li.append(a);
        ul.append(li)
    }
    header.append(nav)
    nav.append(ul)
    document.body.append(header)
} */


    import { MisEventos } from "../../pages/MisEventos/MisEventos";
import { navigate } from "../../utils/functions/navigate";
import { routes } from "../../utils/routes/routes";
import "./Header.css";

export const Header = () => {
    const user = getUser();  
    const token = getToken();  

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    
    routes.forEach(route => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        // Si el usuario no está logueado y la ruta es /mis-eventos, no mostramos ese enlace
        if (route.path === "/MisEventos" && (!user || !token)) {
            li.style.display = "none";  // Ocultar el elemento
        }else{
            li.style.display = "flex"
            
        }
        
       
        a.addEventListener("click", (e) => navigate(e, route));
        a.textContent = route.text;
        a.href = route.path;
        li.appendChild(a);
        ul.appendChild(li);
    });

    
    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.appendChild(header);
    
};



function getUser() {
    return localStorage.getItem("user"); 
}

function getToken() {
    return localStorage.getItem("token"); 
}
