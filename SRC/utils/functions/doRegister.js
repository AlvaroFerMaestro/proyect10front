    import { API } from "../API/API";

    export const doRegister = async (e) => {
    e.preventDefault();

    const [userNameInput, passwordInput] = e.target;

    const body = {
        userName: userNameInput.value,
        password: passwordInput.value,
    }

    const res = await API ({ endpoint: "/users/register", body, method: "POST" });
    alert("Registrado Correctamente. Por favor logea para acceder a tu cuenta")
    /* window.location.href = "/Login"; */

    
    console.log(res);
    console.log(e.target);
    
    
}
     



