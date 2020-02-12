//importamos la libreria del FileSystem 
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    //utilizamos la funcion stringify de JS para parsear un arreglo a un objeto de tipo JSON 
    let data = JSON.stringify(listadoPorHacer);

    //guardamos informacion en un archivo de tipo JSON utilizando el FileSystem 
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo guardar la informacion');
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }

}
const crear = (description) => {
    //cargamos primero nuestro archivo json para agregar las tareas 
    cargarDB();

    //creamos un objeto con la informacion que queremos guardar en nuestro "base de datos" guiño guiño ;)
    let porHacer = {
        description,
        completed: false,
    };
    // //hacemos un push de nuestro objeto en el arreglo antes creado para guardarlo 
    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (description, completed = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.description === description)
    if (index >= 0) {
        listadoPorHacer[index].completed = completed;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (description) => {

    cargarDB();
    //utilizamos una funcion de javascript para filtrar nuestro arreglo y creamos uno nuevo solo con 
    //los elementos filtrados 
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.description !== description);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

//exportamos la funcion crear para cualquier otro archivo que la requiera 
module.exports = { crear, getListado, actualizar, borrar }