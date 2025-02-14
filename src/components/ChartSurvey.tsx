import React, { useEffect, useState, useRef } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.css";
import { customTheme } from "../utils/theme_json";
import { Card, CardContent, Typography, Paper } from "@mui/material";
import { VisualizationPanel } from "survey-analytics";
import "survey-analytics/survey.analytics.css";
import { chartJSON } from "../surveys/json-chart";
import 'survey-react/survey.css';


const ChartComponent: React.FC = () => {
  const [result, setResult] = useState<any>(null);
  const [surveyModel, setSurveyModel] = useState<Model | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    for (const key in customTheme.cssVariables) {
      if (customTheme.cssVariables.hasOwnProperty(key)) {
        root.style.setProperty(key, customTheme.cssVariables[key]);
      }
    }

    const surveyInstance = new Model(chartJSON);
    surveyInstance.onComplete.add((sender) => {
      setResult(sender.data);
    });

    setSurveyModel(surveyInstance);
  }, []);

  useEffect(() => {
    if (result && surveyModel && chartRef.current) {
      const questions = surveyModel.getAllQuestions(); // Obtiene las preguntas de la encuesta
      const vizPanel = new VisualizationPanel(questions, [result]); // Pasa preguntas y respuestas
      chartRef.current.innerHTML = "";
      vizPanel.render(chartRef.current);
    }
  }, [result, surveyModel]);

  return (
    <div style={{ width: "auto", margin: "auto"}}>
      {surveyModel && <Survey model={surveyModel} />}

      {result && (
        <Card sx={{ mt: 4, p: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              📊 Survey Results:
            </Typography>
            <Paper variant="outlined" sx={{ backgroundColor: "#f5f5f5", p: 2 }}>
              <Typography component="pre" sx={{ whiteSpace: "pre-wrap", fontSize: "14px" }}>
                {JSON.stringify(result, null, 2)}
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card sx={{ mt: 4, p: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              📈 Survey Charts:
            </Typography>
            <div ref={chartRef} style={{ marginTop: "10px" }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChartComponent;
