let products = document.querySelector("#products");

let data = [
  {
    img: "https://i.ytimg.com/vi/sKfFS9AdciI/maxresdefault.jpg",
    title: "burger",
    price: "2$",
  },
  {
    img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65383dd4a9a5ae02fc15c50c_65383dd91447513a9e97f009/scale_1200",
    title: "pizza",
    price: "9$",
  },
  {
    img: "https://i.ytimg.com/vi/17Q4gdwsUM8/maxresdefault.jpg",
    title: "lavash",
    price: "3$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=3c114ef854b16e0f3f25fb3f4343939f_l-8806475-images-thumbs&n=13",
    title: "choy",
    price: "500$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=389774c1b7863ad96998afce3afec4e0_l-10464870-images-thumbs&n=13",
    title: "coca sola",
    price: "98$",
  },
  {
    img: "https://i.ytimg.com/vi/cdjmEFLYTPM/maxresdefault.jpg",
    title: "redbul",
    price: "500$",
  },
  {
    img: "https://images.gastronom.ru/sI2Z_hS9qg62A_PIvSNDCqpsBvIKqOpRSYTVehfE9KA/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2QxOTg4MmNjLTU1YjAtNDQ5ZS05Nzc3LTkzNDUzNGYxMzZkMi5qcGc.webp",
    title: "alivia salat",
    price: "1595$",
  },
  {
    img: "https://static.life.ru/posts/2017/01/965068/39d1423533a8c430b24c94b07e9edeb7.jpg",
    title: "somsa",
    price: "25$",
  },
];

for (let item of data) {
  products.innerHTML += `
    <article class="border rounded-lg bg-white overflow-hidden">
    <img src="${item.img}" alt="" class="w-full h-44 object-cover"/>
    <div class="p-2">
    <h1  class="text-lg font-medium text-gray-900">${item.title}</h1>
        <h2  class="text-blue-500 font-bold text-xl my-1">${item.price}</h2>
        <button class="bg-gray-900 text-white p-1 w-full rounded-md mt-2 active:scale-95 duration-300">add to cart</button>
        </div>
        </article>
    `;
}
