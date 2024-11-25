import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";
import "./RegisterForm.css"

/* export const RegisterForm = (form) =>{
    form.className = "Register-form";

    form.innerHTML = `
    ${FieldForm({ labelText: "Nombre Usuario", type: "text" })}
    ${FieldForm({ labelText: "Contraseña", type: "password" })}
    `;

    form.append (Button({ text: "Registrarse", fnc: () => {} }));

    
} */
const userExists = (username) => {
    
    const existingUsers = ["user1", "user2", "user3"]; 
    return existingUsers.includes(username);
};


export const RegisterForm = (form) => {
    form.className = "Register-form";

    form.innerHTML = `
        ${FieldForm({ labelText: "Nombre Usuario", type: "text", id: "username" })}
        ${FieldForm({ labelText: "Correo", type: "text", id: "correo" })}
        ${FieldForm({ labelText: "Contraseña", type: "password", id: "password" })}
        ${FieldForm({ labelText: "Elige una foto de perfil", type: "file", id: "correo" })}
        <p id="error-message" class="error-message">El usuario ya existe</p>
    `;

    const usernameInput = form.querySelector("#username");
    const errorMessage = form.querySelector("#error-message");

    form.append(
        Button({
            text: "Registrarse",
            fnc: () => {
                const username = usernameInput.value;
                if (userExists(username)) {
                    errorMessage.classList.add("show-error");
                } else {
                    errorMessage.classList.remove("show-error");
                    console.log("Registrando usuario...");
                }
            },
        })
        
    );
};
