<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data() {
    return {
      calculatorValue: '',
      calculatorElements: ['C', '*', '/', '-', '7', '8', '9', '+', '4', '5', '6', '%', '1', '2', '3', '=', '0', '.'],
      operator: null,
      previousCalculatorValue: ''
    }
  },
  methods: {
    action(n) {
      // Append value
      if (!isNaN(n) || n === '.') {
        this.calculatorValue += n + '';
      }

      // Clear value
      if (n === 'C') {
        this.calculatorValue = '';
      }

      // Percentage
      if (n === '%') {
        this.calculatorValue = this.calculatorValue / 100 + '';
      }

      // Operator
      if (['*', '/', '-', '+'].includes(n)) {
        this.operator = n;
        this.previousCalculatorValue = this.calculatorValue;
        this.calculatorValue = '';
      }

      // Calculate
      if (n === '=') {
        this.calculatorValue = eval(
          this.previousCalculatorValue + this.operator + this.calculatorValue
        )

        this.previousCalculatorValue ='';
        this.operator = null;
      }
    }
  }
}
</script>

<template>
  <div class="calculator">

    <!--Calculator Result-->
    <div class="result">
      {{ calculatorValue || 0 }}
    </div>

    <!--Calculator Buttons-->
    <div>
      <div class="grid-col" v-for="n in calculatorElements" :key="n"
      :class="{'green': ['C','*', '/', '-', '+', '%', '='].includes(n)}"
      @click="action(n)"
      >
        {{ n }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  margin: 50px auto;
  padding: 10px;
  max-width: 350px;
  background: darkslategrey;
  font-family: 'Courier New', Courier, monospace;
}

.result {
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: right;
  background: slategrey;
}

.grid-col {
  display: inline-grid;
  grid-template-rows: 60px;
  grid-template-columns: 75px;
  grid-auto-flow: column;
  margin: 6px;
  line-height: 60px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  background: slategrey;
}

.grid-col:hover {
  background: lightsteelblue;
  cursor: pointer;
  transition: 0.3s;
}

.green {
  background: lightseagreen;
}
</style>
