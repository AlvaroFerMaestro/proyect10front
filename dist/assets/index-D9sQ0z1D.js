(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const E=n=>{const o=document.querySelector("main"),t=document.createElement("div");return o.innerHTML="",t.id=n,o.append(t),t},M="http://localhost:3000/api/v1",v=async({endpoint:n,method:o="GET",body:t,isJSON:e=!0})=>{const s={};e&&(s["Content-Type"]="application/json");const c=await fetch(M+n,{body:e?JSON.stringify(t):t,method:o,headers:s});return console.log(M+n),await c.json()},y=async()=>{const n=E("mis-eventos"),o=JSON.parse(localStorage.getItem("user")),t=localStorage.getItem("token");if(!o||!t){console.log("Usuario no encontrado o no autenticado."),n.innerHTML="<p>Debes iniciar sesión para ver tus eventos favoritos.</p>";return}const e=await v({endpoint:`/users/${o._id}`});if(!e||e.favoritos.length===0){n.innerHTML="<p>No tienes eventos favoritos aún.</p>";return}const s=new Set;for(const c of e.favoritos){if(s.has(c._id))continue;s.add(c._id);const a=document.createElement("div");a.className="eventoFavorito";const i=document.createElement("h3");i.textContent=c.titulo;const r=document.createElement("img");r.src=c.imagen;const m=document.createElement("p");m.textContent=c.descripcion;const d=document.createElement("p");d.textContent=`${c.precio}€`;const l=document.createElement("button");l.textContent="Eliminar de favoritos",l.className="eliminarBtn",l.addEventListener("click",async()=>{try{const p=await v({method:"PUT",endpoint:`/users/${o._id}`,body:{favoritos:e.favoritos.filter(f=>f._id!==c._id)}});a.remove()}catch(p){console.error("Error al eliminar el evento de favoritos",p)}}),a.append(i,r,m,d,l),n.append(a)}},O=(n,o)=>{n.preventDefault(),window.history.pushState("","",o.path),o.page()},w=()=>{const n=document.querySelector("main"),o=document.createElement("div");o.classList="carousel";const t=document.createElement("div");t.classList="wrap";const e=document.createElement("img");e.src="https://phantom-elmundo.unidadeditorial.es/c61fbfd1155ce45ac2152faa3392a150/resize/646/f/webp/assets/multimedia/imagenes/2024/07/03/17199958920802.jpg";const s=document.createElement("img");s.src="https://i0.wp.com/22minutoscon.com/wp-content/uploads/2024/06/Estopa.jpeg?w=1022&ssl=1";const c=document.createElement("img");c.src="https://www.elfest.es/files/events/57/image_5758_1_large.jpeg";const a=document.createElement("img");a.src="https://cd1.taquilla.com/data/images/t/5c/juan-davila__330x275.webp";const i=document.createElement("img");i.src="https://www.atlantico.net/asset/thumbnail,1920,1080,center,center/media/atlantico/images/2024/07/10/2024071017265164074.jpg";const r=document.createElement("img");r.src="https://estaticos.esmadrid.com/cdn/farfuture/KMsh5_8cY5OM-9rGYLHz-qC_YX1LCBwdomiEos7_aII/mtime:1697802878/sites/default/files/styles/content_type_full/public/eventos/eventos/mad_cool_festival_2024.jpg?itok=BVpcHldu";const m=document.createElement("img");m.src="https://phantom-elmundo.unidadeditorial.es/c61fbfd1155ce45ac2152faa3392a150/resize/646/f/webp/assets/multimedia/imagenes/2024/07/03/17199958920802.jpg";const d=document.createElement("img");d.src="https://i0.wp.com/22minutoscon.com/wp-content/uploads/2024/06/Estopa.jpeg?w=1022&ssl=1";const l=document.createElement("img");l.src="https://www.elfest.es/files/events/57/image_5758_1_large.jpeg";const p=document.createElement("img");p.src="https://cd1.taquilla.com/data/images/t/5c/juan-davila__330x275.webp";const f=document.createElement("img");f.src="https://www.atlantico.net/asset/thumbnail,1920,1080,center,center/media/atlantico/images/2024/07/10/2024071017265164074.jpg";const x=document.createElement("img");x.src="https://estaticos.esmadrid.com/cdn/farfuture/KMsh5_8cY5OM-9rGYLHz-qC_YX1LCBwdomiEos7_aII/mtime:1697802878/sites/default/files/styles/content_type_full/public/eventos/eventos/mad_cool_festival_2024.jpg?itok=BVpcHldu";const _=document.createElement("img");_.src="https://phantom-elmundo.unidadeditorial.es/c61fbfd1155ce45ac2152faa3392a150/resize/646/f/webp/assets/multimedia/imagenes/2024/07/03/17199958920802.jpg";const C=document.createElement("img");C.src="https://i0.wp.com/22minutoscon.com/wp-content/uploads/2024/06/Estopa.jpeg?w=1022&ssl=1";const L=document.createElement("img");L.src="https://www.elfest.es/files/events/57/image_5758_1_large.jpeg";const I=document.createElement("img");I.src="https://cd1.taquilla.com/data/images/t/5c/juan-davila__330x275.webp";const N=document.createElement("img");N.src="https://www.atlantico.net/asset/thumbnail,1920,1080,center,center/media/atlantico/images/2024/07/10/2024071017265164074.jpg";const S=document.createElement("img");S.src="https://estaticos.esmadrid.com/cdn/farfuture/KMsh5_8cY5OM-9rGYLHz-qC_YX1LCBwdomiEos7_aII/mtime:1697802878/sites/default/files/styles/content_type_full/public/eventos/eventos/mad_cool_festival_2024.jpg?itok=BVpcHldu",n.append(o),o.append(t),t.append(e),t.append(s),t.append(c),t.append(a),t.append(i),t.append(r),t.append(m),t.append(d),t.append(l),t.append(p),t.append(f),t.append(x),t.append(_),t.append(C),t.append(L),t.append(I),t.append(N),t.append(S)},$=async()=>{const n=E("eventos"),o=document.querySelector("#eventos");o.innerHTML="";const t=document.createElement("div");t.className="divMusic";const e=document.createElement("img");e.className="imgMusic",e.src="https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png",w();const s=await v({endpoint:"/eventos"});console.log(s);for(const c of s){const a=document.createElement("div"),i=document.createElement("h3"),r=document.createElement("img"),m=document.createElement("p"),d=document.createElement("p"),l=document.createElement("button"),p=document.createElement("div");a.className="divEvento",p.className="divByP",l.className="boton",l.textContent="Asistir",i.textContent=c.titulo,r.src=c.imagen,m.textContent=c.descripcion,d.textContent=`${c.precio}€`,l.addEventListener("click",()=>H(c)),p.append(l,d),a.append(i,r,m,p),n.append(a,t),t.append(e)}},H=async n=>{const o=JSON.stringify({favoritos:[n._id]}),t=JSON.parse(localStorage.getItem("user")),e={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:o},s=await fetch(`http://localhost:3000/api/v1/users/${t._id}`,e);if(s.ok){const c=await s.json();console.log("Evento añadido a favoritos:",c),z(n)}else console.log("Error al añadir a favoritos")},z=n=>{const o=document.getElementById("mis-eventos");if(o){const t=document.createElement("div");t.className="eventoFavorito";const e=document.createElement("h3");e.textContent=n.titulo;const s=document.createElement("img");s.src=n.imagen;const c=document.createElement("p");c.textContent=n.descripcion;const a=document.createElement("p");a.textContent=`${n.precio}€`,t.append(e,s,c,a),o.append(t)}},b=({text:n,fnc:o,className:t})=>{const e=document.createElement("button");return e.classList.add("main-button"),e.classList.add(t),e.textContent=n,e.addEventListener("click",o),e},g=({labelText:n,type:o="text",required:t=!0})=>`
        <div class = "field-form">
           <label>${n}</label>
           <input type = "${o}" required="${t}"/>
        </div>
   `,T=n=>{n.className="login-form",n.innerHTML=`
                ${g({labelText:"Nombre Usuario",type:"text",name:"username"})}
                ${g({labelText:"Contraseña",type:"password",name:"password"})}
            `;const o=document.createElement("p");o.className="error-message",o.style.color="red",o.style.display="none",n.append(o),n.append(b({text:"Login",fnc:()=>handleLogin(n,o)}))},R=n=>["user1","user2","user3"].includes(n),Y=n=>{n.className="Register-form",n.innerHTML=`
        ${g({labelText:"Nombre Usuario",type:"text",id:"username"})}
        ${g({labelText:"Correo",type:"text",id:"correo"})}
        ${g({labelText:"Contraseña",type:"password",id:"password"})}
        ${g({labelText:"Elige una foto de perfil",type:"file",id:"profileImage"})}
        <p id="error-message" class="error-message">El usuario ya existe</p>
    `;const o=n.querySelector("#username"),t=n.querySelector("#error-message");n.append(b({text:"Registrarse",fnc:()=>{const e=o.value;R(e)?t.classList.add("show-error"):(t.classList.remove("show-error"),console.log("Registrando usuario..."))}}))},j=(n,o="success",t=2e3)=>{const e=document.createElement("div");e.className=`custom-alert ${o}`,e.textContent=n,e.style.backgroundColor=o==="success"?"green":"red",document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transition="opacity 5.5s",setTimeout(()=>e.remove(),1e3)},t),setTimeout(()=>{window.location.href="/Eventos"},1e3)},h=async n=>{n.preventDefault();const[o,t]=n.target,e={userName:o.value,password:t.value},s=await v({endpoint:"/users/login",body:e,method:"POST"});s&&s.token&&s.user?(localStorage.setItem("token",s.token),localStorage.setItem("user",JSON.stringify(s.user)),localStorage.setItem("img",s.user.img||"default-profile.png"),console.log("Login exitoso",s),j(`Conectado correctamente, bienvenido ${s.user.name||s.user.userName}. Ya puedes añadir tus eventos favoritos.`,"success"),P()):(console.log("Error en la autenticación"),j("Error al iniciar sesión. Verifica tu usuario y contraseña e inténtalo de nuevo.","error"))},F=()=>{JSON.parse(localStorage.getItem("user"));const n=localStorage.getItem("img")||"default-profile.png";console.log(n);const o=document.createElement("div"),t=document.createElement("img");t.classList="profileImg",t.src=n,t.alt="Imagen de perfil",t.addEventListener("click",()=>{y()});const e=document.createElement("button");e.id="logoutButton",e.textContent="Cerrar sesión",e.addEventListener("click",U),o.appendChild(t),o.appendChild(e),document.body.appendChild(o)},U=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("img"),window.location.href="/Eventos",console.log("Sesión cerrada.")},P=()=>{localStorage.getItem("token")&&F()};P();const k=(n,o="success",t=5e3)=>{const e=document.createElement("div");e.className=`custom-alert ${o}`,e.textContent=n,e.style.position="fixed",e.style.top="250px",e.style.right="35%",e.style.padding="10px 20px",e.style.backgroundColor=o==="success"?"green":"red",e.style.color="white",e.style.borderRadius="5px",e.style.boxShadow="0 2px 5px rgba(0, 0, 0, 0.2)",e.style.zIndex="1000",document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transition="opacity 0.5s",setTimeout(()=>e.remove(),500)},t)},B=async n=>{n.preventDefault();const[o,t,e,s]=n.target,c={userName:o.value,password:t.value,Email:e.value,img:s.value},a=await v({endpoint:"/users/register",body:c,method:"POST"});a&&a.success?(console.log("Registro exitoso",a),k("Registrado correctamente. Por favor inicia sesión para acceder a tu cuenta.","success",5e3),setTimeout(()=>{window.location.href="/Login"},5e3)):(console.error("Error al registrarse",a),k("Error al registrarse. Inténtalo nuevamente.","error",5e3)),console.log(a),console.log(n.target)};let u=!0;const A=()=>{const n=E("login"),o=document.createElement("div");o.className="logdivMusic";const t=document.createElement("img");t.className="logimgMusic",t.src="https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png";const e=document.createElement("form");n.append(b({text:"Registrate si no tiene cuenta",fnc:()=>{u=!u,u?T(e):Y(e),document.querySelector(".button-toggle").textContent=u?"Registrate si no tiene cuenta":"Conectate si ya tienes cuenta",u?e.removeEventListener("submit",B):e.removeEventListener("submit",h),e.addEventListener("submit",u?h:B)},className:"button-toggle"})),e.addEventListener("submit",h),T(e),n.append(e,t)},q=async()=>{const n=E("principal"),o=document.querySelector("#principal");o.innerHTML="",w();const t=document.createElement("div");t.className="divMusic";const e=document.createElement("img");e.className="imgMusic",e.src="https://static.vecteezy.com/system/resources/previews/022/984/297/non_2x/headphones-brush-painted-icon-free-png.png";const s=await v({endpoint:"/eventos"});console.log(s);for(const c of s){const a=document.createElement("div"),i=document.createElement("h3"),r=document.createElement("img"),m=document.createElement("p"),d=document.createElement("div");a.className="divEvento",d.className="divByP",i.textContent=c.titulo,r.src=c.imagen,m.textContent=c.descripcion,a.append(i,r,m,d),n.append(a,t),t.append(e)}},D=[{path:"/",text:"Home",page:q},{path:"/Eventos",text:"Eventos",page:$},{path:"/MisEventos",text:"Mis Eventos",page:y},{path:"/Login",text:"Conectate",page:A}],J=()=>{const n=G(),o=K(),t=document.createElement("header"),e=document.createElement("nav"),s=document.createElement("ul");D.forEach(c=>{const a=document.createElement("li"),i=document.createElement("a");c.path==="/MisEventos"&&(!n||!o)?a.style.display="none":a.style.display="flex",i.addEventListener("click",r=>O(r,c)),i.textContent=c.text,i.href=c.path,a.appendChild(i),s.appendChild(a)}),e.appendChild(s),t.appendChild(e),document.body.appendChild(t)};function G(){return localStorage.getItem("user")}function K(){return localStorage.getItem("token")}const V=()=>{const n=document.createElement("main");document.body.append(n)};J();V();q();y();w();$();