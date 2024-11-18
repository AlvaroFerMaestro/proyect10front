import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";

import "./LoginForm.css"

        export const LoginForm = (form) => {
            form.className = "login-form";
        
            
            form.innerHTML = `
                ${FieldForm({ labelText: "Nombre Usuario", type: "text", name: "username" })}
                ${FieldForm({ labelText: "Contraseña", type: "password", name: "password" })}
            `;
        
            
            const errorMessage = document.createElement("p");
            errorMessage.className = "error-message";
            errorMessage.style.color = "red"; 
            errorMessage.style.display = "none"; 

            
        
            form.append(errorMessage); 
        
            
            form.append(Button({ 
                text: "Login", 
                fnc: () => handleLogin(form, errorMessage)  
            }));
        };
        
        
        