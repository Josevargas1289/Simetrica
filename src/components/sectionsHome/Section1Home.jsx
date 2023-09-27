import imgBanner from "../../assets/imgbannerprincipal.png";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";

import { useNavigate } from "react-router-dom";
import ModalBranding from "../modales/ModalBrandig";
import ModalDesarrolloWeb from "../modales/ModalDesarrolloweb";
import ModalDesarrollomovil from "../modales/ModalDesarrollomovil";

const Section1Home = () => {
  const navigate = useNavigate();

  const goContacto = () => {
    navigate("/contacto");
  };

  return (
    <div className="border-b border-border-color mb-6 font-poppins  ">
      <div className=" flex-col lg:flex-row  xl:flex  p-10   lg:p-24 xl:p-24 justify-center mt-32 font-roboto items-center ">
        <div className=" flex-col -mt-0 lg:-mt-32 xl:-mt-32  ">
          <div className=" w-full   ">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              Expertos en desarrollo{" "}
              <span className=" text-btm-color">web</span>,{" "}
              <span className=" text-btm-color">aplicaciones móviles</span> y{" "}
              <span className=" text-btm-color">branding</span> impactante
            </h3>
            <br />
            <p className=" font-poppins font-light text-sm">
              Bienvenido a Simétrica Dev Studio, Tu socio estratégico en diseño web y móvil, ofreciendo soluciones creativas y personalizadas para destacar en el mundo digital, incluyendo servicios especializados en branding y rebranding.
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
        {/* section de iconos con modales */}
        <div className=" flex justify-center items-center lg:hidden  xl:hidden   gap-2 mt-4">
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
          className=" w-6 absolute right-0 bottom-96  lg:right-0 lg:top-48 xl:right-0 xl:top-48 md:w-10 lg:w-10 xl:w-10"
          src={Vector1}
          alt=""
        />
        <img
          className=" w-6 absolute left-0 bottom-48  lg:left-0 lg:top-80 xl:left-0 xl:top-80 md:w-10 lg:w-10 xl:w-10"
          src={Vector2}
          alt=""
        />
      </div>

      <div className=" flex    flex-col   justify-center items-start ml-10  mb-6 lg:flex-row sm:gap-3 md:gap-3 lg:gap-32 xl:gap-32 font-poppins text-xs ">
        <div className=" flex items-center justify-center gap-3 mb-3">
          <ModalDesarrolloWeb />
          <div>
            <h1 className=" text-md text-black font-bold">Desarrollo web</h1>
            <span className=" text-xs text-border-color">
              Tecnologias agiles y faciles de mantener
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-3 mb-3">
          <ModalBranding />
          <div>
            <h1 className=" text-md text-black font-bold">Branding</h1>
            <span className=" text-xs text-border-color">
              Adaptado al cliente
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-3 mb-3">
          <ModalDesarrollomovil />
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
