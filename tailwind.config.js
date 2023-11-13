/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        Azulote: '#1F3752',
        Azul: '#416A9A',
        Azulito: '#588ECD',
        Naranjita: '#FCAB32',
        Negrito: '#212121',
        Grisecito: '#696969',
        blanquito: '#fff'
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}
