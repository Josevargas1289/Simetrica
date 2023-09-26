import { Button, Modal } from "antd";
import { useState } from "react";
import icondesarrolomovil from "../../assets/coding1.png";
import { useNavigate } from "react-router-dom";

const ModalDesarrollomovil = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const navigate = useNavigate();

  const gomovil = () => {
    navigate("/desarrolloMovil");
  };

  return (
    <>
      <Button
        className=" flex justify-center items-center rounded-md bg-color-icon-branding w-10 p-2 h-10 hover:scale-125"
        type="secundary"
        onClick={() => setModal2Open(true)}
      >
        <img src={icondesarrolomovil} alt="" />
      </Button>
      <Modal
        title="¿Que es desarrollo movil?"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <p>
          {" "}
          En Simétrica Dev Studio, nuestro servicio de desarrollo móvil es una
          puerta a la innovación digital. Transformamos tus ideas en
          aplicaciones móviles de vanguardia, aprovechando la tecnología más
          avanzada para llevar tu negocio al siguiente nivel. Estamos
          comprometidos en brindarte soluciones móviles a medida que no solo
          impresionarán a tus usuarios, sino que también impulsarán el
          crecimiento de tu empresa en el mundo móvil. Confía en nosotros para
          dar vida a tu visión móvil y alcanzar nuevas alturas en el mercado
          digital.
        </p>
        <div className=" mt-2 flex justify-end">
          <button
            onClick={gomovil}
            className="  bg-btm-color flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-sm "
          >
            Ver mas
          </button>
        </div>
      </Modal>
    </>
  );
};
export default ModalDesarrollomovil;
