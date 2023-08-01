    let div1 = document.getElementsByTagName ("p")
    console.log (div1[0].innerHTML);
    console.log (div1[1].innerHTML);
    console.log (div1[2].innerHTML);
    console.log (div1[3].innerHTML);
    console.log (div1[4].innerHTML);
    console.log (div1[5].innerHTML);
    //separación
    let boton1 = document.getElementById("turno1");
    boton1.addEventListener('click', () => {
        alert('Agendado, ¡Nos vemos pronto!');
    })
    //separación
    let boton2 = document.getElementById("turno2");
    boton2.onclick = () => alert('Agendado, ¡Nos vemos pronto!');
    //separación
    let boton3 = document.getElementById("turno3")
    boton3.addEventListener('click', () => {
        alert('Agendado, ¡Nos vemos pronto!');
    })
    //separación
    let boton4 = document.getElementById("turno4")
    boton4.onclick = () => alert('Agendado, ¡Nos vemos pronto!')
    //separación
    let boton5 = document.getElementById("turno5")
    boton5.addEventListener('click', () => {
        alert('Agendado, ¡Nos vemos pronto!')
    })
    //separación
    let boton6 = document.getElementById("turno6")
    boton6.onclick = () => alert('Agendado, ¡Nos vemos pronto!')

    //separación
    const TurnoArray = [];
    let botones = document.getElementsByClassName ("dia")
    let turnoagregado = dia.setItem
    for (const boton of botones) {
        boton.onclick = () => {
            console.log(turnoagregado)
        }
    }
    //separación

    class infoturno{
        constructor(dia, horario){
            this.dia = dia;
            this.horario = horario;
        }
    }

    let libreturno = [];
    libreturno.push (new infoturno("Miercoles 19 de Julio", "16:00 Horas"))
    libreturno.push (new infoturno("Miercoles 19 de Julio", "17:00 Horas"))
    libreturno.push (new infoturno("Jueves 20 de Julio", "15:00 Horas"))
    libreturno.push (new infoturno("Jueves 20 de Julio", "19:00 Horas"))
    libreturno.push (new infoturno("Viernes 21 de Julio", "10:00 Horas"))
    libreturno.push (new infoturno("Viernes 21 de Julio", "12:00 Horas"))

    localStorage.setItem ("libreturno", JSON.stringify(libreturno))
    console.log (JSON.parse(localStorage.getItem("libreturno")))



