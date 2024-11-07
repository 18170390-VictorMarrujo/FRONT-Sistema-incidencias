// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("reportChart").getContext("2d");
  const reportChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["En Progreso", "Sin Atender", "En Espera", "Terminadas", "Liberadas"],
      datasets: [{
        data: [45, 20, 15, 35, 10], // Puedes ajustar estos valores
        backgroundColor: ["#007bff", "#dc3545", "#ffc107", "#28a745", "#6c757d"],
        hoverBackgroundColor: ["#0056b3", "#c82333", "#e0a800", "#218838", "#495057"],
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#343a40",
            font: { size: 14 }
          }
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw} órdenes`;
            }
          }
        }
      }
    }
  });
});

function logout() {
  alert("Cerrando sesión...");
  window.location.href = "login.html";
  // Aquí puedes añadir la lógica de logout real
}
