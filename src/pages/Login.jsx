export default function Login() {
    return <form>
        <input placeholder="Correo" type="email"></input>
        <input placeholder="Contraseña" type="password"></input>
        <button className="login" type="submit">Iniciar Sesión</button>
    </form>
}