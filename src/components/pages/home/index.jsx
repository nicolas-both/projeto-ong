// import Institucional from 'src/components/institucional'
// import Dados from './components/dados/index.jsx'
// import Cabecalho from "./components/cabecalho/index.jsx"
import Cabecalho from '../../cabecalho/index.jsx';
import Institucional from '../../institucional/index.jsx';
import Dados from '../../dados/index.jsx';
import Noticias from '../../noticias/index.jsx';
// import Noticias from "./components/noticias/index.jsx"

const Home = () => {
  return (
    <>
    <Cabecalho />
    <Institucional />
    <Dados />
    <Noticias />
    </>
  )
}

export default Home