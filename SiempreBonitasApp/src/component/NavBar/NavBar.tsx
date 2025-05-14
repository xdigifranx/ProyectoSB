import "./NavBar.css";
const NavBar = () => {


    return (
        <nav className="nav" >
            <ul className="flex">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Agenda</a></li>
            </ul>
        </nav>
    );
};


export default NavBar;