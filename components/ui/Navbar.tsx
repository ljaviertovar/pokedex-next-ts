import Image from "next/image"
import { useTheme, Text, Spacer } from "@nextui-org/react"

const Navbar = () => {
	const { theme } = useTheme()

	console.log({ theme })

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0 20px",
				backgroundColor: theme?.colors.gray50.value,
			}}
		>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
				alt="App's icon"
				width={70}
				height={70}
			/>

			<Text color='white' h2>
				P
			</Text>
			<Text color='white' h3>
				okémon
			</Text>
			<Spacer css={{ flex: 1 }} />
			<Text color='white'>Favourites</Text>
		</div>
	)
}

export default Navbar
