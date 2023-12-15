// Get the modal
var modal = document.getElementById("deleteModal");

// Get the buttons
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

// Variable to store the post to be deleted
var postToDelete;

// When the user clicks on the delete button, open the modal
document.querySelectorAll(".delete-btn").forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
    postToDelete = this.closest(".post");
  };
});

// When the user clicks on "No", close the modal
noBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on "Yes", delete the post and close the modal
yesBtn.onclick = function () {
  // Here you would add the code to delete the post
  postToDelete.remove();
  modal.style.display = "none";
};
