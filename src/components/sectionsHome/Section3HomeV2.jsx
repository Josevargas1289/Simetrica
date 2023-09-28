import { Collapse, Divider } from "antd";
import phone from "../../assets/phone.png";
import { useNavigate } from "react-router-dom";

const Section3HomeV2 = () => {
    const navigate = useNavigate();

  const goContacto = () => {
    navigate("/contacto");
  };
  const text1 = (
    <div>
      <p>
        En Simétrica Dev Estudio, nuestro compromiso es asegurar un proceso de
        desarrollo óptimo que combine diseño y tecnología de manera excepcional.
        Nuestros equipos de desarrolladores y diseñadores trabajan en estrecha
        colaboración para crear una fusión única.
      </p>
      <br />
      <p>
        Garantizamos que cada etapa del diseño y desarrollo esté optimizada, con
        un enfoque especial en la experiencia del usuario (UX) y el diseño de
        interfaz (UI). Además, adaptamos nuestro enfoque ágil para satisfacer
        las necesidades de los diseñadores de experiencia de usuario, lo que nos
        permite crear software de primera categoría que se ajusta perfectamente
        a tu sistema y ofrece una experiencia superior.
      </p>
      <br />
      <p>
        Tu satisfacción es nuestra prioridad, y nos esforzamos por superar tus
        expectativas en cada proyecto.
      </p>
    </div>
  );

  const text2 = (
    <div>
      <p>
        En Simétrica Dev Estudio, nuestra solución de desarrollo de software es
        un enfoque meticuloso que abarca todos los elementos esenciales para dar
        vida a tu proyecto. Nos sumergimos en la creación de tu solución,
        adaptándola a tus objetivos específicos. Comenzamos desde cero si así lo
        deseas, diseñando procesos personalizados y utilizando metodologías
        ágiles para lograr resultados eficaces y a la medida de tus necesidades
        en un tiempo récord.
        <br />
        <br />
        Además, si lo prefieres, estamos preparados para ayudarte a definir las
        habilidades y experiencia necesarias para tu proyecto. También ofrecemos
        la opción de formar un equipo de alto rendimiento, cuidadosamente
        seleccionado para satisfacer tus requisitos específicos.
        <br />
        <br />
        En lo que respecta a la arquitectura tecnológica, te proporcionamos un
        plan detallado que describe cómo se implementarán las características de
        tu proyecto, qué tecnologías y Frameworks se utilizarán, junto con
        cualquier algoritmo y configuración en la nube necesarios para dar vida
        a tu visión tecnológica. Nuestra meta es ofrecerte una solución de
        desarrollo de software robusta y personalizada que garantice el éxito de
        tu proyecto desde el principio. Tu visión es nuestra inspiración, y
        estamos aquí para convertirla en realidad.
      </p>
    </div>
  );

  const text3 = (
    <div>
      <p>
        En Simétrica Dev Estudio, nos enorgullece nuestro enfoque de desarrollo
        que garantiza resultados excepcionales:
        <br />
        <br />
        <span className=" font-semibold">Equipo Especializado:</span> Reunimos a
        un equipo altamente calificado, adaptado específicamente para tu
        proyecto, con los roles ideales para asegurar un desarrollo profesional
        y eficiente de tus necesidades.
        <br />
        <br />
        <span className=" font-semibold">Planificación Eficiente:</span> Nos
        tomamos el tiempo para planificar cuidadosamente cada etapa del proceso,
        asegurándonos de que todos comprendan y estén alineados con tus
        objetivos.
        <br />
        <br />
        <span className=" font-semibold">Arquitectura Moderna</span>:
        Modernizamos la arquitectura tecnológica, convirtiendo aplicaciones
        monolíticas en microservicios para lograr agilidad y eficiencia.
        <br />
        <br />
        <span className=" font-semibold">Iteraciones Controladas:</span>{" "}
        Dividimos el desarrollo en iteraciones con puntos de control para
        asegurarnos de que lo que planificamos sea lo que entregamos. Utilizamos
        metodologías ágiles para garantizar tu satisfacción.
        <br />
        <br />
        <span className=" font-semibold">Pruebas Exhaustivas:</span> Realizamos
        pruebas exhaustivas, tanto funcionales como no funcionales, en
        diferentes entornos antes de la entrega. Trabajamos en conjunto con tu
        equipo para garantizar la funcionalidad del producto.
        <br />
        <br />
        <span className=" font-semibold">Transparencia y Alineación:</span>{" "}
        Mantenemos una comunicación continua, brindando demostraciones y
        revisiones semanales para asegurarnos de que nuestro equipo esté
        alineado con tus objetivos y las soluciones que esperas.
        <br />
        <br />
        Nuestro proceso está diseñado para proporcionar un desarrollo de
        software de alta calidad que cumple con tus necesidades y objetivos,
        respaldado por un equipo especializado y tecnología de vanguardia. Tu
        satisfacción es nuestra prioridad, y trabajamos incansablemente para
        superar tus expectativas en cada proyecto.
      </p>
    </div>
  );

  const text4 = (
    <div>
      <p>
        En Simétrica Dev Estudio, entendemos que los proyectos de branding a
        menudo comienzan con ideas y conceptos en lugar de especificaciones
        detalladas. No te preocupes, estamos aquí para ayudarte en cada paso del
        camino.
        <br />
        <br />
        Ya sea que tu proyecto esté en la etapa inicial de ideación o que tengas
        algunas características en mente, nuestro equipo trabajará estrechamente
        contigo para elaborar una solución tecnológica detallada y una ruta de
        implementación precisa.
        <br />
        <br />
        Con nuestra experiencia en branding y desarrollo, te guiaremos a través
        de todo el proceso, desde la definición funcional hasta el desarrollo de
        tu proyecto. Nos enfocamos en obtener resultados en tiempos cortos para
        que puedas ver tu visión cobrar vida rápidamente.
        <br />
        <br />
        Nuestra colaboración y enfoque personalizado te permitirán convertir tus
        ideas en una sólida identidad de marca. En Simétrica Dev Estudio,
        estamos listos para ser tu socio de confianza en la creación de una
        presencia de marca excepcional. ¡Nos emociona ser parte de tu viaje de
        branding!
      </p>
    </div>
  );
  const text5 = (
    <div>
      <p>
        En Simétrica Dev Estudio, valoramos la flexibilidad y la adaptabilidad
        en cada proyecto. Nuestros expertos te brindarán orientación sobre la
        tecnología más adecuada para tu proyecto, considerando tus objetivos y
        necesidades específicas. No te preocupes si ya tienes plataformas o
        soluciones existentes; nos adaptaremos a ellas sin que tengas que
        acceder a otras si no es tu intención.
        <br />
        <br />
        Trabajamos con una amplia gama de tecnologías, frameworks y lenguajes de
        programación, tanto para el front-end como para el back-end. Somos
        especialistas en JavaScript, lo que nos permite ofrecer soluciones
        sólidas tanto en el desarrollo de la interfaz de usuario como en la
        lógica del servidor. Además, utilizamos una amplia variedad de
        frameworks de JavaScript para aprovechar al máximo las capacidades de
        esta tecnología.
        <br />
        <br />
        Nuestra prioridad es satisfacer tus necesidades tecnológicas de manera
        integral. Si tienes preferencias o requisitos específicos en cuanto al
        lenguaje o la tecnología, estaremos encantados de adaptarnos a tus
        preferencias. En Simétrica Dev Estudio, estamos aquí para hacer que tu
        visión tecnológica cobre vida, sin importar la tecnología que elijas. Tu
        satisfacción es nuestra principal meta.
      </p>
    </div>
  );
  const text6 = (
    <div>
      <p>
        El costo del desarrollo de software es un aspecto que puede variar según
        las necesidades específicas de cada proyecto. En Simétrica Dev Estudio,
        comprendemos que cada proyecto es único, y por lo tanto, el precio se
        calcula en función de varios factores clave. Algunos de los factores más
        importantes que influyen en el costo incluyen:
        <br />
        <br />
        <span className=" font-semibold">Tamaño del Proyecto</span> y Número de
        Características: Cuantas más características y funcionalidades requiera
        tu software, mayor será el costo asociado.
        <br />
        <br />
        <span className=" font-semibold">Complejidad:</span> La complejidad del
        proyecto, tanto en términos de diseño como de funcionalidad, puede
        afectar el costo.
        <br />
        <br />
        <span className=" font-semibold">Integraciones de Terceros:</span> Si tu
        software necesita integrarse con sistemas de terceros, esto puede
        agregar costos adicionales.
        <br />
        <br />
        <span className=" font-semibold">Habilidades y Tecnologías:</span> La
        experiencia de los desarrolladores y las tecnologías utilizadas también
        pueden influir en el costo.
        <br />
        <br />
        <span className=" font-semibold">Velocidad del Proyecto:</span> El
        tiempo en el que se debe completar el proyecto puede afectar el costo.
        <br />
        <br />
        <span className=" font-semibold">Proceso de Desarrollo:</span> El
        enfoque y la metodología de desarrollo elegidos pueden influir en los
        costos.
        <br />
        <br />
        Nuestro enfoque es proporcionar soluciones personalizadas que se adapten
        a tus necesidades y presupuesto específicos. Trabajamos estrechamente
        contigo para comprender tus requisitos y objetivos, y en base a esta
        colaboración, generamos un presupuesto transparente y detallado. En
        Simétrica Dev Estudio, nuestra prioridad es brindarte un software de
        alta calidad que cumpla con tus expectativas y requisitos,
        independientemente de la complejidad o el alcance del proyecto.
      </p>
    </div>
  );
  const text7 = (
    <div>
      <p>
        La elección de la arquitectura adecuada para un proyecto no es una tarea
        sencilla, ya que depende de una serie de factores específicos. En
        Simétrica Dev Estudio, adoptamos el concepto de arquitecturas
        evolutivas, ya que las soluciones clásicas a menudo son rígidas y no se
        adaptan a los cambios en los objetivos.
        <br />
        <br />
        Creemos que un proyecto puede constar de varios módulos con diferentes
        grados de complejidad y requisitos. Cada uno de estos módulos puede
        requerir una arquitectura única que se adapte a sus necesidades
        específicas. Vemos la arquitectura como un ser vivo que evoluciona y se
        adapta durante el desarrollo del proyecto.
        <br />
        <br />
        Es fundamental realizar un análisis previo antes de tomar decisiones en
        cuanto a la arquitectura. Te recomendamos que visualices tu sistema como
        un conjunto de módulos diseñados para satisfacer necesidades
        específicas. En Simétrica Dev Estudio, estamos aquí para brindarte
        orientación y apoyo en cada paso de tu proyecto, incluida la elección de
        la arquitectura más adecuada. Nuestra prioridad es garantizar que la
        arquitectura se alinee perfectamente con tus objetivos y requisitos
        específicos.
      </p>
    </div>
  );

  return (
    <div className=" flex flex-col justify-center   -mt-1  m-10 ">
      <div className="flex  justify-start items-start mt-5 lg:mt-0 lg:m-5">
        <Divider orientation="left">
          <h3 className=" text-primary-blue font-poppins font-bold text-md lg:text-3xl mb-4">
            ¿Quieres saber mas?
            <br />
            <span className=" font-poppins font-bold text-md lg:text-3xl mb-4 text-black">
              Lee algunas preguntas frecuentes
            </span>
          </h3>
        </Divider>
      </div>

      <div className=" flex gap-20 items-center justify-center ">
        <div className=" w-full lg:w-2/4  ">
          <Collapse
            items={[
              {
                key: "1",
                label:
                  "¿Cómo se garantiza el diseño y desarrollo del proyecto?. ",
                children: (
                  <p className=" text-xs font-normal font-poppins">{text1}</p>
                ),
              },
            ]}
            className="  font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3  "
          />

          <br />
          <Collapse
            items={[
              {
                key: "2",
                label: "¿Qué incluye la solución de desarrollo de software? ",
                children: (
                  <p className="text-xs font-normal font-poppins">{text2}</p>
                ),
              },
            ]}
            className="  font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3 "
          />
          <br />
          <Collapse
            items={[
              {
                key: "3",
                label: "¿Cómo es nuestro proceso de desarrollo? ",
                children: (
                  <p className="text-xs font-normal font-poppins">{text3}</p>
                ),
              },
            ]}
            className="  font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3 "
          />
          <br />
          <Collapse
            items={[
              {
                key: "4",
                label:
                  "¿Qué susede si no tengo una espcificación del proyecto? ",
                children: (
                  <p className="text-xs font-normal font-poppins">{text4}</p>
                ),
              },
            ]}
            className="  font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3 "
          />
          <br />
          <Collapse
            items={[
              {
                key: "5",
                label:
                  "¿Qué tecnologías usaremos para el desarrollo de software? ",
                children: (
                  <p className="text-xs font-normal font-poppins">{text5}</p>
                ),
              },
            ]}
            className=" font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3"
          />
          <br />
          <Collapse
            items={[
              {
                key: "6",
                label: "¿Cuanto cuesta el desarrollo de software?",
                children: (
                  <p className="text-xs font-normal font-poppins">{text6}</p>
                ),
              },
            ]}
            className="  font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3"
          />
          <br />
          <Collapse
            items={[
              {
                key: "7",
                label: "¿Cómo elegir la arquitectura adecuada?",
                children: (
                  <p className="text-xs font-normal font-poppins">{text7}</p>
                ),
              },
            ]}
            className="  font-bold border-4 text-md font-poppins hover:bg-primary-blue -mb-3 "
          />
        </div>
        <div className=" w-96 ml-10 h-96 hidden lg:flex flex-col gap-4 justify-center items-center">
          <img className="w-32" src={phone} alt="" />
          <h1 className=" font-poppins font-bold text-3xl text-primary-blue">
            ¿Tienes dudas?
          </h1>
          <span className=" text-center text-border-color font-bold text-lg">
            {" "}
            Déjanos saber y nuestros expertos se contactarán lo más rápido
            posible contigo.
          </span>
          <button
              onClick={goContacto}
              className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm"
            >
              Contacto
            </button>
        </div>
      </div>
    </div>
  );
};

export default Section3HomeV2;
