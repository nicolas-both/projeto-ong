import Cabecalho from '../../cabecalho/index.jsx';
import Card from '../../card/index.jsx';
import Noticias from '../../noticias/index.jsx'
import './pets.css'

const Pets = () => {
  return (
    <section className='pets'>
      <Cabecalho />
      <h2>Pets</h2>
      <h1 className='titulo pet'>Pets para adoção</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="paginas-pet">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
      <a href="#"><i className="bi bi-chevron-right" /></a>
      </div>
      <Noticias />
    </section>
  )
}

export default Pets