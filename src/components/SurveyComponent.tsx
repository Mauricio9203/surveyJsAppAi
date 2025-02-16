import React, { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.css"; // Estilos de SurveyJS
import { customTheme } from "../utils/theme_json"; // Tema personalizado
import { Card, CardContent, Typography, Paper, Button, Box } from "@mui/material"; // Importación de Material UI
import { useGlobalState } from '../context/GlobalStateContext';

const SurveyComponent: React.FC = () => {
  const { surveyAi } = useGlobalState(); // Accede al estado showSurvey
  const [result, setResult] = useState<any>(null); // Estado para guardar la respuesta
  const [complete, setComplete] = useState<boolean>(true);

  useEffect(() => {
    // Aplicar las variables CSS globalmente al cargar la encuesta
    const root = document.documentElement;
    for (const key in customTheme.cssVariables) {
      if (customTheme.cssVariables.hasOwnProperty(key)) {
        root.style.setProperty(key, customTheme.cssVariables[key]);
      }
    }
  }, []);

  const survey = new Model(surveyAi); // Crear encuesta con JSON

  // Capturar resultado cuando se completa la encuesta
  survey.onComplete.add((sender) => {
    setResult(sender.data);
    setComplete(false);
    console.log(sender.data); // Mostrar en consola
  });

  const handleBack = () => {
    setComplete(true);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: '30px', marginBottom:'30px' }}>
      <Card sx={{ width: '95%',  boxShadow: 5, marginBottom: "30px" }}>
        {complete && (
       
            <Survey model={survey} />
   
        )}

        {!complete && (
          <CardContent>
            <Typography variant="h5" gutterBottom>
              📊 Survey results:
            </Typography>
            <Paper variant="outlined" sx={{ backgroundColor: "#f5f5f5", p: 2 }}>
              <Typography
                component="pre"
                sx={{ whiteSpace: "pre-wrap", fontSize: "14px" }}
              >
                {JSON.stringify(result, null, 2)}
              </Typography>
            </Paper>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="outlined" onClick={handleBack}>
                Back
              </Button>
            </Box>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default SurveyComponent;
