import { FC } from "react"
import { useRouter } from "next/router"
import { Card, Grid } from "@nextui-org/react"

interface Props {
	pokemonId: number
}

const CardFavorite: FC<Props> = ({ pokemonId }) => {
	const router = useRouter()

	const onClick = () => {
		router.push(`/pokemon/${pokemonId}`)
	}

	return (
		<Grid key={pokemonId} xs={6} md={2} xl={1} onClick={onClick}>
			<Card isHoverable isPressable css={{ padding: 10 }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width={"100%"}
					height={140}
				/>
			</Card>
		</Grid>
	)
}

export default CardFavorite
