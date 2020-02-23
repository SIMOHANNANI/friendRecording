//! FUNCTION TO LOAD THE CONTENT OF THE FILE 
const fs = require('fs');
const data = require('./JsonFile/data.json')
    const addNotes = (name,age,birthday)=>{
        const notesExist = loadNotes()
        const duplicateItem = notesExist.find((note)=> note.name === name);
        if(!duplicateItem){
            notesExist.push({
                name: name,
                age: age,
                birthday:birthday
            })
            console.log(chalk.green.bold('Item added successfully ! !'));;
        }
        else{
            console.log(chalk.green.bold('This item has been added !'));
        }
        saveNotes(notesExist);
}
const saveNotes = (notesExist)=>{
    const dataJson = JSON.stringify(notesExist);
    fs.writeFileSync('./JsonFile/data.json',dataJson);
}
const loadNotes = ()=>{
    try{
        binaryVersion = fs.readFileSync('./JsonFile/data.json');
        stringVersion = binaryVersion.toString();
        dataParsed = JSON.parse(stringVersion);
        return dataParsed;
    }
    catch(err){
        return [];
    }
}
const removeNote = (name)=>{
    const notesExist = loadNotes();
    const KeepItem = notesExist.filter((note)=>note.name !== name);
    if(KeepItem.length < notesExist.length){
        console.log(chalk.bold.red('Item removed successfully !'));
        saveNotes(KeepItem);
    }
    else{
        console.log(chalk.bold.red('Item not found !'));
        console.log(KeepItem);
    }
}
const listNotes = ()=>{
    const notes = loadNotes();
    notes.forEach((note)=>console.log(note.name))
}
const readNote = (name)=>{
    const items = loadNotes();
    const searchItems = items.find((item)=>item.name === name);
    if(!searchItems){
        console.log(chalk.red.bold('Item not found'));
    }
    else{
        console.log(searchItems);
    }
}
module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}





