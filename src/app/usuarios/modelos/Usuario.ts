export interface Usuario {
    idUsuario?: number | string,
    email: string,
    contrasena: string,
    token?: string
}