export interface IAction {
	type: string,
	payload?: any,
}

export interface IUser {
	id: string,
	name: string,
}

export interface IDish {
	id: string,
	name: string,
	price: number,
	ingredients: string[],
}

export interface IReview {
	id: string,
	user: string,
	text: string,
	rating: number,
}

export interface ILocation {
	lat: number,
	lng: number,
}

export interface IRestaurant {
	id: string,
	name: string,
	image: string,
	location: ILocation,
	menu: IDish[],
	reviews: IReview[],
}