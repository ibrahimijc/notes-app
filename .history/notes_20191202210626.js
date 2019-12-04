const getNotes = function(){
    return "Getting Notes";
}


const AddNotes = function(title,body){
    console.log("Adding notes");
}

const RemoveNotes = function(title,body){
    console.log("rem notes");
}

module.exports = {
    getNotes : getNotes,
    AddNotes : AddNotes,
    RemoveNotes:RemoveNotes}