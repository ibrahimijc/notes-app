const notes = require('./notes')
const yargs = require('yargs');


yargs.command({
    command:"add",
    describe:"Add a new Note",
    builder: { 
        title: {
            describe:"Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe:"Body for the note",
            demandOption: true,
            type:"string"
        }
    },
 handler: function(argv){
     notes.AddNotes(argv.title,argv.body);
 } 
 });


 yargs.command({
    command:"remove",
    describe:"Remove a existing Note",
    builder: { 
        title: {
            describe:"Note Title",
            demandOption: true,
            type: "string"
        }
    },
 handler: function(argv){
     notes.RemoveNotes(argv.title);
 } 
 });


 yargs.command({
     command:"listnotes",
     describe:"List all the notes",

     handler(){
         notes.ListNotes();
     }
 })


 yargs.command({
     command:"read",
     describe:"read a note",
     builder:{
         title:{demandOption:true,
        type:"string",
        describe:"title of the note to read"}
     },
     handler(arg){
         notes.ReadNote(arg.title);

         
     }
 })

 yargs.parse();
