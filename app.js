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
  // Show the spinner
  spinner.style.display = "block";

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
  