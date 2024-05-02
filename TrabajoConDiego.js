//Autores: Diego González Mora, grupo 566. Santiago Pérez Migues grupo 563.

//Objetos "Alumnos" para los datos de cada uno de los alumnos de la cursada.
const Alumno1 = {nombre:"Daniel",apellido:"Gonzalez",departamento:"Rocha",puntajeFundamentos:70,puntajeImperativa:50,puntajeObjetos:90,evidenciaFundamentos:true,evidenciaImperativa:false,evidenciaObjetos:true,puntajeIngles:30,leccionesCT:90};
const Alumno2 = {nombre:"Juan",apellido:"Perez",departamento:"San Jose",puntajeFundamentos:60,puntajeImperativa:80,puntajeObjetos:70,evidenciaFundamentos:false,evidenciaImperativa:true,evidenciaObjetos:true,puntajeIngles:90,leccionesCT:80};
const Alumno3 = {nombre:"Valentina",apellido:"Gutierrez",departamento:"Salto",puntajeFundamentos:80,puntajeImperativa:90,puntajeObjetos:90,evidenciaFundamentos:true,evidenciaImperativa:true,evidenciaObjetos:true,puntajeIngles:50,leccionesCT:100};
const Alumno4 = {nombre:"Pepe",apellido:"Alonzo",departamento:"Rivera",puntajeFundamentos:50,puntajeImperativa:40,puntajeObjetos:55,evidenciaFundamentos:false,evidenciaImperativa:true,evidenciaObjetos:false,puntajeIngles:35,leccionesCT:100};
const Alumno5 = {nombre:"Elchacho",apellido:"Ramos",departamento:"Florida",puntajeFundamentos:75,puntajeImperativa:70,puntajeObjetos:67,evidenciaFundamentos:true,evidenciaImperativa:true,evidenciaObjetos:false,puntajeIngles:42,leccionesCT:90};
const Alumno6 = {nombre:"Richard",apellido:"Parker",departamento:"Colonia",puntajeFundamentos:64,puntajeImperativa:77,puntajeObjetos:87,evidenciaFundamentos:false,evidenciaImperativa:false,evidenciaObjetos:true,puntajeIngles:80,leccionesCT:90};
const Alumno7 = {nombre:"Jason",apellido:"Derulo",departamento:"Artigas",puntajeFundamentos:90,puntajeImperativa:90,puntajeObjetos:87,evidenciaFundamentos:true,evidenciaImperativa:true,evidenciaObjetos:true,puntajeIngles:90,leccionesCT:100};
const Alumno8 = {nombre:"Sandra",apellido:"Ramirez",departamento:"Fray Bentos",puntajeFundamentos:50,puntajeImperativa:40,puntajeObjetos:50,evidenciaFundamentos:true,evidenciaImperativa:true,evidenciaObjetos:false,puntajeIngles:50,leccionesCT:90};

//Función que retorna mensajes de aprobación (o no) de las materias.
function obtenerAprobacionMsg(puntaje,limite){
    let mensaje = "";
    if(puntaje>limite){
        mensaje=" ok";
    } else {
        mensaje=" reprueba";
    }
    return mensaje;
}

//Función que calcula la calificación del alumno en Técnica fase 1.
function promedioTecnica(alumno){
    return (alumno.puntajeFundamentos*0.30+alumno.puntajeImperativa*0.50+alumno.puntajeObjetos*0.20);
}

//Función que verifica cuantas evidencias subió el alumno.
function promedioEvidencias(alumno){
    return (alumno.evidenciaFundamentos + alumno.evidenciaImperativa + alumno.evidenciaObjetos);
}

//Función que devuelve si el alumno aprueba el curso, debe rendir examen o reprueba fase 1.
function apruebaCurso(alumno){
    if (alumno.puntajeIngles>49 && alumno.leccionesCT>99 && promedioTecnica(alumno)>59 && promedioEvidencias(alumno)>2){
        console.log("En conclusión, tu status final es aprobado con " + promedioTecnica(alumno));
    } else if (promedioTecnica(alumno)>59 && promedioEvidencias(alumno)<=2){
        console.log("Debe rendir examen");
    } else if (promedioEvidencias(alumno)>2 && (promedioTecnica(alumno)>49 && promedioTecnica(alumno)<59.99)){
        console.log("Puede rendir examen");
    } else{
        console.log("Reprueba Fase 1");
    }

}

//Función principal del algoritmo.
function Jap2023 (alumno){
    console.log("Hola " + alumno.nombre + "!! el detalle de tu status final es:");
    console.log("En Inglés - " + alumno.puntajeIngles + " puntos" + obtenerAprobacionMsg(alumno.puntajeIngles,49));
    console.log("En CT - "+ alumno.leccionesCT + " puntos" + obtenerAprobacionMsg(alumno.leccionesCT,99));
    console.log("En Técnica - " + promedioTecnica(alumno) + " puntos" + obtenerAprobacionMsg(promedioTecnica(alumno),59));
    console.log("Evidencias entregadas " + promedioEvidencias(alumno) + obtenerAprobacionMsg(promedioEvidencias(alumno),2));
    apruebaCurso(alumno);

}

//Prueba en consola.
Jap2023(Alumno5)