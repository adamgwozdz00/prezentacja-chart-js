import Chart from 'chart.js/auto';
import {Colors} from 'chart.js';
import {config1, config2, config3} from "./config";
import {ex1,ex2,ex3} from "./examples"
import {exercise} from "./exercise";


Chart.register(Colors);

const exampleChartCtx = document.getElementById('exampleChart');
//
new Chart(exampleChartCtx, exercise);






