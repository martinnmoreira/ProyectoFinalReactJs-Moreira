export const products = [
    {
      id: '1', 
      title: "Lapices Simball x 12",
      stock: 20,
      price: 750,
      image: "/img/lapiz_simball.jpg",
      description: "Lápices de colores Simball x 12 unidades.",
      category: "lapices"
    },
    {
      id: '2', 
      title: "Lapices Faber-Castell",
      stock: 18,
      price: 3560,
      image: "/img/lapiz_castell.jpg",
      description: "Lápices de colores Faber-Castell x 12 unidades. Más 3 bicolor gratis.",
      category: "lapices"
    },
    {
      id: '3', 
      title: "Lapicera Parker",
      stock: 10,
      price: 2899,
      image: "/img/lapicera_parker.jpg",
      description: "Boligrafo Parker Jotter Originals.",
      category: "lapiceras"
    },
    {
      id: '4', 
      title: "Lapicera Parker Jotter Dorada",
      stock: 8,
      price: 3500,
      image: "/img/lapicera_parker_jotter_inox.jpg",
      description: "Boligrafo Parker Jotter Acero Inox Clip Dorado Personalizado.",
      category: "lapiceras"
    }
  ]

  export const promesa = new Promise ((resolve, reject) =>{
    let pedido = true
    setTimeout(() =>{
      if (pedido){
        resolve(products)
      }
      else {
        reject('Ha ocurrido un error en el pedido')
      }
      }, 2000)
    })