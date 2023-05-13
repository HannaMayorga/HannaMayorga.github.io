let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#0a516d">Desarrolladora Junior Front-end/ Estudiante de empresas del entretenimiento.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
