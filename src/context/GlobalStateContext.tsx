import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir el tipo de datos del estado global
 //*** 
interface GlobalState {
  showSurvey: boolean; 
  setShowSurvey: (showSurvey: boolean) => void; 
  showLoading: boolean; 
  setShowLoading: (showSurvey: boolean) => void; 
  surveyAi: any
  setSurveyAi: (surveyAi: any) => void; 
}

// Definir el tipo de props del proveedor, incluyendo children
interface GlobalStateProviderProps {
  children: ReactNode;  // Esto permite que el componente acepte cualquier tipo de hijo
}

// Crear el contexto con valores predeterminados
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Crear un proveedor para el contexto
 //*** 
export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [showSurvey, setShowSurvey] = useState<boolean>(false); // Estado para showSurvey
  const [showLoading, setShowLoading] = useState<boolean>(false); // Estado para showSurvey
  const [surveyAi, setSurveyAi] = useState<any>(null);  // O `Record<string, unknown>`



  return (
    //*** 
    <GlobalStateContext.Provider value={{
        showSurvey, setShowSurvey,
        surveyAi, setSurveyAi ,
        showLoading, setShowLoading
      }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Crear un hook para acceder al contexto
export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
