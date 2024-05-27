import './card.css'

const Card = () => {
  return (
          <div className="card">
            <div className="foto-pet">
              <img src="src\assets\imagens\pet.png" />
            </div>
            <div className="informacoes-pet">
              <h1>Grêmio</h1>
              <p>Raça: Cachorro (Vira-lata)</p>
              <p>Idade: 3 anos</p>
            </div>
          </div>   
  )
}

export default Card