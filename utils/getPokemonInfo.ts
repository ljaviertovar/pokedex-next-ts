import pokeApi from "../api/pokeApi"
import { Pokemon } from "../ts/interfaces"

export const getPokemonInfo = async (idOrName: string) => {
	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${idOrName}`)

	return {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	}
}
