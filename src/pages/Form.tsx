import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = 'https://ffqkqygvvbtotxnrlxkk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcWtxeWd2dmJ0b3R4bnJseGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MzY4MTMsImV4cCI6MjA0MjExMjgxM30.XAB7tIbKQeamZkP0wr5ocK1aFgl2yUxDi3_PoEo6wSQ';
const supabase = createClient(supabaseUrl, supabaseKey);

// Definição do tipo para os dados do formulário
interface FormData {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  segmento: string;
}

const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    segmento: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('syrion')
        .insert([formData])
        .select();

      if (error) throw error;

      console.log('Lead capturado com sucesso:', data);
      alert('Solicitação enviada com sucesso!');
      setFormData({ nome: '', email: '', empresa: '', telefone: '', segmento: '' });
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      alert('Erro ao enviar a solicitação. Por favor, tente novamente.');
    }
  };

  return (
    <div id='form' className="mx-auto border border-white rounded-xl text-[19px] ">
      <form
        className="lg:w-[65vh] w-[45vh] lg:h-[80vh] h-[70vh] rounded-lg flex flex-col mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Digite seu nome:"
          className="bg-white text-[18px] text-black w-[37vh] lg:w-[55vh] p-2 h-[46px] mx-auto rounded-xl mt-[5vh] mb-[2vh]"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Digite seu e-mail:"
          className="bg-white text-[18px] text-black w-[37vh] lg:w-[55vh] p-2 h-[46px] mx-auto rounded-xl my-[2vh]"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Digite o nome da sua empresa:"
          className="bg-white text-[18px] text-black w-[37vh] lg:w-[55vh] p-2 h-[46px] mx-auto rounded-xl my-[2vh]"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Digite seu telefone:"
          className="bg-white text-[18px] text-black w-[37vh] lg:w-[55vh] p-2 h-[46px] mx-auto rounded-xl my-[2vh]"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <select
          className="bg-white text-[18px] text-black w-[37vh] lg:w-[55vh] p-2 h-[46px] mx-auto rounded-xl my-[2vh]"
          name="segmento"
          value={formData.segmento}
          onChange={handleChange}
          required
        >
          <option value="" className="">Qual é o seu segmento</option>
          <option value="Startups e Empresas de Tecnologia" className="">Startups e Empresas de Tecnologia</option>
          <option value="Saúde e Bem-estar" className="">Saúde e Bem-estar</option>
          <option value="Educação e Cursos Online" className="">Educação e Cursos Online</option>
          <option value="Food Service" className="">Food Service</option>
          <option value="E-commerce" className="">E-commerce</option>
          <option value="Indústria" className="">Indústria</option>
          <option value="Varejo" className="">Varejo</option>
          <option value="Serviços" className="">Serviços</option>
          <option value="Imobiliária" className="">Imobiliária</option>
          <option value="SAAS" className="">SAAS</option>
          <option value="Finanças" className="">Finanças</option>
          <option value="Energia Solar" className="">Energia Solar</option>
          <option value="Outro" className="">Outro</option>
        </select>
        <button
          type="submit"
          className="font-semibold mx-10 mt-10 py-3 border border-white rounded-2xl text-center text-[18px] lg:text-[20px] hover:bg-white hover:text-orange-500 duration-500"
        >
          Aumentar minhas vendas
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
