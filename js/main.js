let shop = document.getElementById("shop");

let = carrito = JSON.parse(localStorage.getItem("datos")) || [];


let generarShop = () => {
    return (shop.innerHTML = shopItemsInfo.map((x) => {
        let { id, nombre, precio, desc, img } = x;
        let buscador = carrito.find((x) => x.id === id) || [];
        return ` 
            <article id=pruduct-id-${id} class="item" >
                <img src=${img}>
                <div class="detalles">
                    <h2>${nombre}</h2>
                    <p>${desc}</p>
                    <div class="precio-cantidad">
                        <h3> $ ${precio} </h3>
                       <div class="botones">
                        <i onclick="quitar(${id})" class="bi bi-bag-dash"></i>
                        <div id=${id} class="cantidad">
                        ${buscador.item === undefined ? 0 : buscador.item}</div>
                        <i onclick="incrementar(${id})" class="bi bi-bag-plus"></i>
                       </div>
                    </div>
                </div>
            </article>
    `
    }).join(""));
};

generarShop();

let incrementar = (id) => {
    let itemSeleccionado = id;
    let buscador = carrito.find((x) => x.id === itemSeleccionado)

    if (buscador === undefined) {
        carrito.push({
            id: itemSeleccionado,
            item: 1,

        });
    }
    else {
        buscador.item += 1;
    }



    // console.log(carrito);
    agregar(itemSeleccionado);
    localStorage.setItem("datos", JSON.stringify(carrito))
}


let quitar = (id) => {
    let itemSeleccionado = id;
    let buscador = carrito.find((x) => x.id === itemSeleccionado)

    if (buscador === undefined) return;

    else if (buscador.item === 0) return;

    else {
        buscador.item -= 1;
    }
    agregar(itemSeleccionado);

    carrito = carrito.filter((x) => x.item !== 0);


    //console.log(carrito);
    localStorage.setItem("datos", JSON.stringify(carrito));
};


let agregar = (id) => {
    let buscador = carrito.find((x) => x.id === id)
    //console.log(buscador.item);
    document.getElementById(id).innerHTML = buscador.item;
    calculo()
};

let calculo = () => {
    let iconoCarrito = document.getElementById("cantidad")
    iconoCarrito.innerHTML = carrito.map((x) => x.item).reduce((x, y) => x + y, 0);

};
calculo();


