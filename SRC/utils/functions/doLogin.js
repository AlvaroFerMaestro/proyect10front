
import { API } from "../API/API";
import "./doLogin.css";

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
        localStorage.setItem("img", res.user.img || "default-profile.png"); // Guarda la URL de la imagen de perfil

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
    const user = JSON.parse(localStorage.getItem("user"));
    const imgPerfil = localStorage.getItem("img") || "default-profile.png"; 
    console.log(imgPerfil);
    

    
    const profileContainer = document.createElement("div");
    

    
    const profileImg = document.createElement("img");
    profileImg.classList = "profileImg"
    profileImg.src = imgPerfil;
    profileImg.alt = "Imagen de perfil";
   
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutButton";
    logoutButton.textContent = "Cerrar sesión";
    logoutButton.addEventListener("click", handleLogout);

    // Añadir elementos al contenedor
    profileContainer.appendChild(profileImg);
    profileContainer.appendChild(logoutButton);

    // Añadir al cuerpo del documento
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
