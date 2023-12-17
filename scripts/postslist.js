// Get the modal
var modal = document.getElementById("deleteModal");

// Get the buttons
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

// Variable to store the post to be deleted
var postToDelete;

// Assuming each card has a class 'card' and each "..." icon has a class 'icon'
var icons = document.querySelectorAll(".post-more");

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

function viewFullPost(postId) {
  window.location.href = "../html/post.html?post=" + postId;
}

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    // Get the parent post element
    var post = icon.closest(".post");

    // Get the post data
    var postData = {
      title: post.querySelector(".post-title").textContent,
      author: post.querySelector(".post-username").textContent,
      content: post.querySelector(".post-desc").textContent,
    };

    // Store the post data in localStorage
    localStorage.setItem("post", JSON.stringify(postData));

    // Redirect to the post.html page
    window.location.href = "post.html";
  });
});
