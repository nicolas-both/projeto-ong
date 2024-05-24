import './dados.css'

function Dados() {
  return (
    <section className='dados'>
      <div className='resgatados'> 
        <h1>400+</h1>
        <h2>Animais Resgatados</h2>
        <p>Nós ajudamos a resgatar mais de 400 animais.</p>
      </div>

      <div className='adocoes'>
        <h1>100+</h1>
        <h2>Adoções</h2>
        <p>Facilitamos a adoção de mais de 100 animais em <br />2024.</p>
      </div>

      <div className='racao'>
        <h1>2000kg</h1>
        <h2>Raçãos para animais</h2>
        <p>2000kg de rações arrecadadas para alimentação <br /> dos animais em diferentes ONG’s do Brasil.</p>
      </div>
    </section>
  )
}

export default Dados