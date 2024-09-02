function formatter(text, action) {
    if (typeof text !== 'string') {
      return 'Erro: Entrada inválida.';
    }
  
    switch (action) {
      case 'lowercase':
        return text.toLowerCase();
      case 'uppercase':
        return text.toUpperCase();
      default:
        return 'Ação não suportada.';
    }
  }
  
  export default formatter;
  