import { fromObject } from '@nativescript/core'

export function HomeViewModel() {
  const viewModel = fromObject({
    displayText: '0',

    currentValue: '',
    operator: null,
    previousValue: '',
    isNewEntry: true,

    // Método chamado quando um botão numérico é pressionado
    onNumberPress: function(args) {
      const button = args.object;
      const number = button.text;

      // Se for uma nova entrada, limpa o display
      if (this.isNewEntry) {
        this.displayText = number;
        this.isNewEntry = false;
      } else {
        this.displayText += number;
      }

      // Atualiza o valor atual
      this.currentValue = this.displayText;
    },

    // Método chamado quando um operador é pressionado
    onOperatorPress: function(args) {
      const button = args.object;
      const op = button.text;

      // Se há um valor atual, executa a operação anterior se existir
      if (this.currentValue !== '' && this.operator) {
        this.calculate();
      }

      // Define o operador e armazena o valor atual como anterior
      this.operator = op;
      this.previousValue = this.currentValue;
      this.isNewEntry = true;
    },

    // Método chamado quando o botão de igual é pressionado
    onEqualPress: function() {
      if (this.operator && this.previousValue !== '' && this.currentValue !== '') {
        this.calculate();
        this.operator = null;
        this.isNewEntry = true;
      }
    },

    // Método para calcular o resultado baseado no operador
    calculate: function() {
      const prev = parseFloat(this.previousValue);
      const curr = parseFloat(this.currentValue);
      let result = 0;

      switch (this.operator) {
        case '+':
          result = prev + curr;
          break;
        case '-':
          result = prev - curr;
          break;
        case '*':
          result = prev * curr;
          break;
        case '/':
          if (curr === 0) {
            this.displayText = 'Erro: Divisão por zero';
            return;
          }
          result = prev / curr;
          break;
        case '%':
          result = prev * (curr / 100);
          break;
        case '^':
          result = Math.pow(prev, curr);
          break;
        case '√':
          // Para raiz quadrada, usa apenas o valor atual
          if (curr < 0) {
            this.displayText = 'Erro: Raiz de número negativo';
            return;
          }
          result = Math.sqrt(curr);
          break;
      }

      // Atualiza o display com o resultado
      this.displayText = result.toString();
      this.currentValue = this.displayText;
    },

    // Método chamado quando o botão de limpar é pressionado
    onClearPress: function() {
      this.displayText = '0';
      this.currentValue = '';
      this.previousValue = '';
      this.operator = null;
      this.isNewEntry = true;
    },

    // Método chamado quando o botão de ponto decimal é pressionado
    onDotPress: function() {
      // Adiciona ponto apenas se não houver ponto no display atual
      if (this.isNewEntry) {
        this.displayText = '0.';
        this.isNewEntry = false;
      } else if (this.displayText.indexOf('.') === -1) {
        this.displayText += '.';
      }
      this.currentValue = this.displayText;
    },

    // Método chamado quando o botão de porcentagem é pressionado
    onPercentagePress: function() {
      // Calcula porcentagem do valor atual
      const value = parseFloat(this.currentValue);
      const result = value / 100;
      this.displayText = result.toString();
      this.currentValue = this.displayText;
      this.isNewEntry = true;
    },

    // Método chamado quando o botão de potência é pressionado
    onPowerPress: function() {
      this.operator = '^';
      this.previousValue = this.currentValue;
      this.isNewEntry = true;
    },

    // Método chamado quando o botão de raiz quadrada é pressionado
    onSqrtPress: function() {
      const value = parseFloat(this.currentValue);
      if (value < 0) {
        this.displayText = 'Erro: Raiz de número negativo';
      } else {
        const result = Math.sqrt(value);
        this.displayText = result.toString();
        this.currentValue = this.displayText;
      }
      this.isNewEntry = true;
    }
  })

  return viewModel
}
