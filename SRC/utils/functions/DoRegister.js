    import { API } from "../API/API";

/*     export const doRegister = async (e) => {
    e.preventDefault();

    const [userNameInput, passwordInput] = e.target;

    const body = {
        userName: userNameInput.value,
        password: passwordInput.value,
    }

    const res = await API ({ endpoint: "/users/register", body, method: "POST" });
    alert("Registrado Correctamente. Por favor logea para acceder a tu cuenta")
    

    
    console.log(res);
    console.log(e.target);
    
    
} */

    // Función para mostrar alertas personalizadas
const showAlert = (message, type = "success", duration = 5000) => {
    const alertBox = document.createElement("div");
    alertBox.className = `custom-alert ${type}`;
    alertBox.textContent = message;

    // Estilos básicos
    alertBox.style.position = "fixed";
    alertBox.style.top = "250px";
    alertBox.style.right = "35%";
    alertBox.style.padding = "10px 20px";
    alertBox.style.backgroundColor = type === "success" ? "green" : "red";
    alertBox.style.color = "white";
    alertBox.style.borderRadius = "5px";
    alertBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    alertBox.style.zIndex = "1000";

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = "0";
        alertBox.style.transition = "opacity 0.5s";
        setTimeout(() => alertBox.remove(), 500);
    }, duration);
};

// Función para el registro
export const doRegister = async (e) => {
    e.preventDefault();

    const [userNameInput, passwordInput, emailInput, imgInput] = e.target;

    const body = {
        userName: userNameInput.value,
        password: passwordInput.value,
        Email: emailInput.value,
        img: imgInput.value
    };

    const res = await API({ endpoint: "/users/register", body, method: "POST" });

    if (res && res.success) {
        console.log("Registro exitoso", res);
        showAlert("Registrado correctamente. Por favor inicia sesión para acceder a tu cuenta.", "success", 5000);
        setTimeout(() => {
            window.location.href = "/Login";
        }, 5000); 
    } else {
        console.error("Error al registrarse", res);
        showAlert("Error al registrarse. Inténtalo nuevamente.", "error", 5000);
    }

    console.log(res);
    console.log(e.target);
};

     



