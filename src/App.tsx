import React, { useState, useEffect } from "react";
import SurveyComponent from "./components/SurveyComponent";
import InputUser from "./components/InputUser";
import { GlobalStateProvider, useGlobalState } from "./context/GlobalStateContext";
import LoadingSurvey from "./components/LoadingSurvey";
import Header from "./components/Header";

console.warn = () => {}; // Desactiva console.warn en desarrollo

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

  const [loadingVisible, setLoadingVisible] = useState(showLoading);
  const [surveyVisible, setSurveyVisible] = useState(showSurvey);

  // Control de la animación de la carga
  useEffect(() => {
    if (showLoading) {
      setLoadingVisible(true);
    } else {
      const timeout = setTimeout(() => setLoadingVisible(false), 500); // Tiempo de animación
      return () => clearTimeout(timeout);
    }
  }, [showLoading]);

  // Control de la animación de la encuesta
  useEffect(() => {
    if (showSurvey) {
      setSurveyVisible(true);
    } else {
      const timeout = setTimeout(() => setSurveyVisible(false), 500); // Tiempo de animación
      return () => clearTimeout(timeout);
    }
  }, [showSurvey]);

  return (
    <div>
      <Header />
      <InputUser />

      {/* Animación simple de fade */}
      {loadingVisible && (
        <div
          style={{
            opacity: showLoading ? 1 : 0,
            transition: "opacity 500ms",
          }}
        >
          <LoadingSurvey />
        </div>
      )}

      {surveyVisible && (
        <div
          style={{
            opacity: showSurvey ? 1 : 0,
            transition: "opacity 500ms",
          }}
        >
          <SurveyComponent />
        </div>
      )}
    </div>
  );
};

export default App;
