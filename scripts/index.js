// Get the modal
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Get the button that opens the modal
var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
signUpBtn.onclick = function () {
  signUpModal.style.display = "block";
};
signInBtn.onclick = function () {
  signInModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    signUpModal.style.display = "none";
    signInModal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
};
