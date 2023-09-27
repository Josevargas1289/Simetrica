import happy from "../../assets/happy.png";
import imgMovil from "../../assets/imgmovil.png";
import imgbrandig from "../../assets/brandig.png";
import imgweb from "../../assets/web.png";

const Section2Home = () => {
  return (
    <section className=" flex flex-col m-10   justify-center">
      <div className=" mb-10  mt-5 text-center">
        <h3 className=" font-poppins font-bold text-md lg:text-3xl mb-4">
          Soluciones Digitales Integrales{" "}
        </h3>
        <span className=" font-poppins font-light text-sm  ">
          Desarrollo digital de alto nivel con enfoque en web, móvil y branding
          para impulsar tu éxito en línea.
        </span>
      </div>
      {/* desarrollo de aplicaciones moviles */}
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:m-10 gap-20">
        <div className=" w-full m-10  ">
          <div className=" flex justify-start items-center gap-2 mb-4   ">
            <span className=" w-16 h-16 bg-happy-bg rounded-full flex items-center justify-center ">
              <img className=" w-5" src={happy} alt="" />
            </span>

            <div className=" flex flex-col gap-2">
              <h3 className=" text-md text-black font-bold">
                Desarrollo de aplicaciones moviles
              </h3>
              <span className=" text-md text-border-color">
                Profesionales dedicados exclusivamente <br /> al desarrollo
                movil.
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Tecnologías escalables</span>
              {""} y buenas prácticas de programación.
            </h3>
            <p className=" text-justify mt-3 text-md text-border-color ">
              Garantizamos flujos de usuario intuitivos para una experiencia
              excepcional, logrando a través de definición funcional,
              arquitectura, desarrollo y mejora continua. Trabajamos en 4
              entornos clave: Desarrollo, Pruebas Q&A, Pre-Producción y
              Producción.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" w-full lg:w-screen" src={imgMovil} alt="" />
        </div>
      </div>
      {/* desarrollo web */}
      <div className=" flex flex-col lg:flex-row justify-center items-center  lg:m-10 gap-20">
        <div className=" w-full m-10  lg:order-1  ">
          <div className=" flex justify-start items-center gap-2 mb-4   ">
            <span className=" w-16 h-16 bg-happy-bg1 rounded-full flex items-center justify-center ">
              <img className=" w-5" src={happy} alt="" />
            </span>

            <div className=" flex flex-col gap-2">
              <h3 className=" text-md text-black font-bold">
                Desarrollo de aplicaciones web
              </h3>
              <span className=" text-md text-border-color">
                Profesionales pensando en soluciones web <br /> intuitivas y a
                la medida.
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Diseño Responsivo</span>
              {""} adaptado a tus necesidades.
            </h3>
            <p className=" text-justify mt-3 text-md text-border-color ">
              Descubre un diseño web responsivo, intuitivo y SEO-optimizado. Nos
              comprometemos a brindarte flujos de usuario excepcionales, gracias
              a nuestra enfoque en definición funcional, arquitectura sólida,
              desarrollo de calidad y código reutilizable. Nuestro trabajo
              abarca 4 fases cruciales: Desarrollo, Pruebas Q&A, Pre-Producción
              y Producción, para garantizar una presencia en línea de alto
              rendimiento y escalabilidad.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" w-full lg:w-screen" src={imgweb} alt="" />
        </div>
      </div>

      {/* brandig */}
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:m-10 gap-20">
        <div className=" w-full m-10  ">
          <div className=" flex justify-start items-center gap-2 mb-4   ">
            <span className=" w-16 h-16 bg-happy-bg2 rounded-full flex items-center justify-center ">
              <img className=" w-5" src={happy} alt="" />
            </span>

            <div className=" flex flex-col gap-2">
              <h3 className=" text-md text-black font-bold">
                Branding y Rebranding
              </h3>
              <span className=" text-md text-border-color">
                Branding que Inspira, Rebranding que <br /> transforma.
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Marcas Digitales</span>
              {""} que brillan en una era moderna.
            </h3>
            <p className=" text-justify mt-3 text-md text-border-color ">
              Explora el mundo del branding y rebranding digital con nosotros.
              Prometemos ofrecerte estrategias de marca excepcionales,
              potenciadas por un diseño web receptivo, intuitivo y optimizado
              para SEO
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" w-full lg:w-screen" src={imgbrandig} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section2Home;
