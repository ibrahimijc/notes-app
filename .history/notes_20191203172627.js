const fs = require('fs');
const getNotes = function(){
    return "Getting Notes";
}


const AddNotes = function(title,body){

    notes = loadNotes();
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
    let databuffer = fs.readFileSync("notes.json","utf8");
    //let notes = databuffer.stringify();
    let result = JSON.parse(databuffer); 
    return result;

    }

    catch(e){
        console.log(e.message);
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