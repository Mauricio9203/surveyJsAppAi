export const chartJSON = {
  "title": "Satisfaction Survey", // Título de la encuesta
  "showProgressBar": "top", // Mostrar la barra de progreso en la parte superior
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "satisfaction",
          "title": "How satisfied are you with our service?", // Título de la pregunta
          "choices": [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied"
          ]
        },
        {
          "type": "checkbox",
          "name": "improvements",
          "title": "In which areas can we improve?", // Título de la pregunta
          "choices": [
            "Customer Service",
            "Product Quality",
            "Delivery Time",
            "Prices",
            "Other"
          ]
        },
        {
          "type": "rating",
          "name": "rating",
          "title": "How would you rate our company?", // Título de la pregunta
          "rateMax": 5, // Máximo de estrellas (5)
          "rateMin": 1, // Mínimo de estrellas (1)
          "isRequired": true, // Es una pregunta obligatoria
          "rateValues": ["1", "2", "3", "4", "5"], // Etiquetas para las estrellas (opcional)
          "rateScale": "stars" // Escala de estrellas
        }
      ]
    }
  ]
};
