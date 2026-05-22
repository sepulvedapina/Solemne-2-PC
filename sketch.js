function setup() {
  createCanvas(550, 400);

  // Colores generales de la composición
  Red = color(220, 20, 60);
  verde = color(50, 205, 50);
  amarillo = color(255, 215, 0);
  negro = color(0, 0, 0);

  // Color de fondos
  colorfondo = color(255, 105, 180); // Rosado inicial
  colorfondo2 = color(0, 150, 150); // Turquesa secundario
}

function draw() {
  // mezcla de los colores del fondo
  if (mouseY >= 200) {
    background(colorfondo2); // Abajo Turquesa
  } else {
    background(colorfondo); // Arriba Rosado
  }

  // Repetición de botones
  for (let fila = 0; fila < 5; fila++) {
    for (let columna = 0; columna < 3; columna++) {
      // Distancia entre botones
      let x = 20 + columna * 180;
      let y = 30 + fila * 70;

      dibujarBoton(x, y);
    }
  }
}

// Función del boton y caras
function dibujarBoton(pos_x, pos_y) {
  // 1. Dibujar la base del botón (Siempre amarilla)
  fill(amarillo);
  stroke(0);
  strokeWeight(2);
  rect(pos_x, pos_y, 150, 50, 25);

  // Interacción de las caritas
  let cara_x, cara_y;
  let isderecha = mouseX >= 200;
  let isarriba = mouseY < 200;

  // posición del mouse en x para generar que las pupilas se alarguen entre 5 a 12 px.
  let alturaOjos = map(mouseX, 0, width, 5, 12);

  // Posición y color según mouse
  if (isderecha) {
    // Mouse a la derecha = Carita va a la derecha
    cara_x = pos_x + 125;
    cara_y = pos_y + 25;
    if (isarriba) {
      fill(Red); // Arriba-Derecha: carita triste roja
    } else {
      fill(verde); // Abajo-Derecha: carita feliz verde
    }
  } else {
    // Mouse a la izquierda = carita a la izquierda
    cara_x = pos_x + 25;
    cara_y = pos_y + 25;

    if (isarriba) {
      fill(verde); // Arriba-Izquierda: carita verde feliz
    } else {
      fill(Red); // Abajo-Izquierda: carita rojo triste
    }
  }

  // 2. Dibujar la base de la carita (círculo)
  strokeWeight(2);
  stroke(0);
  ellipse(cara_x, cara_y, 40, 40);

  // 3. Dibujar los ojos
  fill(negro);
  noStroke();
  ellipse(cara_x - 5, cara_y - 5, 5, alturaOjos);
  ellipse(cara_x + 5, cara_y - 5, 5, alturaOjos);
  //aqui aplique al final la variable de la altura de los ojos máx

  // 4. Boca feliz o triste
  noFill();
  stroke(0);
  strokeWeight(3);

  // condición de variable para la boca y color
  if ((isderecha && isarriba) || (!isderecha && !isarriba)) {
    // carita triste roja
    arc(cara_x, cara_y + 10, 20, 15, PI, 0);
  } else {
    // carita feliz verde
    arc(cara_x, cara_y + 5, 20, 15, 0, PI);
  }
}
