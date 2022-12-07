const row = document.querySelector(".row");
const products = document.querySelector(".products")
//row.innerText = null;


// 1. recorrer los productos
// 2. dibujar/crear un nodo row? 
// 3. agregarle el maquetado necesario <=


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
  
  function createRow() {
    const newDiv = document.createElement("div");
    newDiv.className = "row";
    products.appendChild(newDiv)

    const clone = row.cloneNode(true);
    newDiv.appendChild(clone)
    console.log(products)
  }
  data.shirts.forEach(createRow)
  row.innerText = null;

  /* me da 5 resultados
  function createRow() {
    const newDiv = document.createElement("div");
    newDiv.className = "row";
    const clone = row.cloneNode(true);
    products.appendChild(newDiv)
    newDiv.appendChild(clone)
    console.log(products)
  }
  
  data.shirts.forEach(createRow)
  */

  