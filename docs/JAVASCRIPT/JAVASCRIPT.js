function toggleMode() {
   var body = document.body;
   body.classList.toggle("dark-mode");

   var button = document.getElementById("modeToggle");
   if (body.classList.contains("dark-mode")) {
       button.textContent = "Light Mode";
   } else {
       button.textContent = "Dark Mode";
   }
}
