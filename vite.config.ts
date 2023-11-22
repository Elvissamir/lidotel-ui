import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  return {
    base: '/lidotel-ui/',
    server: {
      port: +(process.env.PORT || 8598)
    },
    plugins: [
      react(),
    ]
  }
})