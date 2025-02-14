import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/surveyJsTesting/', // Asegúrate de poner el nombre de tu repositorio aquí
})
