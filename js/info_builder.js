function buildInfo(id) {
    //playersRef.set ({
    //   info: {
    //      name: 'James Guiden',
    //      number: 'W34039'
    //   }
    //});
    var database = firebase.database();
    var ref = database.ref('info');
    ref.on('value', function(snapshot) {
        snapshot.forEach(function(child) {
            // Getting main modal wrapper
            var modal_content = document.getElementById('modal-content');
            // Creating data-section element
            var data_section = document.createElement('div');
            data_section.classList.add('data-section');
            data_section.classList.add('cleaner');
            // Creating data/data title elements
            var data = document.createElement('span');
            var data_title = document.createElement('span');
            data_title.classList.add('data-title');
            data.classList.add('data');
            // Adding data to elements
            data_title.innerHTML = child.val().title;
            data.innerHTML = child.val().value;
            
            
            // Adding elements to DOM
            data_section.appendChild(data);
            data_section.appendChild(data_title);
            modal_content.appendChild(data_section);
        });
    });
    document.querySelector('#info-modal').style.display = 'flex';
}