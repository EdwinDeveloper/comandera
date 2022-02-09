const load = {
    business: [
        {
            name : "Restaurante Italiano",
            categories : [
                {
                    name : "Pizzas",
                    dissess : [
                        {
                            name : "Pizza Hawaiana",
                            price : 150,
                            description: "Pizza con Piña y Jamón"
                        },
                        {
                            name : "Pizza Peperoni",
                            price : 150,
                            description: "Pizza con Peperoni"
                        }
                    ] 
                },
                {
                    name : "Pastas",
                    dissess : [
                        {
                            name : "Pasta Alfredo",
                            price : 140,
                            description: "Pasta con crema"
                        }
                    ] 
                }
            ]
        },
        {
            name: "Crepas wenos",
            categories : [
                {
                    name : "Crepes",
                    dissess : [
                        {
                            name : "Crepa 3 ingredientes",
                            price : 90,
                            description: "Crepas 3 ingredientes",
                            ingredientes: [
                                "Platano",
                                "Fresas"
                            ]
                        }
                    ] 
                },
                {
                    name : "Bebidas",
                    dissess : [
                        {
                            name : "Cafe",
                            price : 30,
                            description: "Cafe americano"
                        }
                    ] 
                }
            ]
        }
    ]
}

export default load