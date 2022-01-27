import React from 'react';
import { useToast } from '../hooks/toast';

// import { Container } from './styles';

const Home: React.FC = () => {
  const {addToast} = useToast();

  const handleAddErroToast = () => {
    addToast({
      type: "error",
      title: "ERRO",
      description: "Esse é um Toast de ERRO!",
    });
  }
  

  const handleAddSuccessToast = () => {
    addToast({
      type: "success",
      title: "SUCCESS",
      description: "Esse é um Toast de Sucesso!",
    });
  }

  const handleAddInfoToast = () => {
    addToast({
      type: "info",
      title: "INFO",
      description: "Esse é um Toast padrão para informações!",
    });
  }

  return (
    <>
      <button type="button" onClick={handleAddErroToast}>
        Toast de Erro
      </button>
      <br />
      <button type="button" onClick={handleAddSuccessToast}>
        Toast de Sucesso
      </button>
      <br />
      <button type="button" onClick={handleAddInfoToast}>
        Toast de Informação
      </button>
    </>
  );
}

export default Home;