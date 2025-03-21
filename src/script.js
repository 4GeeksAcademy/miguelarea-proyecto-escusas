window.onload = function() {
  let quien = ['El perro del vecino', 'Mi abuela', 'La vecina guapa', 'Mi amiga'];
  let accion = ['se comio', 'orino en', '', 'rompio'];
  let que = ['mi tarea', 'mi telefono', 'el coche'];
  let cuando = ['antes de la clase', 'cuando estaba durmiendo', 'mientras estaba viendo una serie', 'durante mi comida', 'mientras estaba disfrutando'];

  function generateExcusa() {
      let randomquien = quien[Math.floor(Math.random() * quien.length)];
      let randomAccion = accion[Math.floor(Math.random() * accion.length)];
      let randomque = que[Math.floor(Math.random() * que.length)];
      let randomcuando = cuando[Math.floor(Math.random() * cuando.length)];

      return `${randomquien} ${randomAccion} ${randomque} ${randomcuando}`;
  }

  document.getElementById('excusa').innerHTML = generateExcusa();
};