const libros = [
    { id: 1, titulo: "Clean Code", categoria: "Programacion", anio: 2008, prestado: false },
    { id: 2, titulo: "Design Patterns", categoria: "Programacion", anio: 1994, prestado: true },
    { id: 3, titulo: "Refactoring", categoria: "Programacion", anio: 1999, prestado: false },
    { id: 4, titulo: "Calculus", categoria: "Matematicas", anio: 2010, prestado: false }
];

// IMPERATIVO
function filtrarLibrosImperativo(libros, categoria) {
    let resultado = [];

    for (const libro of libros) {
        if (libro.categoria === categoria && libro.prestado === false) {
            resultado.push(libro);
        }
    }

    for (let i = 0; i < resultado.length - 1; i++) {
        for (let j = 0; j < resultado.length - 1; j++) {
            if (resultado[j].anio > resultado[j + 1].anio) {
                let temp = resultado[j];
                resultado[j] = resultado[j + 1];
                resultado[j + 1] = temp;
            }
        }
    }

    return resultado;
}

// DECLARATIVO
function filtrarLibrosDeclarativo(libros, categoria) {
    return libros
        .filter(libro => libro.categoria === categoria && !libro.prestado)
        .sort((a, b) => a.anio - b.anio);
}

// Salida
console.log(filtrarLibrosImperativo(libros, "Programacion"));
console.log(filtrarLibrosDeclarativo(libros, "Programacion"));
