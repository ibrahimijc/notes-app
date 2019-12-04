const fs = require('fs');
const getNotes = function(){
    return "Getting Notes";
}


const AddNotes = function(title,body){

    notes = loadNotes();
    console.log("Notes returned "+notes);
    notes.push({"title":title,"body":body})

    saveNotes(notes);
}

saveNotes = function(notes){
    notes_string = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes_string);
    console.log("added note")
}


loadNotes = function(){
    try{
    let databuffer = fs.readFileSync("notes.json");
    let notes = databuffer.stringify();
    let result = JSON.parse(notes); 
    return notes;

    }

    catch(e){
        return [];
    }
}

const RemoveNotes = function(title,body){
    console.log("rem notes");
}

module.exports = {
    getNotes : getNotes,
    AddNotes : AddNotes,
    RemoveNotes:RemoveNotes}