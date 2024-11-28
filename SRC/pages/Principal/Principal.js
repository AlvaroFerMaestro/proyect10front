
import { carousel } from "../../components/Carousel/carousel";
import { API } from "../../utils/API/API";
import { createPage } from "../../utils/functions/createPage";
import "./Principal.css"

export const Principal = async () => {
    const divPrincipal =  createPage("principal");
    const principal = document.querySelector("#principal");
    principal.innerHTML = ""
    
    carousel()
    const divMusic = document.createElement("div");
    divMusic.className = "divMusic";
    const imgMusic = document.createElement("img")
    imgMusic.className = "imgMusic"
    imgMusic.src = "https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png"
  const response = await API ({ endpoint: "/eventos" });
  console.log(response);

  for (const evento of response) {
   const divEvento = document.createElement("div");
   const titulo = document.createElement("h3");
   const img = document.createElement("img");
   const descripcion = document.createElement("p");
   
   const divByP = document.createElement("div");
   divEvento.className = "divEvento";
   divByP.className = "divByP"
   titulo.textContent = evento.titulo;
   img.src = evento.imagen
   descripcion.textContent = evento.descripcion;
     

   divEvento.append(titulo, img, descripcion, divByP)
   
   divPrincipal.append(divEvento, divMusic)
    divMusic.append(imgMusic)

  }


}
