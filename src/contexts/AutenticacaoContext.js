import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({});

  function login(email, senha) {
    if (email == "ester@teste.com" && senha == 123) {
      setUsuario({ 
        nome: "Ester", 
        email: email,
        senha: senha,
        endereco: "Rua Teste",
        telefone: "(71) 123456789"
      });
      return "ok";
    }
    return "Email ou senha incorretos!";
  }

  return (
    <AutenticacaoContext.Provider value={{
      usuario,
      login
    }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}
