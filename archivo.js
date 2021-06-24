var Participantes = []
var pregunta = false
  /*preguntas*/
do{
  var nombre_participante = prompt("introdusca nombre de participante","")
  console.log(nombre_participante)

  var edad_participante= prompt("introdusca la edad del participante","")
  console.log(edad_participante)

  var sexo_participante =prompt("introdusca el sexo del participante, M (masculino) o  F (femenino) ","").toUpperCase()
  console.log(sexo_participante)

  var puntaje_participante = prompt("puntaje final del participante","")
  console.log(puntaje_participante)


  pregunta = confirm ("agregar otro participante")

        var NumeroParticipante = {
      nombre: nombre_participante,
      edad: parseInt(edad_participante),
      sexo:sexo_participante,
      puntaje: parseInt(puntaje_participante)
  }
  Jugadores.push(Participante)
}while(pregunta)

console.log(Participantes)


/*mejor puntaje*/

var puntaje_mas_alto = 0 


for(var i = 0; i< Participantes.length; i++ ){
  if( puntaje_mas_alto< Participantes[i].puntaje){
    puntaje_mas_alto= Participantes[i].puntaje
  }
}
var ganadores = []

for(var i = 0; i< Participantes.length; i++ ){
  if( puntaje_mas_alto==Participantes[i].puntaje){
    puntaje_mas_alto.push(Participantes[i])
  }
}

for(var i = 0; i< ganadores.length; i++){
  console.log("Los mejores jugadores fueron " + ganadores[i].nombre)
}

/*peor puntaje*/
var menor_puntaje = 10 


for(var i = 0; i< Participantes.length; i++ ){
  if(menor_puntaje> Participantes[i].puntaje){
     menor_puntaje= Participantes[i].puntaje
  }
}
var peores_puntajes = []

for(var i = 0; i< Participantes.length; i++ ){
  if(menor_puntaje==Participantes[i].puntaje){
    peores_puntajes.push(Participantes[i])
  }
}

for(var i = 0; i< peores_puntajes.length; i++ ){
  console.log(" Los peores jugadores fueron " + peores_puntajes[i].nombre)
}

/*sexo */

var hombres= []
var mujeres=[]

var M = "M"

for(var i = 0; i< Participantes.length; i++ ){
  if( M ==Participantes[i].sexo){
    hombres.push(Participantes[i])
  }else{
    mujeres.push(Participantes[i])
  }
}
  console.log("hay " + hombres.length + " jugador/es hombr/es")
  console.log("hay " + mujeres.length + " jugador/as mujer/es")

/* Participantes Mayores */

var persona_mayor=0

for(var i = 0; i<Participantes.length; i++ ){
    if(persona_mayor< Participantes[i].edad){
       persona_mayor= Participantes[i].edad
    }
  }
  var personas_mayores = []

  for(var i = 0; i< Participantes.length; i++ ){
    if(persona_mayor==Participantes[i].edad){
      personas_mayores.push(Participantes[i])
    }
  }

  for(var i = 0; i< mejores_puntajes.length; i++ ){
    console.log(" La/s person/as mayor/es es/son " + personas_mayores[i].nombre)
  }

  /* Participantes Menores */

var menores=17
var personas_menores = []

for(var i = 0; i< Participantes.length; i++ ){
    if(menores >= Participantes[i].edad){
    personas_menores.push(Participantes[i])
    }
  }

console.log("Hay " + personas_menores.length + " menor/es participando")