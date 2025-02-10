export const CarList = [
	["Ford", "Fiesta", "Manual", "US$ 12,000", 0, "FF002501"],
	[,,, "US$ 13,400", 1, "FF002502"],
	[,, "Automatic", "US$ 14,000", -1, "FF002503"],
	[,,, "US$ 15,000", 0, "FF002504"],
	[, "Focus", "Manual", "US$ 33,000", 0, "FC002501"],
	[,,, "US$ 33,500", 1, "FC002502"],
	[,,, "US$ 35,000", 0, "FC002503"],
	[,, "Automatic", "US$ 36,000", 0, "FC002504"],
	["VW", "Golf", "Manual", "US$ 35,000", -1, "VG002501"],
	[,, "Automatic", "US$ 37,000", 1, "VG002502"]
];

export const CarListCols = [
    { field: 'brand', header: 'Brand' },
    { field: 'model', header: 'Model' },
    { field: 'transmission', header: 'Transmission' },
    { field: 'price', header: 'Price' },
    { field: 'priceFlag', header: 'Price Flag' },
    { field: 'code', header: 'Code' }
] 
export const SpecificModelCols = [
    { field: 'model', header: 'Model' },
    { field: 'transmission', header: 'Transmission' },
    { field: 'price', header: 'Price' },
    { field: '', header: ""}
]