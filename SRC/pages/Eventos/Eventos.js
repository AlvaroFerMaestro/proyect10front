import { carousel } from "../../components/Carousel/carousel";
import { API } from "../../utils/API/API";
import { createPage } from "../../utils/functions/createPage"
import { MisEventos } from "../MisEventos/MisEventos";
import "./Eventos.css"

export const Eventos = async () => {
  const divEventos =  createPage("eventos");
   const eventos = document.querySelector("#eventos");
  eventos.innerHTML = ""
  
  const divMusic = document.createElement("div");
    divMusic.className = "divMusic";
    const imgMusic = document.createElement("img")
    imgMusic.className = "imgMusic"
    imgMusic.src = "https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png"
  carousel();
  const response = await API ({ endpoint: "/eventos" });
  console.log(response);

  for (const evento of response) {
   const divEvento = document.createElement("div");
   const titulo = document.createElement("h3");
   const img = document.createElement("img");
   const descripcion = document.createElement("p");
   const precio = document.createElement("p");
   const boton = document.createElement("button");
   const divByP = document.createElement("div");

   divEvento.className = "divEvento";
   divByP.className = "divByP"
   boton.className = "boton"
   boton.textContent = "Asistir"
   titulo.textContent = evento.titulo;
   img.src = evento.imagen
   descripcion.textContent = evento.descripcion;
   precio.textContent = `${evento.precio}€`
     

   boton.addEventListener("click", () => addFavorito(evento));

   divByP.append(boton, precio)
   divEvento.append(titulo, img, descripcion, divByP)
   
   divEventos.append(divEvento, divMusic)
  divMusic.append(imgMusic)

  };

}

const addFavorito = async (evento) => {
  const objetoFInal = JSON.stringify({
    favoritos: [evento._id],
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const opciones = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: objetoFInal,
  };

  const res = await fetch(`http://localhost:3000/api/v1/users/${user._id}`, opciones);

  if (res.ok) {
    const respuesta = await res.json();
    console.log("Evento añadido a favoritos:", respuesta);

    // Actualiza la interfaz para reflejar que el evento ha sido añadido
    actualizarMisEventos(evento);
  } else {
    console.log("Error al añadir a favoritos");
  }
};
const actualizarMisEventos = (evento) => {
  // Selecciona el contenedor de "Mis eventos" usando el id
  const misEventosDiv = document.getElementById("mis-eventos");

  if (misEventosDiv) {
    const nuevoEventoDiv = document.createElement("div");
    nuevoEventoDiv.className = "eventoFavorito";
    
    const titulo = document.createElement("h3");
    titulo.textContent = evento.titulo;

    const img = document.createElement("img");
    img.src = evento.imagen;

    const descripcion = document.createElement("p");
    descripcion.textContent = evento.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `${evento.precio}€`;

    // Añade los elementos al nuevo evento
    nuevoEventoDiv.append(titulo, img, descripcion, precio);

    // Añade el nuevo evento al contenedor de "Mis eventos"
    misEventosDiv.append(nuevoEventoDiv);
  }
}; 
 

