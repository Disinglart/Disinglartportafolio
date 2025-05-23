// Esperar a que todo el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".filtros-galeria a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();

      // Quitar clase activo de todos los enlaces
      enlaces.forEach((el) => el.classList.remove("activo"));
      enlace.classList.add("activo");

      const filtro = enlace.dataset.filter;

      // Ocultar todas las secciones
      const secciones = document.querySelectorAll(
        ".audiovisual, .branding, .fotografia, .impresion, .logos, .piezas, .ilustracion"
      );
      secciones.forEach((sec) => sec.classList.remove("mostrar"));

      // Mostrar las que coincidan con el filtro
      if (filtro === "todos") {
        secciones.forEach((sec) => sec.classList.add("mostrar"));
      } else {
        const visibles = document.querySelectorAll(`.${filtro}`);
        visibles.forEach((sec) => sec.classList.add("mostrar"));
      }
    });
  });

  // Mostrar todas por defecto
  const todas = document.querySelectorAll(
    ".audiovisual, .branding, .fotografia, .impresion, .logos, .piezas, .ilustracion"
  );
  todas.forEach((sec) => sec.classList.add("mostrar"));
});

document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".filtros-galeria a");
  const elementos = document.querySelectorAll(".galeria a");

  botones.forEach(boton => {
    boton.addEventListener("click", function (e) {
      e.preventDefault();

      // Quitar clase "activo" de todos los botones
      botones.forEach(b => b.classList.remove("activo"));
      this.classList.add("activo");

      const filtro = this.getAttribute("data-filter");

      elementos.forEach(el => {
        el.classList.remove("mostrar");

        if (filtro === "todos" || el.querySelector(`.${filtro}`)) {
          el.classList.add("mostrar");
        }
      });
    });
  });
});