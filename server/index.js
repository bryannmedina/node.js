const express = require("express");
const app =  expresss();
const mysql = require("mysql");
const cors = require("cors")

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empleados_crud"
})

app.post ("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const edad = req.body.edad; 
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;<

    db.query('INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES (?,?,?,?,?)', [nombre,edad,pais,cargo,anios ],
        (err,result)=>{
            if(err){
                console-log(arr);
            }else{
                res.send("EMpleado registrado con exito!");
            }
        }
    );
})

app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001")
})