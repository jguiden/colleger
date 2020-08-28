function closeModal(id) {
    if (id == "info-close-modal") { document.querySelector('#info-modal').style.display = 'none'; }
    else if (id == "class-close-modal") { document.querySelector('#classes-modal').style.display = 'none'; }
    else if (id == "day-close-modal") { document.querySelector('#day-modal').style.display = 'none'; }
    else if (id == "hw-close-modal") { document.querySelector('#hw-modal').style.display = 'none'; }
    else if (id == "add-close-modal") { document.querySelector('#add-modal').style.display = 'none'; }
    
    if(document.getElementsByClassName("cleaner")) {
        var cleaners = document.getElementsByClassName("cleaner");
        while (cleaners.length > 0) {
            cleaners[0].parentNode.removeChild(cleaners[0]);
        }
    }
}
function closeAddModal() { document.querySelector('#add-modal').style.display = 'none'; }
function openModal(id) {
    switch(id) {
        case "info":
            buildInfo(id);
            break;
        case "class":
            openDaySelect();
            break;
        default:
            break;
    }
}
