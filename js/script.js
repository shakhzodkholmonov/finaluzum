let product = [
    {
        id: Math.random(),
        name: "Sochlar uchun shampun-balzam-konditsioner Head & Shoulders,",
        price: "28 000 so'm",
        credit: "1 760 so'm/oyiga",
        sale: "12 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cl9fm15ennt861ipjbog/t_product_540_high.jpg#1709015374398"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Tolstovka-xudi itlar va mushuklar uchun 'Adidog', hayvonlar uchun kiyim",
        price: "56 000 so'm",
        credit: "1 760 so'm/oyiga",
        sale: "12 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cf0prk0l08k0o9qho880/t_product_540_high.jpg#1709015200741"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Smartfon Honor X6a, 4/128 GB, 6/128 GB, 5200 mA/soa",
        price: "89 000 so'm",
        credit: "1 760 so'm/oyiga",
        sale: "12 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ckie8okjvf2sulnv3an0/t_product_540_high.jpg#1709015374392"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Tolstovka-xudi itlar va mushuklar uchun 'Adidog', hayvonlar uchun kiyim",
        price: "25 000 so'm",
        credit: "1 760 so'm/oyiga",
        sale: "12 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cj76g97hj8j7lmgfk3c0/t_product_540_high.jpg#1709015374394"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Honor X6a, 4/128 GB, 6/128 GB, 5200 mA/soa",
        price: "12 000 so'm",
        credit: "1 760 so'm/oyiga",
        sale: "12 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cne1v63ifoubkc6thjj0/original.jpg"],
        category: 1,
    },
];


const container = document.querySelector(".grid");

product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card", "bg-white", "rounded-lg", "overflow-hidden", "shadow-md");

    const images = product.images
        .map((image) => `<img src='${image}' alt='${product.name}' class='w-full h-84 object-cover'/>`)
        .join("");

    card.innerHTML = `
    <div class='p-2 '>
     <div>${images}</div>
     <h2 class="text-slate-600">${product.name}</h2>
     <h3 class="mt-6 text-xs bg-amber-300 w-28">${product.credit}</h3>
     <h3 class="mt-6 line-through text-xs text-slate-400">${product.sale}</h3>
     <div class="flex">
        <p>${product.price}</p>
        <button class="border border-black rounded-full ml-44" data-v-1a3a46a8="" data-v-40da8b10="" title=" Qahva Carte Noire, sublimatsiyalangan, 95 gni savatga qoʻshish" data-test-id="button__add-to-cart" class="ui-component ui-button add-to-cart tertiary-outlined small fill"><!----> <div data-v-1a3a46a8="" class="slot default"><svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
        <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
        <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
        </svg></div> <!----></button>
     </div>
    </div>
   `;

    container.appendChild(card);
});