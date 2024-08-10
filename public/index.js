window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.send-button').addEventListener('click', (event) => {
        const newElement = document.createElement('li');
        const lat = parseFloat(document.querySelector('.lat').value);
        const lng = parseFloat(document.querySelector('.lng').value);
        var map = window.map;
        L.marker([lat,lng]).addTo(map);
        newElement.innerHTML = lat + " , " + lng;
        document.querySelector('.point-list').appendChild(newElement);
      });
    
  });