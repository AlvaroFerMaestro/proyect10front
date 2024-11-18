import { API } from "../API/API";
import "./doLogin.css"


    export const doLogin = async (e) => {
        e.preventDefault();
    
        const [userNameInput, passwordInput] = e.target;
    
        const body = {
            userName: userNameInput.value,
            password: passwordInput.value,
        }
    
        const res = await API({ endpoint: "/users/login", body, method: "POST" });
    
        
        if (res && res.token && res.user) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user)); 
            console.log("Login exitoso", res);
            alert(`Conectado correctamente, bienvenido ${res.user.name || res.user.userName}. Ya puedes añadir tus eventos favoritos.`);
    
            
            checkAuthAndShowLogout();
            window.location.href = "/Eventos";
        } else {
            console.log("Error en la autenticación");
            alert("Error al iniciar sesión. Verifica tu usuario y contraseña e inténtalo de nuevo.");
        }
    };
    
    
    const createLogoutButton = () => {
        const logoutButton = document.createElement("button");
        logoutButton.id = "logoutButton";
        logoutButton.textContent = "Cerrar sesión";
        
        logoutButton.addEventListener("click", handleLogout);
    
        document.body.appendChild(logoutButton);
    };
    
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/Eventos"; 
        console.log("Sesión cerrada.");
    };
    
    
    const checkAuthAndShowLogout = () => {
        const token = localStorage.getItem("token");
        if (token) {
            createLogoutButton(); 
        }
    };
    
    
    checkAuthAndShowLogout();
    


