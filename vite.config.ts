import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    outDir: 'dist', // Especifica el directorio de salida
    assetsDir: 'assets', // Especifica el subdirectorio de los assets
  },
  base: '/surveyJsTesting/', // Asegúrate de que esto está bien configurado
});
