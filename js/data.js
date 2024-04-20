// Primitive
export const data1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    label: '# of Votes',
  }],
}
// Object
export const data2 = {
  datasets: [
    {
      data: [
        {
          x: 'Red', y: 12
        },
        {
          x: 'Blue', y: 19
        },
        {
          x: 'Yellow', y: 3
        },
        {
          x: 'Green', y: 5
        },
        {
          x: 'Purple', y: 2
        },
        {
          x: 'Orange', y: 3
        }
      ],
      label: '% of Votes',
      color: '#FF0000',
      background: 'rgba(255, 0, 0,1)',
      borderColor: 'rgba(255, 0, 0,1)'
    }
  ]
}


const values = [
  {x: 'Jan', net: 100, cogs: 50},
  {x: 'Feb', net: 120, cogs: 55},
  {x: 'Mar', net: 110, cogs: 60}
];

export const data3 = {
  datasets: [{
    label: 'Net sales',
    data: values,
    parsing: {
      yAxisKey: 'net'
    }
  }, {
    label: 'Cost of goods sold',
    data: values,
    parsing: {
      yAxisKey: 'cogs'
    }
  }]
}
// Custom colors
// const colors = [
//   '#FF0000',
//   '#0000FF',
//   '#00FF00'
// ]
//
// data3.datasets.forEach((dataset, i) => {
//   dataset.backgroundColor = colors[i]
// })
