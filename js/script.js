 // select the input controls only
 const inputs = document.querySelectorAll(".controls input");

 // create a function to handle the changes for each control
 function handleUpdate() {
   // Using dataset will choose everything starting with data-, we're choosing the sizing here as per div above
   // Because the base colour doesn't use px, we need to also say "or nothing"
   const suffix = this.dataset.sizing || '';
   // Set the root styles property for the elements
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 }

 // Choose each input, when change occurs, call handleUpdate
 inputs.forEach(input => input.addEventListener("change", handleUpdate));
 // Add a change for mousemove also, so the numbers change as the slidebar is dragged
 inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
