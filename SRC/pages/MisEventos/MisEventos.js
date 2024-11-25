import { createPage } from "../../utils/functions/createPage";
import { API } from "../../utils/API/API";
import "./MisEventos.css";

export const MisEventos = async () => {
  const div = createPage("mis-eventos");

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  if (!user || !token) {
    console.log("Usuario no encontrado o no autenticado.");
    div.innerHTML = "<p>Debes iniciar sesión para ver tus eventos favoritos.</p>";
    return;
  }

  const response = await API({ endpoint: `/users/${user._id}` });

  if (!response || response.length === 0) {
    div.innerHTML = "<p>No tienes eventos favoritos aún.</p>";
    return;
  }


  const uniqueEventIds = new Set();

  for (const evento of response.favoritos) {
   
    if (uniqueEventIds.has(evento._id)) {
      continue;
    }

   
    uniqueEventIds.add(evento._id);

    
    const eventoDiv = document.createElement("div");
    eventoDiv.className = "eventoFavorito";

    const titulo = document.createElement("h3");
    titulo.textContent = evento.titulo;

    const img = document.createElement("img");
    img.src = evento.imagen;

    const descripcion = document.createElement("p");
    descripcion.textContent = evento.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `${evento.precio}€`;

    eventoDiv.append(titulo, img, descripcion, precio);
    div.append(eventoDiv);
  }
};
