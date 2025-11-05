# TODO: Transformar Projeto em Calculadora

## Passos para Implementação

1. **Atualizar UI (home-page.xml)**: ✅ Concluído
   - Adicionado GridLayout para layout da calculadora.
   - Incluído display (Label) para mostrar o resultado.
   - Adicionados botões para números (0-9), operadores (+, -, *, /, %, ^, √), =, C (limpar).

2. **Atualizar ViewModel (home-view-model.js)**: ✅ Concluído
   - Adicionadas propriedades: displayText, currentValue, operator, previousValue, isNewEntry.
   - Implementados métodos para botões:
     - onNumberPress: Adicionar dígitos ao display.
     - onOperatorPress: Definir operador e armazenar valor atual.
     - onEqualPress: Executar operação e atualizar display.
     - onClearPress: Limpar tudo.
     - onDotPress: Adicionar ponto decimal.
     - onPercentagePress: Calcular porcentagem (valor / 100).
     - onPowerPress: Preparar para potência.
     - onSqrtPress: Calcular raiz quadrada.
   - Lógica para operações aritméticas básicas.
   - Tratamento de erros (divisão por zero, etc.).

3. **Adicionar Estilos CSS (app.css)**: ✅ Concluído
   - Estilos para display, botões numéricos, operadores, botão de limpar e igual.

4. **Testar a Aplicação**:
   - Executar o app e verificar funcionamento.
   - Ajustar layout se necessário para dispositivos móveis.

## Notas
- Código mantido didático com comentários explicativos.
- Usado apenas NativeScript Core, sem bibliotecas adicionais.
- Layout responsivo com GridLayout.
