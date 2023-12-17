// Get the card data from localStorage
// Get the post data from localStorage
var postData = JSON.parse(localStorage.getItem("post"));

// Get the elements
var postTitle = document.querySelector(".post-title");

// Get the edit/save button
var editSaveBtn = document.querySelector(".edit-save-btn");

// Initialize the like count
var likeCount = 0;

// Get the like button and the like info paragraph
var likeBtn = document.querySelector(".like-btn");
var likeInfo = document.querySelector(".like-info");

// Get the comment input box, the comment button, and the comments section
var commentInput = document.querySelector(".comment-input");
var commentBtn = document.querySelector(".comment-btn");
var commentsSection = document.querySelector(".comments-section");

// Set the data
postTitle.textContent = postData.title;

// Add an event listener to the button
editSaveBtn.addEventListener("click", function () {
  // Get the post title and post text elements
  postTitle = document.querySelector(".post-title");
  var postText = document.querySelector(".post-text");

  // Check the current state of the button
  if (editSaveBtn.textContent.trim() === "Edit") {
    // Make the post title and post text editable
    postTitle.contentEditable = "true";
    postText.contentEditable = "true";

    // Change the button text to 'Save'
    editSaveBtn.innerHTML = 'Save <i class="fa fa-save"></i>';
    editSaveBtn.style.backgroundColor = "green";

    // Add the pink border to the editable elements
    postTitle.style.border = "2px solid pink";
    postText.style.border = "2px solid pink";
  } else {
    // Make the post title and post text non-editable
    postTitle.contentEditable = "false";
    postText.contentEditable = "false";

    // Change the button text back to 'Edit'
    editSaveBtn.innerHTML = 'Edit <i class="fa fa-edit"></i>';
    editSaveBtn.style.backgroundColor = "red";

    // Remove the pink border from the elements
    postTitle.style.border = "none";
    postText.style.border = "none";
  }
});

// Add an event listener to the like button
likeBtn.addEventListener("click", function () {
  // Increment the like count
  likeCount++;

  // Update the like button text and the like info text
  if (likeCount === 1) {
    likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
    likeInfo.textContent = "1 person likes this!";
  } else {
    likeInfo.textContent = likeCount + " people like this!";
  }
});

// Add an event listener to the comment button
commentBtn.addEventListener("click", function () {
  // Get the comment text
  var commentText = commentInput.value.trim();

  // Check if the comment text is not empty
  if (commentText) {
    // Create a new comment element
    var newComment = document.createElement("p");
    newComment.textContent = commentText;
    newComment.className = "comment";

    // Add the new comment to the top of the comments section
    commentsSection.insertBefore(newComment, commentsSection.firstChild);

    // Clear the comment input box
    commentInput.value = "";
  }
});
