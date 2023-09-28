import { Collapse, Divider } from "antd";

return (
  <div className=" flex flex-col m-10 ">
    <Divider orientation="left">
      <h3 className=" text-primary-blue font-poppins font-bold text-md lg:text-3xl mb-4">
        ¿Quieres saber mas?
        <br />
        <span className=" font-poppins font-bold text-md lg:text-3xl mb-4 text-black">
          Lee algunas preguntas frecuentes
        </span>
      </h3>
    </Divider>
    <div className=" w-full lg:w-2/4">
      <Collapse
        items={[
          {
            key: "1",
            label: "¿Cómo se garantiza el diseño y desarrollo del proyecto?. ",
            children: (
              <p className=" text-xs font-normal font-poppins">{text1}</p>
            ),
          },
        ]}
        className="  font-bold border-4 text-md font-poppins  "
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
        className="  font-bold border-4 text-md font-poppins "
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
        className="  font-bold border-4 text-md font-poppins "
      />
      <br />
      <Collapse
        items={[
          {
            key: "4",
            label: "¿Qué susede si no tengo una espcificación del proyecto? ",
            children: (
              <p className="text-xs font-normal font-poppins">{text4}</p>
            ),
          },
        ]}
        className="  font-bold border-4 text-md font-poppins "
      />
      <br />
      <Collapse
        items={[
          {
            key: "5",
            label: "¿Qué tecnologías usaremos para el desarrollo de software? ",
            children: (
              <p className="text-xs font-normal font-poppins">{text5}</p>
            ),
          },
        ]}
        className=" font-bold border-4 text-md font-poppins"
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
        className="  font-bold border-4 text-md font-poppins"
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
        className="  font-bold border-4 text-md font-poppins "
      />
    </div>
  </div>
);
