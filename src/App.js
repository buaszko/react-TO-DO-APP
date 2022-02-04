import Hero from './components/SearchForm/SearchForm';
import SearchForm from './components/Hero/Hero';
import List from './components/List/List.js';
import Container from './components/Container/Container'

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;