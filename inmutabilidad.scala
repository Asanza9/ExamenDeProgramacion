case class Prestamo(
  id: Int,
  usuarioId: Int,
  libroId: Int,
  activo: Boolean,
  fechaPrestamo: String
)

/**
 * Devuelve un libro (marca el préstamo como inactivo)
 * SIN mutar la lista original de préstamos
 */
def devolverLibro(prestamos: List[Prestamo], prestamoId: Int): List[Prestamo] = {
  prestamos.map(prestamo =>
    if (prestamo.id == prestamoId)
      prestamo.copy(activo = false)
    else
      prestamo
  )
}

// Ejemplo de uso:
val prestamos = List(
  Prestamo(1, 101, 201, true, "2024-01-15"),
  Prestamo(2, 102, 202, true, "2024-01-20")
)

val prestamosActualizados = devolverLibro(prestamos, 1)
