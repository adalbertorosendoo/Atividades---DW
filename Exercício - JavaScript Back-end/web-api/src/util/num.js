function calculator(values, action) {
    const numericValues = values.map(Number);
    switch (action) {
      case 'minimum':
        return Math.min(...numericValues);
      case 'maximum':
        return Math.max(...numericValues);
      default:
        return 'Ação não suportada';
    }
  }
  
  export default calculator;
  