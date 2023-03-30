import { PokemonCard } from "./PokemonCard";
import { Col, Row } from "antd";
export const PokemonList = ({ pokemons }) => {
  return (
    <Row gutter={[16, 16]}>
      {pokemons.map((pokemon) => (<Col xs={24} sm={12} md={8} lg={6} xl={4} key={pokemon.name}>
        <PokemonCard id={pokemon.id} name={pokemon.name} types={pokemon.types} index={pokemon.id} favorite={pokemon.favorite} image={pokemon.sprites.front_default} />
      </Col>
      ))}
    </Row>
  )
}