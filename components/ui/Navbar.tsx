import Image from "next/image"
import NextLink from "next/link"
import { useTheme, Text, Spacer, Link } from "@nextui-org/react"

const Navbar = () => {
	const { theme } = useTheme()

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

			<NextLink href='/' passHref>
				<Link>
					<Text color='white' h2>
						P
					</Text>
					<Text color='white' h3>
						okémon
					</Text>
				</Link>
			</NextLink>
			<Spacer css={{ flex: 1 }} />
			<NextLink href='/favorites' passHref>
				<Link>
					<Text color='white'>Favourites</Text>
				</Link>
			</NextLink>
		</div>
	)
}

export default Navbar
