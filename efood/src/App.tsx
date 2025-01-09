import { GlobalCss } from './globalStyle';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { Cart } from './components/Cart';
import { useState } from 'react';
import { Cardapios } from './pages/Home';

function App() {
  const [cardapio, setCardapio] = useState<Cardapios>()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
