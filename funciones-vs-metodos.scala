case class Libro(
  id: Int,
  titulo: String,
  autor: String,
  categoria: String
)

// FORMA 1: Como método de una clase
class Biblioteca(libros: List[Libro]) {
  def buscarPorAutor(autor: String): List[Libro] = {
    libros.filter(libro => libro.autor == autor)
  }
}

// FORMA 2: Como función pura
object FuncionesBiblioteca {
  def buscarPorAutor(libros: List[Libro], autor: String): List[Libro] = {
    libros.filter(libro => libro.autor == autor)
  }
}

// Ejemplos de uso:
val libros = List(
  Libro(1, "Clean Code", "Robert Martin", "Programacion"),
  Libro(2, "Refactoring", "Martin Fowler", "Programacion")
)

// Uso con método:
val biblioteca = new Biblioteca(libros)
val resultado1 = biblioteca.buscarPorAutor("Robert Martin")

// Uso con función:
val resultado2 = FuncionesBiblioteca.buscarPorAutor(libros, "Robert Martin")


/*
¿Cuál es la diferencia conceptual?
→ El método pertenece a una clase y usa su estado interno,
  mientras que la función pura recibe los datos como parámetros.

¿Cuándo usar métodos vs funciones puras?
→ Métodos cuando se trabaja con objetos y estado encapsulado.
→ Funciones puras cuando se prioriza programación funcional e inmutabilidad.

¿Cuál facilita más el testing y por qué?
→ La función pura, porque no depende de estado interno y siempre
  produce el mismo resultado con los mismos parámetros.
*/
