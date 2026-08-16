import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "A hardy plant that helps purify indoor air."
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "An elegant flowering houseplant."
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
    description: "An easy-care plant with attractive arching leaves."
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Air Purifying Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1556910633-5099dc3971e8?auto=format&fit=crop&w=600&q=80",
    description: "A useful succulent that thrives in sunny spaces."
  },
  {
    id: 5,
    name: "Boston Fern",
    category: "Air Purifying Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "A lush fern that adds greenery to your home."
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description: "A striking plant with large glossy leaves."
  },

  {
    id: 7,
    name: "Monstera",
    category: "Tropical Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "A tropical favorite with distinctive split leaves."
  },
  {
    id: 8,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
    description: "A dramatic tropical plant for bright rooms."
  },
  {
    id: 9,
    name: "Calathea",
    category: "Tropical Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1600411833112-2c0b5b4c3c0b?auto=format&fit=crop&w=600&q=80",
    description: "Known for its beautiful patterned foliage."
  },
  {
    id: 10,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1614594575637-5d4f8f4f3a2e?auto=format&fit=crop&w=600&q=80",
    description: "A popular tropical plant that is easy to grow."
  },
  {
    id: 11,
    name: "ZZ Plant",
    category: "Tropical Plants",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A resilient plant perfect for busy plant owners."
  },
  {
    id: 12,
    name: "Fiddle Leaf Fig",
    category: "Tropical Plants",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A stylish statement plant with large leaves."
  },

  {
    id: 13,
    name: "Jade Plant",
    category: "Succulent Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "A popular succulent with thick green leaves."
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulent Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful rosette-shaped succulent."
  },
  {
    id: 15,
    name: "Haworthia",
    category: "Succulent Plants",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80",
    description: "A compact succulent ideal for small spaces."
  },
  {
    id: 16,
    name: "String of Pearls",
    category: "Succulent Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
    description: "A trailing succulent with bead-like leaves."
  },
  {
    id: 17,
    name: "Panda Plant",
    category: "Succulent Plants",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A soft-leaved succulent with a unique appearance."
  },
  {
    id: 18,
    name: "Zebra Haworthia",
    category: "Succulent Plants",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "A small succulent with attractive striped leaves."
  }
];

function ProductList() {
 const cartItems = useSelector((state) => state.cart.items);

const isProductInCart = (productId) => {
  return cartItems.some((item) => item.id === productId);
};

  const categories = [
    "Air Purifying Plants",
    "Tropical Plants",
    "Succulent Plants"
  ];

  return (
    <main className="products-page">
      <h1 className="page-title">Our Plants</h1>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <h2 className="category-title">{category}</h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <div className="price">
                      ${plant.price.toFixed(2)}
                    </div>

                    <button
  className="add-button"
  onClick={() => dispatch(addItem(plant))}
  disabled={isProductInCart(plant.id)}
>
  {isProductInCart(plant.id)
    ? "Added to Cart"
    : "Add to Cart"}
</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ProductList;