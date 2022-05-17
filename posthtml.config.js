module.exports = {
  plugins: {
    'posthtml-modules': {
      from: './src/components/card.html',
      tag: 'component',
      attribute: 'src',
      attributeAsLocals: true,
      expressions: {
        strictMode: false,
        locals: {
          ifClass: (check, yes, no = '') => {
            return check ? yes : no
          }
        }
      }
    },
  }
}

