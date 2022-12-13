const row = document.querySelector(".row");
const products = document.querySelector(".products")
const productImage = document.querySelector("img");
const data = {
  total: 280,
  shirts: [
    {
      quantity: 1,
      id: 3,
      title: "Invertocat Pride Tee",
      price: 30,
      img:
        "https://cdn.shopify.com/s/files/1/0051/4802/products/Webshop_TShirt_Pride2022_VintageBlack_Pride_600x600_crop_center.png?v=1653680303"
    },
    {
      quantity: 2,
      id: 0,
      title: "Youth Invertocat 4.0 Shirt",
      price: 20,
      img:
        "https://cdn.shopify.com/s/files/1/0051/4802/products/WebShop_Youth_TShirt_Invertocat_4.0_Turquoise_1_600x600_crop_center.jpg?v=1629732165"
    },
    {
      quantity: 3,
      id: 1,
      title: "Ivertocat 4.0 Shirt",
      price: 30,
      img:
        "https://cdn.shopify.com/s/files/1/0051/4802/products/TShirt_Invertocat_4.0_Unisex_Black_600x600_crop_center.jpg?v=1629997801"
    },
    {
      quantity: 4,
      id: 2,
      title: "Username 2.0 Shirt",
      price: 30,
      img:
        "https://cdn.shopify.com/s/files/1/0051/4802/products/TShirt_GitHub_Username_Unisex_CoolBlue_1_600x600_crop_center.jpg?v=1629732698"
    }
  ]
};
//var imagenesPlayeras=[]
const playeras = data.shirts


function createRow() {
  const clone = row.cloneNode(true);
  products.appendChild(clone)
}

for(var i=0; i < playeras.length - 1; i++) {
  createRow(data.shirts)
}

var list = document.getElementsByClassName("row");
for (var i=0; i < list.length; i++) {
  list[i].classList.add(i)
}
console.log(list[0].className)

// playeras.forEach(function(playera){
//   imagenesPlayeras.push(playera.title)
//   imagenesPlayeras.push(playera.img)
//   imagenesPlayeras.push(playera.price)
// });

//data.shirts.forEach(createRow)

//console.log(imagenesPlayeras)
// Añadir elementos al html
// function addElement() {
//   const newDiv = document.createElement("div");
//   const newimg = document.createElement("img");
//   const newp = document.createElement("p");
//   newDiv.appendChild(newimg);
//   products.appendChild(newDiv);
//   newDiv.appendChild(newp);
//   const newSpan = document.createElement("span");
//   const newSpan2 = document.createElement("span");
//   const newButton = document.createElement("button");
//   newp.appendChild(newSpan);
//   newp.appendChild(newSpan2);
//   newp.appendChild(newButton);
// }

// addElement(document.body)


//SOLUCION PRIMERA

// const row = document.querySelector(".row");
// const products = document.querySelector(".products")
// const productImage = document.querySelector("img");
// const urls = {}


// // 1. recorrer los productos
// // 2. dibujar/crear un nodo row? 
// // 3. agregarle el maquetado necesario <=




// function createRow() {
//   const clone = row.cloneNode(true);
//   products.appendChild(clone)
//   const rows = document.querySelector(".row img")
//   //rows.src = ""
//   //console.log(rows)
// }

// data.shirts.forEach(createRow)
// row.innerText = null;


// //obtiene el url de las imagenes
// for (const key in data) {
//   if (key === "shirts") {
//       for (const key2 in data[key]) {
//         urls.innerText = data[key][key2].img
//         //console.log(urls)
//       } 
//   } 
// }

  