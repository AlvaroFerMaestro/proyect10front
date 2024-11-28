import { Button } from "../../components/Button/Button";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { createPage } from "../../utils/functions/createPage";
import { doLogin } from "../../utils/functions/doLogin";
import { doRegister } from "../../utils/functions/DoRegister";


import "./Login.css"

let showLogin = true;


export const Login = () => {
    const div =  createPage("login");
    const logdivMusic = document.createElement("div");
    logdivMusic.className = "logdivMusic";
    const logimgMusic = document.createElement("img")
    logimgMusic.className = "logimgMusic"
    logimgMusic.src = "https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png"

    const form = document.createElement("form");

    div.append( Button({ text: "Registrate si no tiene cuenta", fnc: () => {
        showLogin = !showLogin;
        showLogin ? LoginForm(form) : RegisterForm(form);
        document.querySelector(".button-toggle").textContent = showLogin 
        ? "Registrate si no tiene cuenta" 
        : "Conectate si ya tienes cuenta"
        if(showLogin){
            form.removeEventListener("submit", doRegister);
        } else{
            form.removeEventListener("submit", doLogin)
        }
        form.addEventListener("submit", showLogin ? doLogin : doRegister)
    },  
     className: "button-toggle",
    })
   
);

    form.addEventListener("submit", doLogin)
    LoginForm(form)
    div.append(form, logimgMusic)
    /* logdivMusic.append(logdivMusic) */
    
}