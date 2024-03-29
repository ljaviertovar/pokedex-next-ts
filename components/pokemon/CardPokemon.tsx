import { FC } from "react"
import { Grid, Card, Row, Text } from "@nextui-org/react"

import { useRouter } from "next/router"

import { SmallPokemons } from "../../ts/interfaces/list-pokemons.interface"

interface Props {
	pokemon: SmallPokemons
}

const CardPokemon: FC<Props> = ({ pokemon }) => {
	const router = useRouter()

	const onClick = () => {
		router.push(`/pokemon/name/${pokemon.name}`)
	}

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} css={{ padding: "1rem" }}>
			<Card isHoverable isPressable onClick={onClick}>
				<Card.Body>
					<Card.Image src={pokemon.img} width='100%' height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify='space-between'>
						<Text transform='capitalize'>{pokemon.name}</Text>
						<Text>#{pokemon.id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	)
}

export default CardPokemon
