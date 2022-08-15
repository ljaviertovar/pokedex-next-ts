import { Button, Card, Container, Grid, Text } from "@nextui-org/react"
import confetti from "canvas-confetti"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Image from "next/image"
import { useState } from "react"

import pokeApi from "../../../api/pokeApi"
import { Layout } from "../../../components/layouts"
import { ListPokemons } from "../../../ts/interfaces"
import { Pokemon } from "../../../ts/interfaces/pokemon.interface"
import { localPokemons, getPokemonInfo } from "../../../utils"

interface Props {
	pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(localPokemons.existInFavorites(pokemon.id))

	const onToggleFavorites = () => {
		localPokemons.toggleFavorites(pokemon.id)
		setIsInFavorites(!isInFavorites)

		if (isInFavorites) return

		confetti({
			zIndex: 10,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		})
	}

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: "1.5rem" }}>
						<Card.Body>
							<Card.Image src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} />
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>
							<Button color='gradient' ghost={!isInFavorites} onPress={onToggleFavorites}>
								{isInFavorites ? "In Favorites" : "Save to favorites"}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction='row' display='flex' gap={0}>
								<Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async ctx => {
	const { data } = await pokeApi.get<ListPokemons>("/pokemon?limit=151")
	const pokemonNames: string[] = data.results.map(poke => poke.name)

	return {
		paths: pokemonNames.map(name => ({ params: { name } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string }

	return {
		props: {
			pokemon: await getPokemonInfo(name),
		},
	}
}

export default PokemonByNamePage
