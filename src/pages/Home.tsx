import LeadCaptureForm from "./Form";



export default function Home() {
  return (
    <div className="">
      
      <section className='bg-[url("https://i.ibb.co/6W0NKP4/se-o-1.png")] bg-no-repeat bg-cover flex h-[97vh]'>
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex justify-between">
          <div className="flex flex-col justify-center text-white w-[36em] text-center lg:text-left items-center lg:items-start">
            <img className="mb-4 lg:mb-16 h-24 lg:h-14" src="https://i.ibb.co/5Gb3TKr/Logo.png"  alt="Logo da syrion" />
            <h1 className="font-bold mb-4 lg:leading-[60px] text-[34px] lg:text-[47px] 2xl:text-[50px] text-laranja">
            Aumente Suas Vendas com Estratégias de Marketing Personalizadas
            </h1>
            <p className="mb-4 text-[20px] lg:text-[25px] 2xl:text-[25px]">
            Transformamos Suas Ideias em Resultados com Estratégias de Conversão.
            </p>
            <a
              className="w-[13em] lg:w-[9em] text-center text-white p-2 lg:p-1 px-8 text-[25px] 2xl:text-[33px] lg:text-[18px] rounded-3xl hover:text-laranja duration-500 border border-branco"
              href="#pare"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </section>
      <section className='bg-black flex min-h-[70vh]' id="pare">
        <div className="flex-row text-left mx-auto my-auto w-[350px] lg:w-[864px] 2xl:w-[1600px] ">
            <div className="flex my-10">
                <div className="bg-laranja w-2.5 h-[180px] lg:h-[75px] my-0 lg:my-3 mr-2"></div>
                <p className="text-branco text-[20px] lg:text-[26px] leading-[30px]"><strong>Pare de desperdiçar dinheiro com campanhas que não geram retorno.</strong> Alavanque suas vendas com nosso time de especialistas, maximizando sua presença online e atraindo clientes qualificados.</p>
                
            </div>
            <div className="my-10 text-center">
            <a
              className="w-[13em] lg:w-[9em] text-center text-white p-2 lg:p-2 px-10 lg:px-12 text-[25px] 2xl:text-[33px] lg:text-[18px] rounded-3xl hover:text-laranja lg:hover:py-3 lg:hover:px-14 duration-500 border border-branco"
              href="#porque"
            >
              SAIBA COMO
            </a>
            </div>
        </div>
      </section>

      <section className='bg-cinza bg-no-repeat bg-cover flex min-h-screen pb-3 lg:pb-0' id="porque">
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex flex-col lg:flex-row justify-between mb-5">

          <div className=" flex flex-col justify-center font-medium">
            <p className="text-[25px] lg:text-[40px] text-center lg:text-left w-[330px] lg:w-[600px] 2xl:text-[30px] text-laranja leading-[50px]" >Por que escolher a agência Syrion?</p>
            <p className="text-[16px] lg:text-[18px] font-normal text-center lg:text-left w-[330px] lg:w-[600px] 2xl:text-[36px] text-branco opacity-50 mb-10 lg:mb-0">(Exclusivo para empreendedores que desejam crescer rápido)</p>
          </div>

          <div className="lg:w-[590px] flex flex-col items-center 3xl:w-[570px] text-white my-auto">
            <div className="border rounded-3xl border-laranja flex px-4 py-3 ">
              <img className="h-[50px] my-auto mr-7" src="https://i.ibb.co/GcKK9Yq/Group-2.png" alt="Foguete" />
              <p className="text-[20px]  leading-[22px]"><span className="text-laranja">Mais vendas em menos tempo:</span> Acelere o ciclo de vendas com estratégias que convertem.</p>
            </div>
            <div className="border rounded-3xl  border-laranja flex px-4 my-7 py-3 ">
              <img className="h-[45px] my-auto mr-6" src="https://i.ibb.co/2cSW5hR/Star-1.png" alt="Estrela" />
              <p className="text-[20px] leading-[22px]"><span className="text-laranja">Gestão completa de tráfego pago:</span> Atraia visitantes qualificados e prontos para comprar.</p>
            </div>
            <div className="border rounded-3xl border-laranja flex px-4 ">
              <img className="h-[60px] my-auto mr-5" src="https://i.ibb.co/nw6qt7X/Group-12.png" alt="Medalha" />
              <p className="text-[20px] py-3.5 leading-[22px]"><span className="text-laranja">Social Media que gera engajamento real:</span> Impulsione seu público com estratégias focadas.</p>
            </div>
            <div className="border rounded-3xl border-laranja flex px-4 my-7 py-2">
              <img className="h-[50px] my-auto mr-6" src="https://i.ibb.co/3v7Z55P/Group-5.png" alt="Gráfico" />
              <p className="text-[20px] leading-[22px]"><span className="text-laranja">Landing Pages que convertem:</span> Designs atraentes e foco no CTA certo.</p>
            </div>
            <div className="border rounded-3xl  border-laranja flex px-4 py-3">
              <img className="h-[50px] my-auto mr-6" src="https://i.ibb.co/PNYLDBN/Group-11.png" alt="Engrenagem" />
              <p className="text-[20px] leading-[22px]"><span className="text-laranja">Análises e relatórios claros:</span> Acompanhe o crescimento com dados reais e estratégicos.</p>
            </div>
            
          </div>
        </div>
      </section>
      <section className='bg-[url("https://i.ibb.co/xg7FYQw/image.png")] bg-cover flex min-h-[70vh] '>
        <div className=" flex-row text-left mx-auto my-auto w-[350px] lg:w-[1200px] 2xl:w-[1600px]">
            <div className="flex flex-col my-10 items-center">
              <div className="flex">
                <div className="bg-laranja w-1 h-16 lg:h-10 my-3 mr-2"></div>
                <h2 className="mb-4 text-branco text-[30px] lg:text-[40px]">Construa um Plano de Sucesso Sob Medida</h2>
              </div>
                <p className="text-branco text-[20px] lg:text-center w-[350px] lg:w-[840px] 2xl:w-[1600px] leading-[23px] ">Na Syrion, sabemos que cada negócio é único, e suas necessidades de marketing também são. Por isso, oferecemos planos ajustáveis, adaptados ao seu momento e ao seu orçamento, garantindo que você tenha o apoio necessário para alcançar seus objetivos.
                <br /></p>
            </div>
            <div className="my-10 text-center">
                
                     
            </div>
        </div>
      </section>

      <section className='bg-cinza bg-no-repeat bg-cover flex min-h-screen '>
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex flex-col lg:flex-row justify-between mb-5">

          <div className=" flex flex-col justify-center font-medium">
            <p className="text-[25px] lg:text-[25px] my-3 text-center lg:text-left w-[330px] lg:w-[600px] 2xl:text-[30px] font-normal text-laranja">Você esta pronto para transformar sua presença online e <span className="underline">aumentar suas vendas?</span> </p>
            <p className="text-[20px] lg:text-[23px] my-3 text-center lg:text-left w-[330px] lg:w-[600px] 2xl:text-[30px] font-normal text-branco mb-10 lg:mb-0 ">Preencha o formulário e um de nossos especialistas entrará em contato com você dentro de 8 horas.</p>
          </div>

          <div className="lg:w-[400px] flex items-center 3xl:w-[570px] text-white">
            <LeadCaptureForm/>
            
          </div>
          
        </div>
      </section>
      <footer className="bg-black h-[160px] lg:h-[120px]">
        <img
          className="flex justify-center p-4 lg:p-2 mx-auto w-[220px] lg:w-[140px]"
          src="https://i.ibb.co/5Gb3TKr/Logo.png" alt="Logo da syrion"
        />
        <p className="text-branco text-center text-[15px]">2024 © Agencia Syrion. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
