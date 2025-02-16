import React from "react";
import { CSSTransition } from "react-transition-group";  // Importa el componente
import SurveyComponent from "./components/SurveyComponent";
import InputUser from "./components/InputUser";


import { GlobalStateProvider, useGlobalState } from "./context/GlobalStateContext";
import LoadingSurvey from "./components/LoadingSurvey";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <GlobalStateProvider> 
      <AppContent />
    </GlobalStateProvider>
  );
};

const AppContent: React.FC = () => {
  const { showSurvey } = useGlobalState();  
  const { showLoading } = useGlobalState(); 

  return (
    <div>
      
      <Header />
      <InputUser />
      
      {/* Aplicando la animación con CSSTransition */}
      <CSSTransition
        in={showLoading}
        timeout={500}  // Duración de la animación
        classNames="fade"  // Clase de animación
        unmountOnExit  // Elimina el componente del DOM cuando no está visible
      >
        <LoadingSurvey />
      </CSSTransition>

      <CSSTransition
        in={showSurvey}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
      <SurveyComponent />
      </CSSTransition>
     
      
    </div>
  );
};

export default App;
