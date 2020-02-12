//importaciones de librerias y funciones que requerimos 
const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do')
const colors = require('colors/safe');

let comando = argv._[0];

//"menu" utilizando nuestra consola mediante comandos 
switch (comando) {
    case 'crear':
        //creamos nueva tarea y la guardamos en data.json
        let tarea = porHacer.crear(argv.description)
        console.log(tarea);
        break;
    case 'listar':
        //listamos la tarea en consola con diferentes colores usando la libreria colors
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(colors.green('---------Por hacer -------'));
            console.log(tarea.description);
            console.log('Estado: ', tarea.completed);
            console.log(colors.green('--------------------------'));
        }
        console.log('listar');
        break;
    case 'actualizar':
        //actualizamos el flag de la tarea si fue realizada o no 
        let actualizado = porHacer.actualizar(argv.description, argv.completed);
        console.log(argv.completed);
        console.log(actualizado);

        break;
    case 'borrar':
        //borramos la tarea en base a su descripcion 
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
        break;
}