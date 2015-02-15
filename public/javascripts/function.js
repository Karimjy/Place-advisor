function deleteReview(id) {
    console.log('resrt');
    var review = document.getElementById(id);

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(id) {
        if(httpRequest.readyState === 4 && httpRequest.status === 204) {
            review.remove();
        }
    }
    httpRequest.open('DELETE', '/reviews/' + id, true);
    httpRequest.send();
    location.reload();
}