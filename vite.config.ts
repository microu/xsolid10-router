import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  server:{    port: 3333,
    host: "172.28.0.1",
},
  plugins: [solid()],
})
