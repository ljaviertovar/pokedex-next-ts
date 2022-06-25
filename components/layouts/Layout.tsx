import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
	title?: string
	children: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "Pokedex"}</title>
				<meta name='author' content='Javier Tovar' />
				<meta name='description' content='Information about Pokémons' />
				<meta name='keywords' content='pokémon, pokedex' />
			</Head>

			<Navbar />

			<main>{children}</main>
		</>
	)
}

export default Layout
