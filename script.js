const wrapper = document.querySelector(".sliderwrapper")
const menuitems = document.querySelectorAll(".menu");


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductsize = document.querySelectorAll(".size");
const currentProductColor = document.querySelectorAll(".color");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 3495,
    sizeCode:[
      {
        size1: "UK 7",
      },
      {
        size2: "UK 8",
      },
      {
        size3: "UK 9",
      },
      {
        size4: "UK 10",
      }
    ],
    colors: [
      {
      colorCode: "red",
        img: "./img/pngwing.com3.0.png",
      },
      {
        colorCode: "black",
        img: "./img/pngwing.com.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 7995,
    sizeCode:[
      {
        size1: "UK 7",
      },
      {
        size2: "UK 8",
      },
      {
        size3: "UK 9",
      },
      {
        size4: "UK 10",
      }
    ],
    colors: [
      {
        colorCode: "black",
        img: "./img/pngwing.com (1).png",
      },
      {
        colorCode: "rgb(161, 232, 29)",
        img: "./img/pngwing.com (4).png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 5995,
    sizeCode:[
      {
        size: "S",
      },
      {
        size: "M",
      },
      {
        size: "L",
      },
      {
        size: "XL",
      }
    ],
    colors:
    [
      {
        colorCode: "gray",
        img: "./img/pngwing.comblazer.png",
      },
      {
        colorCode: "rgb(72, 72, 194)",
        img: "./img/pngwing.com (3).png",
      },
    ],
  },
  {
    id: 4,
    title: "Socks",
    price: 129,
    sizeCode:[
      {
        size1: "UK 7",
      },
      {
        size2: "UK 8",
      },
      {
        size3: "UK 9",
      },
      {
        size4: "UK 10",
      }
    ],
    colors: [
      {
        colorCode: "black",
        img: "./img/blacksocks.png",
      },
      {
        colorCode: "lightgray",
        img: "./img/white sock.png",
      },
    ],
  },
  {
    id: 5,
    title: "backpacks",
    price: 2295,
    sizeCode:[
      {
        size1: "UK 7",
      },
      {
        size2: "UK 8",
      },
      {
        size3: "UK 9",
      },
      {
        size4: "UK 10",
      }
    ],
    colors: [
      {
        colorCode: "black",
        img: "./img/black bag.png",
        
      },
      {
        colorCode: "gray",
        img: "./img/pngwing.com (2).png",
              
      },
    ],
  },
];


let choosenProduct = products[0];



menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change slide

        choosenProduct = products[index]
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "₹" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
        // currentProductsize.textContent = choosenProduct.sizeCode[index].size     focus here first


        currentProductColor.forEach((color,index) =>{
          color.style.backgroundColor = choosenProduct.colors[index].colorCode;       //give new colors using color code as mentioned above
        })
    });
});


currentProductColor.forEach((color, index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  })
})


currentProductsize.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductsize.forEach((size)=>{
      size.style.backgroundColor = "white";
      size.style.color = "black"
    })
    size.style.backgroundColor = "black";
    size.style.color = "white"
  })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payments");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
  cart1.style.display = "none";
  cart2.style.display = "none";
  cart3.style.display = "none";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

