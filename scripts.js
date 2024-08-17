// Handle form submissions for adding minerals
document.getElementById('mineralForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    if (name && quantity && location) {
        const mineralList = document.getElementById('mineralList');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name} - ${quantity} tons - ${location}`));
        
        mineralList.appendChild(li);

        document.getElementById('mineralForm').reset();
    }
});

// Handle form submissions for exchanging minerals
document.getElementById('exchangeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const mineral1 = document.getElementById('mineral1').value;
    const quantity1 = document.getElementById('quantity1').value;
    const mineral2 = document.getElementById('mineral2').value;
    const quantity2 = document.getElementById('quantity2').value;

    if (mineral1 && quantity1 && mineral2 && quantity2) {
        const exchangeList = document.getElementById('exchangeList');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Exchanged ${quantity1} tons of ${mineral1} for ${quantity2} tons of ${mineral2}`));
        
        exchangeList.appendChild(li);

        document.getElementById('exchangeForm').reset();
    }
});
