import react from "@vitejs/plugin-react"
import eslint from 'vite-plugin-eslint'
import { defineConfig } from "vite"

// Your Vite configuration...
export default defineConfig({
  plugins: [react(), eslint()]
})
