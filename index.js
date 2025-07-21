
const selectedNum = document.querySelector(".selected_num")

const form  = document.querySelector(".form")

const success = document.querySelector(".submitted_state")


function handleSubmit(e) {
  e.preventDefault(); 
  
if (!selectedRating) {
    alert("Please select a rating.");
    return;
  }
form.classList.add("hide")
success.classList.add("display")

}

const buttons = document.querySelectorAll(".rating_btn"); // plural name for all buttons
let selectedRating = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedRating = btn.value;

    buttons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    
    selectedNum.innerHTML = selectedRating;
    console.log(selectedRating);
    
  });
});


form.addEventListener('submit', handleSubmit)

