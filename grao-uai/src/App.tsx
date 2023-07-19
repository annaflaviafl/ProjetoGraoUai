import FindProductService from './domain/services/findProdutoService';
import { FakeProdutoRepository } from './data/fake/fakeProdutoRepository';
import Home from './view/home/Home';

const App: React.FC = () => {
  const createProductService = () => {
    return new FindProductService(new FakeProdutoRepository());
  };

  return (
    <div>
      <Home service={createProductService()} />
    </div>
  );
}

export default App;
