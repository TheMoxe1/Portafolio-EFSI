import "./App.css";
import Seccion from "./components/Seccion";
import Imagen from "./santiagoFoto.jpeg";
import imgProg from "./OIP.jpg";
import experiencia from "./fotoEstudiando.jpg";
import educacion from "./fotoOrt.png";
function App() {
  return (
    <div>
      <header className="header">
        <h1>Santiago Cañete</h1>
        <nav>
          <ul>
            <li>
              <a href="#Sobre mi">Sobre mi</a>
            </li>
            <li>
              <a href="#Conocimientos">Conocimientos</a>
            </li>
            <li>
              <a href="#Experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#Educación">Educación</a>
            </li>
            <li>
              <a href="#Certificaciones">Certificaciones</a>
            </li>
            <li>
              <a href="#Contacto">Contactos</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="sobremi">
        <div className="centrador">
          <Seccion className="Sobre mí"></Seccion>
          <img id="imagen" src={Imagen} alt="imagen"></img>
          <p>
            ¡Hola! Soy Santiago Cañete, un apasionado de la programación y el
            fitness. Me encanta desarrollar software creativo y desafiante,
            mientras mantengo mi cuerpo en forma en el gimnasio. ¡Bienvenido a
            mi mundo de código y músculos!{" "}
          </p>

          <Seccion className="Conocimientos"> </Seccion>
          <div id="contenedor">
            <img id="imagenProg" src={imgProg} alt="imagen"></img>
            <p>
              1. C#:<br></br>Como parte de mis habilidades, domino el uso de C#,
              un lenguaje de programación versátil desarrollado por Microsoft.
              Utilizo C# para desarrollar aplicaciones de escritorio, servicios
              web y aplicaciones web a través del framework .NET. Su sintaxis
              intuitiva y su amplio soporte en la comunidad de desarrollo hacen
              que sea una herramienta poderosa en mi caja de herramientas.
              <br></br>
              2. HTML:<br></br>HTML es otro de mis puntos fuertes. Con HTML,
              puedo estructurar y crear el contenido de páginas web de manera
              efectiva. Desde encabezados hasta imágenes y formularios, utilizo
              HTML para definir la arquitectura de las aplicaciones web que
              construyo.<br></br>
              3. CSS:<br></br>Mi dominio de CSS me permite dar vida a mis
              diseños web. Utilizo CSS para definir estilos, como colores,
              fuentes y diseños, y así crear experiencias de usuario visualmente
              atractivas y coherentes en mis proyectos.<br></br>4. JavaScript:
              <br></br>Por último, pero no menos importante, está JavaScript.
              Como parte de mis habilidades, utilizo JavaScript para agregar
              interactividad y dinamismo a mis aplicaciones web. Desde
              animaciones hasta validación de formularios, JavaScript amplía
              enormemente las capacidades de mis proyectos.
            </p>
          </div>

          <Seccion className="Experiencia"></Seccion>
          <div id="contenedor1">
            <img id="imagenEstudio" src={experiencia} alt="imagen"></img>
            <p>
              Durante mi etapa en la secundaria, adquirí experiencia en el
              desarrollo web a través de numerosas tareas que requerían el uso
              de C#, HTML, CSS y JavaScript. Participé en proyectos que
              abarcaban desde la creación de aplicaciones de escritorio hasta la
              implementación de lógica del lado del servidor, lo que me permitió
              desarrollar una sólida comprensión de C#. Además, aprendí a
              estructurar el contenido web y a manipular elementos HTML, así
              como a mejorar la apariencia y el diseño de mis proyectos
              utilizando CSS. Finalmente, implementé interactividad y dinamismo
              en mis proyectos mediante JavaScript, lo que me proporcionó una
              base sólida en estas tecnologías clave del desarrollo web. Esta
              experiencia temprana ha sentado las bases de mi carrera
              profesional y estoy emocionado de continuar desarrollándome en
              este campo apasionante.
            </p>
          </div>

          <Seccion className="Educación"></Seccion>
<div class="contenedorEducacion">
  <img class="imagenEducacion" src={educacion} alt="imagen"></img>
  <p class="textoEducacion">
    Durante mi tiempo en la Escuela Ort en la secundaria, desarrollé
    experiencia en el desarrollo web a través de una serie de tareas que
    implicaban el uso de C#, HTML, CSS y JavaScript. Desde la creación
    de aplicaciones de escritorio hasta la implementación de lógica del
    lado del servidor, tuve la oportunidad de explorar y comprender
    profundamente C#. Además, en la primaria Scholem, obtuve una sólida
    base académica que sentó las bases para mi aprendizaje posterior. En
    Ort, aprendí a estructurar el contenido web y manipular elementos
    HTML, así como a mejorar el diseño y la apariencia de mis proyectos
    mediante CSS. Finalmente, implementé interactividad y dinamismo en
    mis proyectos usando JavaScript. Esta experiencia en desarrollo web,
    combinada con mi educación en Ort y Scholem, ha sido fundamental en
    mi desarrollo profesional y me ha preparado para enfrentar desafíos
    futuros con confianza y habilidad.
  </p>
</div>

          <Seccion className="Certificaciones"></Seccion>
          <p>
            He completado mi educación primaria, obteniendo el certificado
            correspondiente que atestigua mi finalización exitosa de esta etapa
            fundamental en mi formación académica. Además, para ampliar mis
            habilidades en programación y desarrollo, he dedicado tiempo a
            participar en plataformas de aprendizaje en línea como HackerRank,
            donde he completado una variedad de desafíos y ejercicios para
            fortalecer mis habilidades en programación. Mi participación activa
            en HackerRank no solo ha mejorado mis capacidades técnicas, sino que
            también ha desarrollado mi capacidad para resolver problemas de
            manera eficiente y creativa. Además, he obtenido certificados de
            Google en diversas áreas relacionadas con la tecnología, lo que
            demuestra mi compromiso con el aprendizaje continuo y mi interés en
            mantenerme actualizado con las últimas tendencias y tecnologías en
            el campo de la informática. Estos certificados son testimonio de mi
            dedicación para mejorar constantemente mis habilidades y
            conocimientos en el ámbito de la tecnología, y estoy emocionado de
            seguir creciendo y aprendiendo en este apasionante campo.
          </p>

          <Seccion className="Contacto"></Seccion>
          <p>En caso de querer contactar conmigo ingrese sus datos aqui:</p>
          <form action="submit" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required></input>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required></input>

            <label for="comentario">Comentario:</label>
            <textarea
              id="comentario"
              name="comentario"
              rows="4"
              required
            ></textarea>

            <input type="submit" value="Enviar"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
