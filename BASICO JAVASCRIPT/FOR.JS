var estudiantes = ["maria", "diego", "paula"]

function saludarEstudiantes(estudiente){
     console.log(`hola, ${estiadiente}`);
}


for(var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}







var estudiantes = ["maria", "diego", "paula"]

function saludarEstudiantes(estudiente){
    console.log(`hola, ${estiadiente}`);
}

for(var estudiante of estudiantes){
     saludarEstudientes(estudiante);
}