export class Pelicula {
  constructor(
    public id: string,  // Cambiar de number a string
    public nombre: string,
    public tipo: string,
    public fechaEstreno: Date,
    public actor: string,
    public cantidadPublico: number,
    public foto: string,
    
  ) {}
}
