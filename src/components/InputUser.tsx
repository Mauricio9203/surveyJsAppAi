import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, Collapse, Card, CardContent } from '@mui/material';
import { useGlobalState } from '../context/GlobalStateContext';
import { generateSurvey } from '../services/surveyService';
import MinimizeIcon from '@mui/icons-material/Minimize';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InputUser: React.FC = () => {
  const { setShowSurvey } = useGlobalState();
  const { setSurveyAi } = useGlobalState();
  const { setShowLoading } = useGlobalState();
  const [surveyType, setSurveyType] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [generatedSurveyJson, setGeneratedSurveyJson] = useState<any>(null); // Almacenar el JSON generado
  const maxChars = 5000;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (newText.length <= maxChars) {
      setSurveyType(newText);
      setCharCount(newText.length);
    }
  };

  const handleSubmit = async () => {
    setShowLoading(true);
    setShowSurvey(false);
    setGeneratedSurveyJson(false);
    const data = await generateSurvey(surveyType);
    setGeneratedSurveyJson(true);
    setIsMinimized(!isMinimized);
    setShowLoading(false);
    setSurveyAi(data);
    setGeneratedSurveyJson(data); // Almacenar el JSON generado en el estado
    setShowSurvey(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar el salto de línea en el TextField
      handleSubmit(); // Llamar a handleSubmit al presionar Enter
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Función para descargar el JSON
  const downloadJson = () => {
    if (generatedSurveyJson) {
      const json = JSON.stringify(generatedSurveyJson, null, 2); // Convertir el objeto JSON a string
      const blob = new Blob([json], { type: 'application/json' }); // Crear un Blob con tipo de archivo JSON
      const url = URL.createObjectURL(blob); // Crear una URL para el Blob
      const link = document.createElement('a'); // Crear un enlace de descarga
      link.href = url;
      link.download = 'surveyAi.json'; // Nombre del archivo descargado
      link.click(); // Hacer clic en el enlace para iniciar la descarga
      URL.revokeObjectURL(url); // Liberar la URL creada
    }
  };

  return (
    <Card sx={{ width: '95%', margin: '0 auto', marginTop:"30px", padding: 4, boxShadow: 3, position: "relative" }}>
      <CardContent>
        {/* Botón de minimizar/expandir */}
        <IconButton
          onClick={toggleMinimize}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            borderRadius: '50%',
            padding: '4px',
            '&:hover': {
              backgroundColor: 'lightgray',
            },
            transition: 'transform 0.3s', // Agregar una transición suave para la rotación
            transform: isMinimized ? 'rotate(180deg)' : 'rotate(0deg)', // Rotación del icono
          }}
        >
          {isMinimized ? <ExpandMoreIcon sx={{ color: '#7A4F9C' }} /> : <MinimizeIcon sx={{ color: '#6A3D99' }} />}
        </IconButton>

        {/* Animación de expansión y minimización */}
        <Collapse in={!isMinimized} timeout="auto" unmountOnExit>
          <Box sx={{ padding: 4, backgroundColor: '#F7E6FF', borderRadius: 2, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h5" sx={{ marginBottom: 2, color: '#6A3D99' }}>
              SurveyJS Gemini AI
            </Typography>

            <Typography variant="body1" color="textSecondary" paragraph sx={{ marginBottom: 2 }}>
              This is an application powered by Gemini AI that generates surveys using SurveyJS.
              Simply describe the type of survey you'd like to create, and the AI will generate the
              corresponding survey for you. Make survey creation easier with AI!
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2, color: '#7A4F9C' }}>
              What type of survey would you like to create today?
            </Typography>

            <TextField
              label="Explain us"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={surveyType}
              onChange={handleChange}
              onKeyDown={handleKeyDown} // Detecta la tecla Enter
              sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#F7E6FF', // Fondo lila claro
                },
              }}
            />

            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
              {maxChars - charCount} characters remaining
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              disabled={!surveyType}
              sx={{
                backgroundColor: '#7A4F9C',
                '&:hover': {
                  backgroundColor: '#6A3D99',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Collapse>

        {/* Botón de descargar JSON */}
        {generatedSurveyJson && (
          <Button
            variant="outlined"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: '#D7A9FF',
              color: 'black',
              '&:hover': {
                backgroundColor: '#B99FFF',
              },
            }}
            onClick={downloadJson}
          >
            Download JSON
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default InputUser;
