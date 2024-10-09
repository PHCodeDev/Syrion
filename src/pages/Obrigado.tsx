const Obrigado = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cinza">
      <div>
        <a href="https://syrion.com.br/" target="_blank" rel="noopener noreferrer">
            <img
              className="mx-auto mb-4 lg:mb-16 h-20 lg:h-14 transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://i.ibb.co/5Gb3TKr/Logo.png"
              alt="Logo da syrion"
            />
        </a>
      </div>
      <div className="text-center w-[350px] lg:w-[1000px] 2xl:w-[1600px] ">
        <h1 className="text-4xl font-bold text-laranja">Obrigado!</h1>
        <p className="mt-4 text-lg text-white">
          Seu formulário foi enviado com sucesso! Nossa equipe irá analisar suas
          informações com cuidado. Em até 8 horas, um de nossos especialistas
          entrará em contato com você para entender suas necessidades e te
          ajudar a alavancar suas vendas e atingir seus objetivos.
        </p>
      </div>
      <div className="flex mt-16">
        <a href="https://www.instagram.com/agencia_syrion/" target="_blank" rel="noopener noreferrer">
          <img
            className="mx-2 w-[30px] h-[30px] transition-transform duration-300 ease-in-out transform hover:scale-110"
            src="https://i.ibb.co/HpK928C/image-23.png"
            alt="Instagram"
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=558898215244&text=Ol%C3%A1!%20Tenho%20interesse%20e%20queria%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer">
            <img
              className="mx-2 w-[30px] h-[30px] transition-transform duration-300 ease-in-out transform hover:scale-110"
              src="https://i.ibb.co/fG64rPt/image-24.png"
              alt="Whatsapp"
            />
        </a>
      </div>
    </div>
  );
};

export default Obrigado;
