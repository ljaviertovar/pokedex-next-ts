import { FC } from "react"
import { Grid } from "@nextui-org/react"
import { CardFavorite } from "./"

interface Props {
	favorites: number[]
}

const Favorites: FC<Props> = ({ favorites }) => {
	return (
		<Grid.Container gap={2} direction='row' justify='flex-start'>
			{favorites.map(id => (
				<CardFavorite pokemonId={id} key={id} />
			))}
		</Grid.Container>
	)
}

export default Favorites
