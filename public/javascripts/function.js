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


function showEdit(bool) {
    document.getElementById('review').style.display = (bool) ? 'none' : 'block';
    document.getElementById('edit').style.display = (bool) ? 'block' : 'none';
}



function updateReview(id) {
    var Review = {
        name: document.getElementById('name').value,
        placeType: document.getElementById('placeType').value,
        stars: Number.parseInt(document.getElementById('stars').value)
    };

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(id) {
         if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                window.location.reload();
            }
         }
    }
    httpRequest.open('PUT', '/reviews/' + id, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify(Review));
}