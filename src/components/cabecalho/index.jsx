import './cabecalho.css'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav className="nav-cabecalho">
      <div className="logo">
        <a href="#">PetRescue</a> 
        <a href="#"><img src="src\assets\imagens\pet.png"/></a>
      </div>
        <ul className="navegacao">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pets</a></li>
          <li><a href="#">Ajude</a></li>
          <li><a href="#">Sobre nós</a></li>
        </ul>
      </nav>
    </header>
  )
} 
export default Cabecalho