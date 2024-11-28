
import { MisEventos } from "../../pages/MisEventos/MisEventos";
import { API } from "../API/API";
import "./doLogin.css";

const showAlert = (message, type = "success", duration = 2000) => {
    
    const alertBox = document.createElement("div");
    alertBox.className = `custom-alert ${type}`;
    alertBox.textContent = message;

    
    alertBox.style.backgroundColor = type === "success" ? "green" : "red";
    
    
    document.body.appendChild(alertBox);

    
    setTimeout(() => {
        alertBox.style.opacity = "0"; 
        alertBox.style.transition = "opacity 5.5s";
        setTimeout(() => alertBox.remove(), 1000); 
    }, duration);
    setTimeout(() => {
        window.location.href = "/Eventos";
    }, 1000); 
};


export const doLogin = async (e) => {
    e.preventDefault();

    const [userNameInput, passwordInput] = e.target;

    const body = {
        userName: userNameInput.value,
        password: passwordInput.value,
    };

    const res = await API({ endpoint: "/users/login", body, method: "POST" });

    if (res && res.token && res.user) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("img", res.user.img || "default-profile.png");

        console.log("Login exitoso", res);
        showAlert(`Conectado correctamente, bienvenido ${res.user.name || res.user.userName}. Ya puedes añadir tus eventos favoritos.`, "success");

        checkAuthAndShowLogout();

    } else {
        console.log("Error en la autenticación");
        showAlert("Error al iniciar sesión. Verifica tu usuario y contraseña e inténtalo de nuevo.", "error");
    }
};


const createLogoutButton = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const imgPerfil = localStorage.getItem("img") || "default-profile.png"; 
    console.log(imgPerfil);
    

    
    const profileContainer = document.createElement("div");
    

    
    const profileImg = document.createElement("img");
    profileImg.classList = "profileImg"
    profileImg.src = imgPerfil;
    profileImg.alt = "Imagen de perfil"; 
    profileImg.addEventListener("click", () => {
        MisEventos()
    });
   
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutButton";
    logoutButton.textContent = "Cerrar sesión";
    logoutButton.addEventListener("click", handleLogout);

    
    profileContainer.appendChild(profileImg);
    profileContainer.appendChild(logoutButton);

   
    document.body.appendChild(profileContainer);
};

const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("img");
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
