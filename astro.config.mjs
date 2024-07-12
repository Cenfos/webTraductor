import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuración de Vite
  vite: {
    plugins: [
      // Plugin de redirección de raíz
      {
        name: 'root-redirect',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // Redirigir raíz a /es por defecto
            if (req.url === '/') {
              res.writeHead(302, { Location: '/es' });
              res.end();
            } else {
              next();
            }
          });
        }
      },
      // Otros plugins de Vite que puedas necesitar
    ]
  },
  // Experimentos y ajustes adicionales
  experiments: {
    ssr: true, // Habilitar renderizado del lado del servidor
  },
});


