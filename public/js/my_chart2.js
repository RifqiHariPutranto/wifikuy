var ctx = document.getElementById("GraphHarian").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1 Mei",	"2 Mei",	"3 Mei",	"4 Mei",	"5 Mei",	"6 Mei",	"7 Mei"],
        datasets: 
        [
            {
                label: 'Serang', // Name the series
                data: [8.4,	9.33,	9.48,	8.96,	8.37,	8.04,8.19], // Specify the data values array
                fill: false,
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Tangerang', // Name the series
                data: [13,	14.09,	14.68,	14.36,	13.56,	12.88,12.31], // Specify the data values array
                fill: false,
                borderColor: '#FF0000', // Add custom color border (Line)
                backgroundColor: '#FF0000', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Bogor', // Name the series
                data: [7.52,	9,	9.12,	8.63,	7.35,	6.90,6.29], // Specify the data values array
                fill: false,
                borderColor: '#800000', // Add custom color border (Line)
                backgroundColor: '#800000', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Bekasi', // Name the series
                data: [8.29,	9.41,	9.69,	9.29,	8.56,	7.81,7], // Specify the data values array
                fill: false,
                borderColor: '#A52A2A', // Add custom color border (Line)
                backgroundColor: '#A52A2A', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Jakarta Barat', // Name the series
                data: [4.6,	5.5,	5.82,	5.41,	4.73,	4.74,3.49], // Specify the data values array
                fill: false,
                borderColor: '#00FF00', // Add custom color border (Line)
                backgroundColor: '#00FF00', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Jakarta Pusat', // Name the series
                data: [7.29,	8.57,	9.04,	8.34,	7.88,	7.45,7.03], // Specify the data values array
                fill: false,
                borderColor: '#00FFFF', // Add custom color border (Line)
                backgroundColor: '#00FFFF', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Jakarta Selatan', // Name the series
                data: [7.14,	7.84,	8.31,	8.32,	7.43,	6.86,6.68], // Specify the data values array
                fill: false,
                borderColor: '#FFA500', // Add custom color border (Line)
                backgroundColor: '#FFA500', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Jakarta Timur', // Name the series
                data: [5.79,	6.95,	7.28,	7.1,	6.79,	6.58,5.52], // Specify the data values array
                fill: false,
                borderColor: '#C0C0C0', // Add custom color border (Line)
                backgroundColor: '#C0C0C0', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
            {
                label: 'Jakarta Utara', // Name the series
                data: [4.26,	5.43,	5.89,	5.86,	5.67,	4.99,4.45], // Specify the data values array
                fill: false,
                borderColor: '#FFFF00', // Add custom color border (Line)
                backgroundColor: '#FFFF00', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
        ]},
    options: {
        responsive: false, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
      title: {
          display: true,
          text: 'Grafik availability 30 Hari Terakhir'
      }
     
    }
});