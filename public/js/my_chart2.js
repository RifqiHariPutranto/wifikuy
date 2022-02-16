var ctx = document.getElementById("myChart2").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["10 Jan",	"11 Jan",	"12 Jan",	"13 Jan",	"14 Jan",	"15 Jan",	"16 Jan","17 Jan",	"18 Jan","19 Jan"],
        datasets: [{
            label: 'AP Availability', // Name the series
            data: [25450,	27350,	24240,	24040,	24141,	25111,	27544,	26447,	25555, 26811], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
        responsive: false, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
      title: {
          display: true,
          text: 'Grafik availability WLAN'
      }
     
    }
});