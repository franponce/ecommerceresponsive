const productoDom = document.querySelector(".productos__center")
const carritoDOM = document.querySelector(".carrito")
const carritoCenter = document.querySelector(".carrito__center")
const openCarrito = document.querySelector(".carrito__icon")
const closeCarrito = document.querySelector(".close__carrito")
const overlay =  document.querySelector(".carrito__overlay")
const carritoTotal = document.querySelector(".carrtio__total")
const clearCarritoBtn = document.querySelector("clear__carrito")
const itemTotales = document.querySelector("item__total");
const detalles = document.getElementById("detalles")

let carrito = [];
let buttonDom = []

class UI {
    renderProductos(productos){
        let result = ""
        productos.forEach((producto) => {
            result += `
            <div class="producto">
            <div class=${producto.image}
                alt=""
              />
            </div>
            <div class="producto__footer">
              <h1>${producto.title}</h1>
              <div class="rating">
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bx-start"></i>
                </span>
              </div>
              <div class="price">$${producto.price}</div>
            </div>
            <div class="bottom">
              <div class="btn_group">
                <a href="#" class="btn addToCart" data-id=${producto.id}>Añadir al carrito</a>
                <a href="/productoDetalle.html?id=${producto.id}" class="btn view">Ver producto</a>
              </div>
            </div>
          </div>
          `
        });
        productoDom.innerHTML = result
    }
}

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