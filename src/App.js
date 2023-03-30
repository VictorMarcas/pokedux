import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Searcher } from './components/Searcher';
import { Col, Row, Space, Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import { useEffect } from 'react';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';
function App() {

  const pokemons = useSelector(state => state.data.pokemonSearch, shallowEqual);
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])
  return (
    <div className='app'>
      <Space
        direction="vertical"
        size="large"
        style={{
          display: 'flex',
        }}
      >
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
      {loading ? (<Row>
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      </Row>) : <PokemonList pokemons={pokemons} />
      }
      </Space>
    </div>
  );
}


export default App;
