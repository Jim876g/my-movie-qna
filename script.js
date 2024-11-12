document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentList = document.getElementById('commentList');
    const newComment = document.createElement('div');
    newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
    commentList.appendChild(newComment);

    document.getElementById('commentForm').reset();
});
