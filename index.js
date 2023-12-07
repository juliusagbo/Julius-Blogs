
function toggleLike(postId) {
    var likeButton = document.getElementById('likeButton');
    likeButton.classList.toggle('liked');
}

function shareContent() {
    // Get the content you want to share (replace this with your actual content)
    var contentToShare = "https://juliusagbo.github.io/Parola-blogs/";

    // Use the Clipboard API to copy the content to the clipboard
    navigator.clipboard.writeText(contentToShare)
        .then(function() {
            // Clipboard write successful, perform sharing action
            alert('Content copied to clipboard. Now you can perform the sharing action.');
            // Replace the following line with your actual sharing logic, e.g., open a new tab with a share URL
            // window.open('your_share_url', '_blank');
        })
        .catch(function(err) {
            // Handle errors
            console.error('Unable to copy to clipboard', err);
        });
}
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentsList.appendChild(newComment);
    commentInput.value = ''; // Clear the input after adding a comment
  }

