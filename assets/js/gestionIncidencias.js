// Ruta: /assets/js/gestionIncidencias.js

document.addEventListener("DOMContentLoaded", () => {
    loadIncidents();
    
    // Funcionalidad de búsqueda
    document.getElementById("searchInput").addEventListener("keyup", searchIncidents);
  
    // Manejo del formulario para crear una nueva incidencia
    document.getElementById("newIncidentForm").addEventListener("submit", (e) => {
      e.preventDefault();
      createNewIncident();
      $('#newIncidentModal').modal('hide');
    });
  });
  
  function loadIncidents() {
    const tableBody = document.getElementById("incidentTableBody");
    tableBody.innerHTML = `
      <tr>
        <td>1</td>
        <td>2024-10-10</td>
        <td>Equipo</td>
        <td>Computadora no enciende</td>
        <td><span class="badge badge-warning">Pendiente</span></td>
        <td><button class="btn btn-sm btn-info" onclick="viewIncident(1)">Ver</button></td>
      </tr>
    `;
  }
  
  function searchIncidents() {
    const filter = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#incidentTableBody tr");
    rows.forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  }
  
  function createNewIncident() {
    // Lógica para agregar la nueva incidencia en la tabla
    alert("Nueva incidencia creada");
  }
  
  function viewIncident(id) {
    alert(`Detalles de la incidencia con ID ${id}`);
  }
  
  function openNewIncidentModal() {
    $('#newIncidentModal').modal('show');
  }
  