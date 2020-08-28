function openHomework() {
    
    var database = firebase.database();
    var ref = database.ref('hw');
    ref.on("value", function(snapshot) {
        
        snapshot.forEach(function(child){
            var hw_section = document.createElement("div");
            hw_section.classList.add("hw-section");
            var left = document.createElement("div");
            left.classList.add("hw-side");
            var right = document.createElement("div");
            right.classList.add("hw-side");
            right.classList.add("R");
            
            var del_btn = document.createElement("div");
            del_btn.innerHTML = "Done";
            del_btn.classList.add("hw-del-btn");
            del_btn.id = child.key;
            del_btn.setAttribute("onclick", "removeHomework(this.id);");
            right.appendChild(del_btn);
            
            var class_title = document.createElement("p");
            class_title.classList.add("hw-class-title");
            class_title.innerHTML = child.val().class;
            left.appendChild(class_title);
            
            var due_date = document.createElement("p");
            due_date.classList.add("hw-due");
            due_date.innerHTML = child.val().due;
            left.appendChild(due_date);
            
            var hw_desc_section = document.createElement("div");
            hw_desc_section.classList.add("hw-desc");
            var hw_desc_title = document.createElement("p");
            hw_desc_title.classList.add("hw-desc-title");
            hw_desc_title.innerHTML = "description";
            hw_desc_section.appendChild(hw_desc_title);
            var hw_desc_content = document.createElement("div");
            hw_desc_content.classList.add("hw-desc-content");
            hw_desc_content.innerHTML = child.val().desc;
            hw_desc_section.appendChild(hw_desc_content);
            
            hw_section.classList.add("cleaner");
            
            hw_section.appendChild(left);
            hw_section.appendChild(right);
            hw_section.appendChild(hw_desc_section);
            document.getElementById("hw-content").appendChild(hw_section);
        });
    });
    
    document.querySelector('#hw-modal').style.display = 'flex';
}

function addHomework() {
    document.getElementById("add-form").reset();
    document.querySelector('#add-modal').style.display = 'flex';
}
function addNewHomework() {
    var hw_id;
    var database = firebase.database();
    var ref = database.ref('hw');
    ref.on("value", function(id){
        hw_id = id.numChildren();
    });
    ref.push({
        class: document.getElementById("add-class").value,
        due: document.getElementById("add-due").value,
        desc: document.getElementById("add-desc").value
    });
    closeModal("hw-close-modal");
    closeAddModal();
    openHomework();
}
function removeHomework(id) {
    if (confirm("Are you sure you want to remove this homework section?")) {
        var database = firebase.database();
        var ref = database.ref('hw');
        ref.child(id).remove();
        closeModal("hw-close-modal");
        openHomework();
    } else {}
    
}