const parentDiv = document.getElementById('parentDiv');
const childButton = document.getElementById('childButton');

parentDiv.addEventListener('click', function() {
    alert('Div clicked');
});

childButton.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Button clicked');
});
