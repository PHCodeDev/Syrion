import LeadCaptureForm from "./Form";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section className='bg-[url("https://i.ibb.co/hBPBXRC/Rectangle-192.png")] bg-no-repeat bg-cover flex h-[90vh] lg:h-[97vh]'>
        <div className="w-[350px] lg:w-[1000px] 2xl:w-[1600px] mx-auto flex ">
          <div className="flex flex-col justify-center text-white mx-auto text-center items-center">
            <a
              href="https://syrion.com.br/"
            >
              <img
                className="mx-auto mb-5 lg:mb-4 h-16 lg:h-14 transition-transform duration-300 ease-in-out transform hover:scale-105"
                src="https://i.ibb.co/5Gb3TKr/Logo.png"
                alt="Logo da syrion"
              />
            </a>

            <h1
              className="font-medium mb-4 lg:leading-[75px] text-[35px] lg:text-[70px] 2xl:text-[50px] text-laranja lg:w-[700px]"
              style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.8)" }}
            >
              Pronto Para Ver Suas Vendas{" "}
              <span className="text-branco">Dispararem?</span>
            </h1>
            <div className="bg-laranja w-24 h-1 lg:h-1 mb-4 lg:mt-2 mr-2"></div>
            <p className="lg:mb-4 mb-6 text-[16px] lg:text-[20px] 2xl:text-[25px] w-[320px] lg:w-[600px]">
              Em 20 minutos vamos te mostrar tudo que está impedindo sua empresa
              de aumentar o faturamento e montar um plano de ação prático para
              você vender muito mais
            </p>
            <a
              className="w-[17em] lg:w-[20em] text-center text-branco p-2 lg:p-3 text-[18px] 2xl:text-[33px] font-semibold lg:text-[18px] rounded-xl hover:text-black duration-500 hover:bg-branco border"
              href="#pare"
              onClick={(e) => {
                e.preventDefault(); // Impede o comportamento padrão de adicionar o hash na URL
                const target = document.getElementById("form");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" }); // Rolagem suave para o elemento
                }
              }}
            >
              Quero Aumentar Minhas Vendas
            </a>
          </div>
        </div>
      </section>
      <section className="bg-laranja h-[10px]"></section>
      <section
        className="bg-cinza bg-no-repeat bg-cover flex min-h-screen pt-10 lg:pt-0"
        id="form"
      >
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex flex-col lg:flex-row justify-between mb-5">
          <div className="flex flex-col justify-center font-medium">
            <p
              className="text-[27px] lg:text-[35px] my-3 text-center lg:text-left w-[330px] lg:w-[520px] 2xl:text-[30px] font-normal text-laranja"
              data-aos="fade-up"
            >
              Siga os seguintes passos para aumentar suas vendas:
            </p>

            <div
              className="my-10 border border-lg border-neutral-500 rounded-2xl p-4 bg-neutral-800 text-branco text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="200" // Atraso na animação (opcional)
            >
              <p className="font-normal text-[23px] 2xl:text-[26px] mb-3">
                1 Preencha o formulário
              </p>
              <p className="text-[20px] lg:text-[18px] w-[320px] lg:w-[450px] 2xl:text-[24px] font-light lg:font-normal mb-10 lg:mb-0">
                Envie suas informações de contato. Todos os seus dados estarão
                seguros
              </p>
            </div>

            <div
              className="mb-10 border border-lg border-neutral-500 rounded-2xl p-4 bg-neutral-800 text-branco text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="400" // Atraso na animação (opcional)
            >
              <p className="font-normal text-[23px] 2xl:text-[26px] mb-3">
                2 Receba uma mensagem
              </p>
              <p className="text-[20px] lg:text-[18px] w-[320px] lg:w-[450px] 2xl:text-[24px] font-light lg:font-normal mb-10 lg:mb-0">
                Um de nossos especialistas entrará em contato com você dentro de
                12 horas, agendando uma reunião mais importante.
              </p>
            </div>
          </div>

          <div className="lg:w-[400px] flex items-center 3xl:w-[570px] text-white">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
      <section className='bg-[url("https://i.ibb.co/xg7FYQw/image.png")] bg-cover flex min-h-[70vh] '>
        <div className=" flex-row text-left mx-auto my-auto w-[350px] lg:w-[1200px] 2xl:w-[1600px]">
          <div className="flex flex-col my-10 items-center">
            <div className="flex">
              <div className="bg-laranja w-1 h-16 lg:h-10 my-3 mr-2"></div>
              <h2 className="mb-4 text-branco text-[30px] lg:text-[40px]">
                Construa um Plano de Sucesso Sob Medida
              </h2>
            </div>
            <p className="text-branco text-[20px] lg:text-center w-[350px] lg:w-[840px] 2xl:w-[1600px] leading-[23px] font-light lg:font-normal">
              Na Syrion, sabemos que cada negócio é único, e suas necessidades
              de marketing também são. Por isso, oferecemos planos ajustáveis,
              adaptados ao seu momento e ao seu orçamento, garantindo que você
              tenha o apoio necessário para alcançar seus objetivos.
              <br />
            </p>
          </div>
          <div className="my-10 text-center"></div>
        </div>
      </section>

      <section className="bg-cinza bg-no-repeat bg-cover flex min-h-screen pb-3 lg:pb-0">
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex flex-col lg:flex-row justify-between mb-5">
          <div className=" flex flex-col justify-center font-medium">
            <p className="text-[30px] my-4 lg:text-[40px] w-[330px] lg:w-[600px] 2xl:text-[30px] text-laranja leading-[50px]">
              Por que escolher a agência Syrion?
            </p>
            <p className="text-[15px] lg:text-[18px] font-normal w-[330px] lg:w-[600px] 2xl:text-[36px] text-branco opacity-50 mb-10 lg:mb-0">
              (Exclusivo para empreendedores que desejam crescer rápido)
            </p>
          </div>

          <div className="lg:w-[590px] flex flex-col items-center 3xl:w-[570px] text-white my-auto">
            <div className="border rounded-3xl border-laranja flex px-4 py-3 ">
              <img
                className="h-[50px] my-auto mr-7"
                src="https://i.ibb.co/fDB9P0x/Group-2.png"
                alt="Foguete"
              />
              <p className="text-[20px] leading-[22px] font-light lg:font-normal">
                <span className="text-laranja font-medium">
                  Mais vendas em menos tempo:
                </span>{" "}
                Acelere o ciclo de vendas com estratégias que convertem.
              </p>
            </div>
            <div className="border rounded-3xl  border-laranja flex px-4 my-7 py-3 ">
              <img
                className="h-[45px] my-auto mr-6"
                src="https://i.ibb.co/x6KkVpP/Star-1.png"
                alt="Estrela"
              />
              <p className="text-[20px] leading-[22px] font-light lg:font-normal">
                <span className="text-laranja font-medium">
                  Gestão completa de tráfego pago:
                </span>{" "}
                Atraia visitantes qualificados e prontos para comprar.
              </p>
            </div>
            <div className="border rounded-3xl border-laranja flex px-4 ">
              <img
                className="h-[60px] my-auto mr-5"
                src="https://i.ibb.co/7kNgQPv/Group-12.png"
                alt="Medalha"
              />
              <p className="text-[20px] py-3.5 leading-[22px] font-light lg:font-normal">
                <span className="text-laranja font-medium">
                  Social Media que gera engajamento real:
                </span>{" "}
                Impulsione seu público com estratégias focadas.
              </p>
            </div>
            <div className="border rounded-3xl border-laranja flex px-4 my-7 py-2">
              <img
                className="h-[50px] my-auto mr-6"
                src="https://i.ibb.co/9sqBGhL/Group-5.png"
                alt="Gráfico"
              />
              <p className="text-[20px] leading-[22px] font-light lg:font-normal">
                <span className="text-laranja font-medium">
                  Landing Pages que convertem:
                </span>{" "}
                Designs atraentes e foco no CTA certo.
              </p>
            </div>
            <div className="border rounded-3xl  border-laranja flex px-4 py-3">
              <img
                className="h-[50px] my-auto mr-6"
                src="https://i.ibb.co/yYyGwZk/Group-11.png"
                alt="Engrenagem"
              />
              <p className="text-[20px] leading-[22px] font-light lg:font-normal">
                <span className="text-laranja font-medium">
                  Análises e relatórios claros:
                </span>{" "}
                Acompanhe o crescimento com dados reais e estratégicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black h-[160px] lg:h-[120px]">
        <img
          className="flex justify-center p-4 lg:p-2 mx-auto w-[200px] lg:w-[140px]"
          src="https://i.ibb.co/5Gb3TKr/Logo.png"
          alt="Logo da syrion"
        />
        <p className="text-branco text-center text-[15px]">
          2024 © Agencia Syrion. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
