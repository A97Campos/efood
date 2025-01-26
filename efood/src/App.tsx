import { GlobalCss } from './globalStyle';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
