const btnSwitch = document.querySelector('#btnSwitch');
let darkmode = localStorage.getItem('darkMode');

btnSwitch.addEventListener('click', () =>{
    let darkmode = localStorage.getItem('darkMode');
    if(darkmode !== "enabled"){
        enableDarkMode()
    }else{
        disableDarkMode()
    }
})


const enableDarkMode = () =>{
    document.body.classList.add('darkmode');
    btnSwitch.innerHTML = 'Light';
    localStorage.setItem('darkMode', "enabled")
}

const disableDarkMode = () =>{
    document.body.classList.remove('darkmode');
    btnSwitch.innerHTML = "Dark";
    localStorage.setItem('darkMode', null)
}

if(darkmode === "enabled"){
    enableDarkMode()
}


//form validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//spinner

  // Get references to the spinner and progress bar elements
const spinner = document.getElementById("spinner");
const progressBar = document.getElementById("progress-bar").querySelector(".progress-bar");

// Simulating a processing task
function processTask() {

  // Update the progress bar
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";
    progressBar.setAttribute("aria-valuenow", progress);

    if (progress >= 100) {
      // Hide the spinner and reset the progress bar
      clearInterval(interval);
      spinner.style.display = "none";
      progressBar.style.width = "0%";
      progressBar.setAttribute("aria-valuenow", "0");
    }
  }, 500);
}

// Call the processTask function when needed, e.g., on button click
document.getElementById("start-processing-btn").addEventListener("click", processTask);



//scoll modal show on window 1000px on scolling
window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const modal = new bootstrap.Modal(document.getElementById("myModal"));
  
    const lastShownTimestamp = localStorage.getItem("modalLastShown");
  
    if (!lastShownTimestamp || (Date.now() - lastShownTimestamp) >= 3600000) {
      if (scrollPosition >= 900 && scrollPosition < 1000) {
        modal.show();
        localStorage.setItem("modalLastShown", Date.now());
      } else {
        modal.hide();
      }
    }
  });
  
//table pagination 
const table = document.querySelector('#myTable');
let rowsPerPage = 5;
let currentPage = 1;

const displayRows = () =>{
    let startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = startIndex + rowsPerPage;

    let rows = table.rows;
    for(let i = 1; i< rows.length; i++){
        if (i >= startIndex && i < endIndex) {
            rows[i].style.display = "table-row";
          } else {
            rows[i].style.display = "none";
          }
         } 
    }

    
    function createPagination() {
        var totalPages = Math.ceil((table.rows.length - 1) / rowsPerPage);
        var pagination = document.getElementById("pagination");
        pagination.innerHTML = "";
  
        for (var i = 1; i <= totalPages; i++) {
          var link = document.createElement("a");
          link.href = "#";
          link.innerHTML = i;
          link.classList.add('page-link')
  
          if (i === currentPage) {
            link.classList.add('active')
          }
  
          link.onclick = function() {
            currentPage = parseInt(this.innerHTML);
            displayRows();
            createPagination();
            return false;
          };
  
          pagination.appendChild(link);
        }
      }
  

//call function
displayRows()
createPagination()


//alert 
const showAlert = () => {  
    // Find the alert container
    var container = document.getElementById('alertContainer');
    container.className = 'd-block'
    alert(container)
  }
  
setInterval(showAlert, 5000)

//spinner
  // Show the spinner
  function showSpinner() {
    document.getElementById("loader").classList.remove("d-none");
  }

  // Hide the spinner
  function hideSpinner() {
    document.getElementById("loader").classList.add("d-none");
  }

  // Simulate loading for 3 seconds (replace with your actual loading logic)
  function simulateLoading() {
    showSpinner();
    setTimeout(function() {
      hideSpinner();
    }, 3000);
  }

  window.addEventListener("load", function() {
    simulateLoading();
  });

//canvas style 
document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");
  
    // Data for the chart (team scores)
    var data = [
      { team: "Team A", score: 80 },
      { team: "Team B", score: 65 },
      { team: "Team C", score: 90 },
      { team: "Team D", score: 75 }
    ];
  
    // Set the canvas size and chart parameters
    canvas.width = 500;
    canvas.height = 300;
    var chartMargin = 40;
    var chartHeight = canvas.height - 2 * chartMargin;
    var barWidth = (canvas.width - 2 * chartMargin) / data.length;
  
    // Find the maximum score in the data
    var maxScore = Math.max(...data.map(item => item.score));
  
    // Function to draw a single bar
    function drawBar(x, y, height) {
      ctx.fillStyle = "steelblue";
      ctx.fillRect(x, y, barWidth, height);
    }
  
    // Function to draw the entire chart
    function drawChart() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw the bars
      data.forEach(function(item, index) {
        var barX = chartMargin + index * barWidth;
        var barHeight = (item.score / maxScore) * chartHeight;
        var barY = canvas.height - chartMargin - barHeight;
        drawBar(barX, barY, barHeight);
  
        // Draw the team labels
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(item.team, barX + barWidth / 2, canvas.height - chartMargin + 15);
      });
  
      // Draw the y-axis
      ctx.beginPath();
      ctx.moveTo(chartMargin, canvas.height - chartMargin);
      ctx.lineTo(chartMargin, chartMargin);
      ctx.strokeStyle = "black";
      ctx.stroke();
  
      // Draw the x-axis
      ctx.beginPath();
      ctx.moveTo(chartMargin, canvas.height - chartMargin);
      ctx.lineTo(canvas.width - chartMargin, canvas.height - chartMargin);
      ctx.stroke();
    }
  
    // Call the drawChart function to initially draw the chart
    drawChart();
  });
  