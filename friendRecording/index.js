yargs = require('yargs');
chalk = require('chalk');
const utile = require('./process.js');

//?CRAEET A ADD COMMAND 
yargs.command({
    command: 'add',
    describe: 'Adding new record',
    builder:{
        name:{
            describe:'note name',
            demandOption:true, // title option to be requires in the command line
            type:'string' //requie a string as title value
        },
        age:{
            describe:'note age',
            demandOption:true,
            type:'string' //require astring as body value
        },

        birthday:{
            describe:'note birthday',
            demandOption:true,
            type:'string' //require astring as body value
        },
    },
        handler(argv){
            //  console.log(chalk.green(chalk.red(argv.title)))
            /* console.log(chalk.green(chalk.green(argv.body)))  */
            utile.addNotes(argv.name,argv.age,argv.birthday);
    
        }
});
//?CREATE A REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'removing new record',
    builder:{
        name:{
            describe:'note name',
            demandOption:true, // title option to be requires in the command line
            type:'string' //requie a string as title value
        }
    },
    handler(argv){
        utile.removeNote(argv.name);
    }
});
//?CRAETE A LIST COMMAND
yargs.command({
    command:'list',
    describe:'listing all notes',
    handler(){
        console.log(chalk.green('Listing all notes ...'));
        utile.listNotes();
    }
});
//?CREATE A READ COMMAND
yargs.command({
    command:'read',
    describe:'reading all notes',
    builder:{
        name:{
            describe:'note name',
            demandOption:true, // title option to be requires in the command line
            type:'string' //requie a string as title value
        }
    },
    handler(argv){
        utile.readNote(argv.name);
    }
});

// console.log(yargs.argv);
yargs.parse() //?to output the parsed results 
