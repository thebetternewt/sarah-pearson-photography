import Typography from 'typography';
// import grandViewTheme from 'typography-theme-grand-view'

const typography = new Typography({
  scaleRatio: 3,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400'],
    },
    {
      name: 'Pinyon Script',
      styles: ['400'],
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Baskerville',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
})

export default typography
