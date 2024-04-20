export const ex1 = {
  type: 'bar',
  data: {
    labels: ['PiS', 'KO', 'Trzecia Droga', 'Lewica', 'Konfederacja', 'Bezpartyjni', 'Polska jest jedna'],
    datasets: [{
      label: 'Wyniki wyborów do sejmu w %',
      data: [35.4, 30.7, 14.4, 8.6, 7.2, 1.9, 1.7],
      borderWidth: 1
    }]
  },
  options: {
    //indexAxis: 'y',
    scales: {
      y: {
        //beginAtZero: true,
        //position: 'right',
        //suggestedMax: 100
      }
    }
  }
}

const labels = ['PiS', 'Opozycja']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'PiS',
      data: [35.4]
    },
    {
      label: 'KO',
      data: [0, 30.7]
    },
    {
      label: 'Lewica',
      data: [0, 14.4]
    },
    {
      label: 'Trzecia Droga',
      data: [0, 8.6]
    },
  ]
};

export const ex2 = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: 'rgb(2, 2, 2)'
        }
      },
      title: {
        display: true,
        text: 'Wybory do sejmu',
        font: {
          size: 24,
          weight: 'bold'
        }
      },
      subtitle: {
        display: true,
        text: 'PiS vs Opozycja',
        font: {
          size: 18,
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  }
}

const labels2 = ['Czerwony', 'Pomarańczowy', 'Żółty', 'Zielony', 'Niebieski'];

const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Głosy',
      data: [5, 6, 7, 6, 2],
      backgroundColor: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue'
        // '#ffb3ba80',
        // '#ffdfba80',
        // '#ffffba80',
        // '#baffc980',
        // '#bae1ff80'
      ]
    }
  ]
};

export const ex3 = {
  type: 'polarArea',
  data: data2,
  options: {
    responsive: true,
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: {
            size: 18
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        position: 'bottom',
        text: 'Ulubiony kolor - ankieta',
        font: {
          size: 18
        }
      }
    }
  },
};
