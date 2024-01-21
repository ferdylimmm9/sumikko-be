const { Collection } = require("./models");
const { nanoid } = require("nanoid");

// Yves Saint Laurent Collection
Collection.create({
  id: nanoid(),
  name: "Leather Monogram Envelope Clutch",
  price: 25000000,
  stock: 15,
  brandId: "mjR3zuwVBN9dvmX2uIzDk",
  image:
    "https://dynamic.zacdn.com/CkSC_j1fbzDlnyIILGcc6_1b_j0=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/saint-laurent-4886-6430734-2.jpg",
  description:
    "Elevate your evening look with this iconic YSL monogram envelope clutch crafted from luxurious leather.",
});

// Prada Collection
Collection.create({
  id: nanoid(),
  name: "Saffiano Leather Tote",
  price: 28000000,
  stock: 18,
  brandId: "H6-bNZzY2kEWpNu_-yqQC",
  image:
    "https://dynamic.zacdn.com/-qS62HcrcmZm7cgnII9Xkc0_UX0=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/prada-8560-4081914-1.jpg",
  description:
    "Stay on-trend with Prada's classic Saffiano leather tote, perfect for both work and play.",
});

// Louis Vuitton Collection
Collection.create({
  id: nanoid(),
  name: "Neverfull MM Monogram Canvas",
  price: 42000000,
  stock: 12,
  brandId: "SXgEpd_xpfnzPOPGkkgkn",
  image:
    "https://dynamic.zacdn.com/5c6ihHfxpOgFCnm0dGgjA2FJGGU=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/louis-vuitton-4374-4160583-1.jpg",
  description:
    "Experience timeless elegance with Louis Vuitton's iconic Neverfull MM in monogram canvas.",
});

// Chanel Collection
Collection.create({
  id: nanoid(),
  name: "Classic Flap Bag",
  price: 55000000,
  stock: 10,
  brandId: "XWta7xJ61AB6codvS13g2",
  image:
    "https://dynamic.zacdn.com/rl1iaxOc1-wD9ZO1tcoQb3vtW-k=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/chanel-3842-6045134-1.jpg",
  description:
    "Make a statement with Chanel's timeless classic flap bag, a symbol of sophistication.",
});

// Hermes Collection
Collection.create({
  id: nanoid(),
  name: "Birkin 35 Togo Leather",
  price: 120000000,
  stock: 8,
  brandId: "KSlO0fMyQw-I9LUmkXM9i",
  image:
    "https://dynamic.zacdn.com/4REab1d_RhIA7zpyl-7oXgEf6ug=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/hermes-0648-6240934-3.jpg",
  description:
    "Indulge in luxury with the exquisite craftsmanship of the Hermes Birkin 35 in Togo leather.",
});
