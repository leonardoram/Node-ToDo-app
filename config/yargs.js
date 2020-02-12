//configuracion de los comandos que queremos crear con yargs 
const description = {
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'marca como completada la tarea'
};

const argv = require('yargs')
    //sintaxix es: command(nombre del comando, descripcion, valores/funciones del comando )
    .command('listar', 'lista las tareas pendientes', {
        description,
        completed
    })
    .command('crear', 'crea una nueva tarea', {
        description,
        completed
    })
    .command('actualizar', 'actualiza el estado de la tarea', {
        description,
        completed
    })
    .command('borrar', 'borrar registro', {
        description,
        completed
    })
    //funcion para mostrar ayuda del comando en caso de que el usuario no conozca las funciones/comandos disponibles 
    .help()
    .argv;



module.exports = {
    argv
}