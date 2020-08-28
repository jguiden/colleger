function openDaySelect() { document.querySelector('#classes-modal').style.display = 'flex'; }
function dayBuilder(id) {
    var class_content = document.getElementById('class-content');
    var day_title = document.getElementById("day-title");
    var database = firebase.database();
    switch(id) {
        case "mon":
            day_title.innerHTML = "Monday";
            break;
        case "tue":
            day_title.innerHTML = "Tuesday";
            break;
        case "wed":
            day_title.innerHTML = "Wednesday";
            break;
        case "thu":
            day_title.innerHTML = "Thursday";
            break;
        case "fri":
            day_title.innerHTML = "Friday";
            break;
        default:
            break;
    }
    
    var ref = database.ref('class/' + id);
    ref.on('value', function(snapshot) {
        snapshot.forEach(function(child) {
            var class_section = document.createElement('div');
            class_section.classList.add('class');
            class_section.classList.add('cleaner');
            
            var left = document.createElement('div');
            var right = document.createElement('div');
            left.classList.add('cl-side');
            right.classList.add('cl-side');
            
            var class_name = document.createElement('p');
            var class_time = document.createElement('p');
            var class_building = document.createElement('p');
            var class_room = document.createElement('p');
            class_name.classList.add('cl-name');
            class_name.classList.add('cl-left');
            class_name.classList.add('cl-obj');
            class_time.classList.add('cl-left');
            class_time.classList.add('cl-obj');
            class_building.classList.add('cl-right');
            class_building.classList.add('cl-obj');
            class_room.classList.add('cl-right');
            class_room.classList.add('cl-obj');
            
            child.forEach(function(cl_val) {
                switch(cl_val.key) {
                    case "name":
                        class_name.innerHTML = cl_val.val();
                        break;
                    case "time":
                        class_time.innerHTML = cl_val.val();
                        break;
                    case "building":
                        class_building.innerHTML = cl_val.val();
                        break;
                    case "room":
                        class_room.innerHTML = cl_val.val();
                        break;
                    default:
                        break;
                }
                
                
            });
            
            left.appendChild(class_name);
            left.appendChild(class_time);
            right.appendChild(class_building);
            right.appendChild(class_room);
            class_section.appendChild(left);
            class_section.appendChild(right);
            class_content.appendChild(class_section);
        });
    });
    
    document.querySelector('#day-modal').style.display = 'flex';
}