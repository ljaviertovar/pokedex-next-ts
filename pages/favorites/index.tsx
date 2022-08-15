import React, { useEffect, useState } from "react"
import { Card, Grid } from "@nextui-org/react"
import { Layout } from "../../components/layouts"
import { Favorites, NoFavorites } from "../../components/pokemon"
import { localPokemons } from "../../utils"

const FavoritesPage = () => {
	const [favorites, setFavorites] = useState<number[]>([])

	useEffect(() => {
		setFavorites(localPokemons.getFavorites())
	}, [])

	return (
		<Layout title='My favorites Pkémons'>
			{favorites.length ? <Favorites favorites={favorites} /> : <NoFavorites />}
		</Layout>
	)
}

export default FavoritesPage
