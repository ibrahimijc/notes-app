const fs = require('fs');
const getNotes = () =>{
    return "Getting Notes";
}


const AddNotes = function(title,body) {


    notes = loadNotes();

    // const dupNotes = notes.filter((note)=>{
    //     if (note.title == title)
    //         return true;
    // })

    //notes.filter searches whole array regardless of dup found or not 

    // if (dupNotes.length === 0){
    // notes.push({"title":title,"body":body})
    // saveNotes(notes);
    // }

    // else {
    //     console.log("Note exist");
    // }

    // better approach
    const dupNote = notes.find((note)=> note.title === title)

    if (!dupNote){
        notes.push({"title":title,"body":body})
        saveNotes(notes);
        }
    
        else {
            console.log("Note exist");
        }
    

}

saveNotes = (notes) =>{
    notes_string = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notes_string);
    console.log("Notes updated")
}

const ReadNotes = function(title){
    notes = loadNotes();

    res_note = notes.find((note)=> note.title === title)
    if (res_note){
        console.log("Title  "+res_note.title );
        console.log("Body : "+res_note.body);
        
    }
    else
    console.log("Note not found");
}

loadNotes = () =>{
    try{
    let databuffer = fs.readFileSync("notes.json","utf8");
    let result = JSON.parse(databuffer); 
    return result;

    }

    catch(e){
        return [];
    }
}

const RemoveNotes = function (title) {

    let notes = loadNotes();

    updatedNotes = notes.filter((note) =>{
        if (note.title === title)
        return false;
        else
        return true;
    })

    if (updatedNotes.length < notes.length){
    saveNotes(updatedNotes);
    console.log("Note Removed")
    }

    else{
        console.log("Notes doesn't exists");
    }
}


ListNotes = function (){
    notes = loadNotes();
    notes.forEach(element => {
        console.log(element.title);
    });
}

module.exports = {
    getNotes : getNotes,
    AddNotes : AddNotes,
    RemoveNotes:RemoveNotes,
    ListNotes : ListNotes,
    ReadNote: ReadNotes}