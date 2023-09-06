import imgBanner from "../assets/imgbannerprincipal.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import iconBrandig from "../assets/icobranding1.png";
import iconCodingicon from "../assets/coding1.png";
import iconwebsiteicon from "../assets/website1.png";
import { useNavigate } from "react-router-dom";


const Section1Home = () => {
  const navigate = useNavigate();

  
  const goContacto = () => {
    navigate("/contacto");
  };

  return (
    <div className="border-b border-border-color mb-6 font-poppins  ">
      <div className=" flex-col lg:flex-row  xl:flex  p-10   lg:p-24 xl:p-24 justify-center mt-36 font-roboto items-center ">
        <div className=" flex-col  ">
          <div className=" w-full   ">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              Experiencia en el desarrollo de{" "}
              <span className=" text-btm-color">sitios web</span> y{" "}
              <span className=" text-btm-color">aplicaciones móviles</span> de
              alta calidad, así como en la creación de{" "}
              <span className=" text-btm-color">branding impactante.</span>
            </h3>
            <br />
            <p className=" font-poppins font-light text-sm">
              SIMETRICA DEV STUDIO es un equipo de experimentados creadores de
              aplicaciones móviles y web, así como de constructores de sitios
              web, con decenas de proyectos completados. Construimos y
              desarrollamos aplicaciones móviles para varias de las principales
              plataformas, incluyendo Android y iOS.
            </p>
          </div>

          <div className=" hidden lg:flex  xl:flex   gap-2 mt-4">
            <button
              onClick={goContacto}
              className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm"
            >
              Contacto
            </button>
            <button className=" border-2 border-btm-color flex content-center items-center justify-center p-2 w-32 text-btm-color rounded-md  font-poppins text-sm">
              Ver mas
            </button>
          </div>
        </div>
        <div className=" -mt-28 lg:-mt-60 xl:-mt-60">
          <img className=" lg:max-w-sm  xl:max-w-sm " src={imgBanner} alt="" />
        </div>
        <div className=" flex lg:hidden  xl:hidden   gap-2 mt-4">
          <button
            onClick={goContacto}
            className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm"
          >
            Contacto
          </button>
          <button className=" border-2 border-btm-color flex content-center items-center justify-center p-2 w-32 text-btm-color rounded-md  font-poppins text-sm">
            Ver mas
          </button>
        </div>

        <img
          className=" w-6 absolute right-0 bottom-20  lg:right-0 lg:top-48 xl:right-0 xl:top-48 md:w-10 lg:w-10 xl:w-10"
          src={Vector1}
          alt=""
        />
        <img
          className=" w-6 absolute left-0 bottom-0  lg:left-0 lg:top-80 xl:left-0 xl:top-80 md:w-10 lg:w-10 xl:w-10"
          src={Vector2}
          alt=""
        />
      </div>

      <div className=" flex    flex-col   justify-center items-start ml-10  mb-6 lg:flex-row sm:gap-3 md:gap-3 lg:gap-32 xl:gap-32 font-poppins text-xs ">
        <div className=" flex items-center justify-center gap-3 mb-3">
          <button className=" flex justify-center items-center rounded-md bg-color-icon-web w-10 h-10">
            <img className=" w-5 " src={iconwebsiteicon} alt="" />
          </button>
          <div>
            <h1 className=" text-md text-black font-bold">Desarrollo web</h1>
            <span className=" text-xs text-border-color">
              Tecnologias agiles y faciles de mantener
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-3 mb-3">
          <button className=" flex justify-center items-center rounded-md bg-color-icon-web w-10 h-10">
            <img className=" w-5 " src={iconBrandig} alt="" />
          </button>
          <div>
            <h1 className=" text-md text-black font-bold">Branding</h1>
            <span className=" text-xs text-border-color">
              Adaptado al cliente
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-3 mb-3">
          <button className=" flex justify-center items-center rounded-md bg-color-icon-web w-10 h-10">
            <img className=" w-5 " src={iconCodingicon} alt="" />
          </button>
          <div>
            <h1 className=" text-md text-black font-bold">Movil</h1>
            <span className=" text-xs text-border-color">Android & IOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1Home;
