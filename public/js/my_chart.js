// Bar chart
new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      labels: ["Jakarta Utara", "Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Bogor"],
      datasets: [
        {
          label: "Jumlah AP Up",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5758,7416,6871,7294,6357]
        }
      ]
    },
    options: {
    responsive: false, // Instruct chart js to respond nicely.
    maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
      
    legend: { display: false },
      title: {
        display: true,
        text: 'Availability berdasarkan WITEL'
      },
    scales: {
        y: {
            beginAtZero: true
        }
    }
    }
});