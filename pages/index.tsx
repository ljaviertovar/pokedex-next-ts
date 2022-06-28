import type { GetStaticProps, NextPage } from "next"
import { Grid } from "@nextui-org/react"
import { Layout } from "../components/layouts"

import pokeApi from "../api/pokeApi"

import { ListPokemons, SmallPokemons } from "../ts/interfaces/list-pokemons.interface"
import { CardPokemon } from "../components/pokemon"

interface Props {
	pokemons: SmallPokemons[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout>
			<Grid.Container>
				{pokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await pokeApi.get<ListPokemons>("/pokemon?limit=151")

	const pokemons: SmallPokemons[] = data.results.map((poke, index) => ({
		...poke,
		id: index + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
	}))

	return {
		props: {
			pokemons,
		},
	}
}

export default HomePage
