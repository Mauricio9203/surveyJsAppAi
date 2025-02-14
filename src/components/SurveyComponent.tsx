import React, { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.css"; // Estilos de SurveyJS
import { customTheme } from "../utils/theme_json"; // Tema personalizado
import { formJSON } from "../surveys/example1"; // JSON de la encuesta
import { Card, CardContent, Typography, Paper, Button} from "@mui/material"; // Importación de Material UI

const SurveyComponent: React.FC = () => {
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

  const survey = new Model(formJSON); // Crear encuesta con JSON

  // Capturar resultado cuando se completa la encuesta
  survey.onComplete.add((sender) => {
    setResult(sender.data);
    setComplete(false)
    console.log(sender.data); // Mostrar en consola
  });

  const handleBack = ()  => {
    setComplete(true)
  }
   

  return (
    <div style={{ width: "auto", margin: "auto" }}>
      {complete && <Survey model={survey} />}

      {!complete && (
        <Card sx={{ mt: 4, p: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              📊 Survey Results:
            </Typography>
            <Paper variant="outlined" sx={{ backgroundColor: "#f5f5f5", p: 2 }}>
              <Typography
                component="pre"
                sx={{ whiteSpace: "pre-wrap", fontSize: "14px" }}
              >
                {JSON.stringify(result, null, 2)}
              </Typography>
            </Paper>
          </CardContent>
          <Button variant="outlined" onClick={handleBack}>Back</Button>
        </Card>
      )}
    </div>
  );
};

export default SurveyComponent;
