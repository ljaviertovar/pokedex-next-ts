export interface ListPokemons {
	count: number
	next: string
	previous: null
	results: SmallPokemons[]
}

export interface SmallPokemons {
	name: string
	url: string
	id: number
	img: string
}
