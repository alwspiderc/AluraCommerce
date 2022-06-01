import { createContext, useState } from "react";

export const TemaContext = createContext({})

export function TemaProvider( {children} ) {
  const [temaAtual, setTemaAtual] = useState('');

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual
        }}>
            { children }

        </TemaContext.Provider>
    )
} 