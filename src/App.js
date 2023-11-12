import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          Esto es lo que dicen nuestros antiguos alumnos sobre freeCodeCamp:
        </h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="Shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Al cabo de un año tenía un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp cambió mi vida.</strong>"
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="Emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong>freeCodeCamp me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="Sarah"
          cargo="Ingeniero de Software"
          empresa="Chatdesk"
          testimonio="<strong>FreeCodeCamp fue la puerta de entrada a mi carrera</strong> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel de principiante total hasta un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble."
        />
      </div>
    </div>
  );
}

export default App;
