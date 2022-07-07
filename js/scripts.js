class Productos {
    async getProdutos() {
        try {
            const result = await fetch("productos.json")
            const data = await result.json()
            const productos = data.items
            return productos
            return data
        }catch(err){
            console.log(err)
        }
    }
}


document.addEventListener("DOMContentLoaded", async () =>{
    const productosLista = new Productos();

    const productos = await productosLista.getProdutos()
    console.log(productos);
    
})