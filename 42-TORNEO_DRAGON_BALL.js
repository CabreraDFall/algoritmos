class Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ataque = ataque;
    this.defensa = defensa;
    this.salud = 100;
    this.eliminado = false; // Añadir propiedad para controlar si está eliminado
  }

  calcularDanio(oponente) {
    const danioBase = this.ataque - oponente.defensa;
    return Math.max(danioBase, 0); // Aseguramos que el daño no sea negativo
  }

  atacar(oponente) {
    // 20% de probabilidad de esquivar
    if (Math.random() < 0.2) {
      console.log(
        `${oponente.nombre} ha esquivado el ataque de ${this.nombre}!`
      );
      return;
    }

    let danio = this.calcularDanio(oponente);

    // Si la defensa es mayor que el ataque, el oponente recibe solo el 10% del daño
    if (oponente.defensa > this.ataque) {
      danio *= 0.1;
      console.log(
        `${oponente.nombre} ha bloqueado el ataque, solo recibe ${danio.toFixed(
          2
        )} de daño!`
      );
    } else {
      console.log(
        `${this.nombre} ataca a ${oponente.nombre} y causa ${danio.toFixed(
          2
        )} de daño.`
      );
    }

    oponente.salud -= danio;
    console.log(
      `${oponente.nombre} ahora tiene ${oponente.salud.toFixed(2)} de salud.`
    );

    // Verificar si el oponente ha sido eliminado
    if (oponente.salud <= 0) {
      oponente.eliminado = true; // Marcar como eliminado
      console.log(`¡${oponente.nombre} ha sido eliminado!`);
    }
  }
}

class Torneo {
  constructor(luchadores) {
    // Verificamos si la cantidad de luchadores es potencia de 2
    if ((luchadores.length & (luchadores.length - 1)) !== 0) {
      throw new Error("El número de luchadores debe ser una potencia de 2.");
    }
    this.luchadores = luchadores;
  }

  crearParejas() {
    const luchadoresRestantes = this.luchadores.filter(
      (luchador) => !luchador.eliminado
    ); // Filtrar luchadores eliminados
    const parejas = [];

    while (luchadoresRestantes.length > 1) {
      const luchador1 = luchadoresRestantes.splice(
        Math.floor(Math.random() * luchadoresRestantes.length),
        1
      )[0];
      const luchador2 = luchadoresRestantes.splice(
        Math.floor(Math.random() * luchadoresRestantes.length),
        1
      )[0];
      parejas.push([luchador1, luchador2]);
    }

    return parejas;
  }

  batalla(luchador1, luchador2) {
    console.log(
      `\n¡Comienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`
    );

    // Determinar quién ataca primero
    let atacante =
      luchador1.velocidad >= luchador2.velocidad ? luchador1 : luchador2;
    let defensor = atacante === luchador1 ? luchador2 : luchador1;

    // Continuar la batalla hasta que uno de los luchadores se quede sin salud
    while (luchador1.salud > 0 && luchador2.salud > 0) {
      atacante.atacar(defensor);
      // Cambiar de atacante y defensor solo si el defensor sigue vivo
      if (defensor.salud > 0) {
        [atacante, defensor] = [defensor, atacante];
      }
    }

    // Determinar el ganador y limpiar la salud del perdedor
    const ganador = luchador1.salud > 0 ? luchador1 : luchador2;
    console.log(`¡${ganador.nombre} ha ganado la batalla!`);
    return ganador;
  }

  iniciar() {
    let rondaLuchadores = [...this.luchadores];

    while (rondaLuchadores.length > 1) {
      console.log(`\nRonda con ${rondaLuchadores.length} luchadores.`);
      const parejas = this.crearParejas();
      rondaLuchadores = [];

      for (const [luchador1, luchador2] of parejas) {
        const ganador = this.batalla(luchador1, luchador2);
        rondaLuchadores.push(ganador);
      }
    }

    console.log(`\n¡${rondaLuchadores[0].nombre} es el campeón del torneo!`);
  }
}

// Crear luchadores con atributos ajustados
const luchadores = [
  new Luchador("Goku", 90, 80, 70),
  new Luchador("Vegeta", 85, 85, 60),
  new Luchador("Gohan", 80, 70, 75),
  new Luchador("Piccolo", 75, 65, 80),
  new Luchador("Krillin", 65, 55, 50),
  new Luchador("Trunks", 80, 75, 65),
  new Luchador("Bulma", 55, 20, 30),
  new Luchador("Cell", 88, 90, 85),
];

// Iniciar el torneo
const torneo = new Torneo(luchadores);
torneo.iniciar();
