import { Card } from "antd"
import { useDispatch } from "react-redux"
import Meta from 'antd/lib/card/Meta'
import { StarButton } from "./StarButton"
import { setFavorite } from "../slices/dataSlice"

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesList = types.map((type) => type.type.name).join(', ')
  const handleOnFavorite = () => { dispatch(setFavorite({pokemonId: id})) }
  return (
    <Card title={name} cover={<img src={image} alt={name} />} extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}>
      <Meta description={typesList} />
    </Card>
  )
}