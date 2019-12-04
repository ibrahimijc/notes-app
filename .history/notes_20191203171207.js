const fs = require('fs');
const getNotes = function(){
    return "Getting Notes";
}


const AddNotes = function(title,body){

    notes = loadNotes();



    console.log("Adding notes");
}

loadNotes = function(){
    let databuffer = fs.readFileSync("notes.json");
    let notes = databuffer.stringify();
    let result = JSON.parse(notes); 

    return notes;
}

const RemoveNotes = function(title,body){
    console.log("rem notes");
}

module.exports = {
    getNotes : getNotes,
    AddNotes : AddNotes,
    RemoveNotes:RemoveNotes}