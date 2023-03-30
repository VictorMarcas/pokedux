import { Input } from 'antd';
import { useDispatch} from 'react-redux';
import { searchPokemons } from '../slices/dataSlice';

export const Searcher = () => {
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    const value = event.target.value.trim()
    dispatch(searchPokemons(value))
  }
  return (
    <Input.Search placeholder="buscar" onChange={handleSearch} />
  )
}