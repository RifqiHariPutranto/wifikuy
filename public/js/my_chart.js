var ctx = document.getElementById("GraphBulanan").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN",	"FEB",	"MAR",	"APR",	"MEI",	"JUN"],
        datasets: 
        [
            {
              label: 'TREG 2', // Name the series
              data: [99.83,99.65,99.71,99.75,99.04,99.74], // Specify the data values array
              fill: false,
              borderColor: '#FFFF00', // Add custom color border (Line)
              backgroundColor: '#FFFF00', // Add custom color background (Points and Fill)
              borderWidth: 3 // Specify bar border width
            },
            {
                label: 'TARGET', // Name the series
                data: [97,97,97,97,97,97], // Specify the data values array
                fill: false,
                borderColor: '#000000', // Add custom color border (Line)
                backgroundColor: '#00000', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
        ]},
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
      title: {
          display: true,
          text: 'Grafik availability Bulanan'
      }
     
    }
});