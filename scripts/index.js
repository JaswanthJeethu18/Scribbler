// Get the modal
var signUpModal = document.getElementById("signUpModal");

// Get the button that opens the modal
var signUpBtn = document.getElementById("signUpBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
signUpBtn.onclick = function () {
  signUpModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  signUpModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
};
