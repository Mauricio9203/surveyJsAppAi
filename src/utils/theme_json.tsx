import { ITheme } from "survey-core";

export const customTheme: ITheme = {
  cssVariables: {
    "--sjs-font-pagetitle-family": "Arial, sans-serif",
    "--sjs-font-pagetitle-color": "rgba(142, 85, 206, 1)",
    "--sjs-general-backcolor": "rgba(238, 227, 255, 1)", // Color de fondo general (lila claro)
    "--sjs-primary-backcolor": "rgb(81, 2, 171)", // Color principal (botones) - tono lila fuerte
    "--sjs-button-hovercolor": "rgb(57, 34, 86)", // Color de fondo cuando el ratón pasa sobre el botón (lila más oscuro)
    "--sjs-button-hovertextcolor": "rgb(210, 9, 9)", // Color del texto cuando el ratón pasa sobre el botón (blanco)
    "--sjs-font-size": "15px", // Tamaño de fuente
    "--sjs-base-font": "Arial, sans-serif", // Fuente
    "--sjs-corner-radius": "30px", // Radio de esquina
    "--sjs-primary-backcolor-dark": "rgba(102, 62, 193, 1)", // Hover button (lila más oscuro)
    "--sjs-questionpanel-backcolor": "rgb(216, 188, 248)", // Fondo de los paneles de preguntas (lila suave)
    "--sjs-question-title-font-size": "22px",  // Tamaño más grande para los números de las preguntas
},
  isPanelless: true, // Si lo pones en true, quita bordes de los paneles
};
