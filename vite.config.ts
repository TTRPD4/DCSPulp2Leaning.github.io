import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace '[YOUR_REPO_NAME]' with the actual name of your GitHub repository.
  // This is necessary for GitHub Pages deployment to work correctly.
  // For example, if your repo URL is https://github.com/user/my-dcs-app,
  // you should change this to: base: '/my-dcs-app/'
  base: '/DCSPulp2Leaning.github.io/' 
})
