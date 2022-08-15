import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
	title?: string
	children: JSX.Element | JSX.Element[]
}

const origin = typeof window !== "undefined" ? window.location.origin : ""

const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "Pokedex"}</title>
				<meta name='author' content='Javier Tovar' />
				<meta name='description' content='Information about Pokémons' />
				<meta name='keywords' content='pokémon, pokedex' />

				<meta property='og:title' content={`Information about ${title}`} />
				<meta property='og:description' content={`Page about ${title}`} />
				<meta property='og:image' content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main>{children}</main>
		</>
	)
}

export default Layout
