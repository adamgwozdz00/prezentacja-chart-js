export const options = {
  animation: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        font: {
          size: 14,
          weight: 200, // normal | bold | lighter | bolder | number,
          family: 'sans-serif' //"'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
        },
      }
    },
    tooltip: {
      enabled: true,
    },
    title: {
      display: true,
      text: 'Przkładowy wykres',
      font: {
        size: 20,
        weight: 'bold',
        family: 'sans-serif'
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true
      },
      ticks: {
        callback: (value, index, ticks) => value + "%",
        font: {
          size: 16
        }
      },
      title: {
        display: true,
        text: 'Percent of votes (%)',
        font: {
          size: 16
        }
      }
    },
    x: {
      beginAtZero: true,
      grid: {
        display: true
      },
      ticks: {
        font: {
          size: 16
        }
      },
      title: {
        display: true,
        text: 'Colors',
        font: {
          size: 16
        }
      }
    },
  },
};
