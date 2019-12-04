const fs = require('fs');
const getNotes = function(){
    return "Getting Notes";
}


const AddNotes = function(title,body){


    notes = loadNotes();

    const dupNotes = notes.filter(function(note){
        if (note.title == title)
            return true;
    })


    if (dupNotes.length === 0){
    notes.push({"title":title,"body":body})
    saveNotes(notes);
    }

    else {
        console.log("Note exist");
    }

}

saveNotes = function(notes){
    notes_string = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes_string);
    console.log("added note")
}


loadNotes = function(){
    try{
    let databuffer = fs.readFileSync("notes.json","utf8");
    let result = JSON.parse(databuffer); 
    return result;

    }

    catch(e){
        return [];
    }
}

const RemoveNotes = function(title,body){

    let notes = loadNotes();

    updatedNotes = notes.filter(function(note){
        if (note.title===title)
        return false;
    })

    saveNotes(updatedNotes);

}

module.exports = {
    getNotes : getNotes,
    AddNotes : AddNotes,
    RemoveNotes:RemoveNotes}