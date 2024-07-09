function createNote() {
    var noteText = document.getElementById('note').value;
    if (noteText.trim() === "") {
        alert("Please enter a note.");
        return;
    }
    var noteItem = document.createElement('div');
    noteItem.className = 'note-item';
    noteItem.textContent = noteText;

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'del';
    deleteBtn.onclick = function() {
        noteItem.remove();
    };

    noteItem.appendChild(deleteBtn);
    document.getElementById('notesList').appendChild(noteItem);
    document.getElementById('note').value = "";
}