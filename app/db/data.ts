export interface RecipeDetails {
  id: number;
  name: string;
  image: string;
  description?: string;
}

export const data: RecipeDetails[] = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    description:
      "A classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil.",
  },
  {
    id: 2,
    name: "Vegetarian Stir-Fry",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    description:
      "A healthy and colorful stir-fry with a variety of fresh vegetables.",
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    description: "Delicious homemade cookies with gooey chocolate chips.",
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    description: "Creamy pasta with tender chicken and a rich Alfredo sauce.",
  },
  {
    id: 5,
    name: "Mango Salsa Chicken",
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    description: "Grilled chicken topped with a fresh and tangy mango salsa.",
  },
  {
    id: 6,
    name: "Quinoa Salad with Avocado",
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    description:
      "A nutritious salad with quinoa, avocado, and a lemon vinaigrette.",
  },
  {
    id: 7,
    name: "Tomato Basil Bruschetta",
    image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    description:
      "Toasted bread topped with a mixture of fresh tomatoes, basil, and garlic.",
  },
  {
    id: 8,
    name: "Beef and Broccoli Stir-Fry",
    image: "https://cdn.dummyjson.com/recipe-images/8.webp",
    description:
      "A savory stir-fry with tender beef and crisp broccoli in a flavorful sauce.",
  },
  {
    id: 9,
    name: "Caprese Salad",
    image: "https://cdn.dummyjson.com/recipe-images/9.webp",
    description:
      "A simple and refreshing salad with tomatoes, mozzarella, and basil.",
  },
  {
    id: 10,
    name: "Shrimp Scampi Pasta",
    image: "https://cdn.dummyjson.com/recipe-images/10.webp",
    description:
      "Pasta with succulent shrimp in a garlic and white wine sauce.",
  },
  {
    id: 11,
    name: "Chicken Biryani",
    image: "https://cdn.dummyjson.com/recipe-images/11.webp",
    description:
      "A fragrant and flavorful rice dish with tender chicken and spices.",
  },
  {
    id: 12,
    name: "Chicken Karahi",
    image: "https://cdn.dummyjson.com/recipe-images/12.webp",
    description:
      "A spicy and aromatic chicken curry with tomatoes and green chilies.",
  },
  {
    id: 13,
    name: "Aloo Keema",
    image: "https://cdn.dummyjson.com/recipe-images/13.webp",
    description:
      "A comforting dish with ground meat and potatoes cooked with spices.",
  },
  {
    id: 14,
    name: "Chapli Kebabs",
    image: "https://cdn.dummyjson.com/recipe-images/14.webp",
    description: "Spiced ground meat patties, perfect for grilling or frying.",
  },
  {
    id: 15,
    name: "Saag (Spinach) with Makki di Roti",
    image: "https://cdn.dummyjson.com/recipe-images/15.webp",
    description:
      "A traditional Punjabi dish with spinach and cornmeal flatbread.",
  },
  {
    id: 16,
    name: "Japanese Ramen Soup",
    image: "https://cdn.dummyjson.com/recipe-images/16.webp",
    description: "A rich and savory soup with noodles, meat, and vegetables.",
  },
  {
    id: 17,
    name: "Moroccan Chickpea Tagine",
    image: "https://cdn.dummyjson.com/recipe-images/17.webp",
    description: "A hearty and flavorful stew with chickpeas and vegetables.",
  },
  {
    id: 18,
    name: "Korean Bibimbap",
    image: "https://cdn.dummyjson.com/recipe-images/18.webp",
    description:
      "A Korean rice bowl with assorted vegetables, meat, and a fried egg.",
  },
  {
    id: 19,
    name: "Greek Moussaka",
    image: "https://cdn.dummyjson.com/recipe-images/19.webp",
    description:
      "A layered casserole with eggplant, ground meat, and béchamel sauce.",
  },
  {
    id: 20,
    name: "Butter Chicken (Murgh Makhani)",
    image: "https://cdn.dummyjson.com/recipe-images/20.webp",
    description:
      "A creamy and mildly spiced chicken curry with a tomato-based sauce.",
  },
  {
    id: 21,
    name: "Thai Green Curry",
    image: "https://cdn.dummyjson.com/recipe-images/21.webp",
    description:
      "A fragrant and spicy curry with green chilies, coconut milk, and vegetables.",
  },
  {
    id: 22,
    name: "Mango Lassi",
    image: "https://cdn.dummyjson.com/recipe-images/22.webp",
    description:
      "A refreshing yogurt-based drink with mango and a hint of cardamom.",
  },
  {
    id: 23,
    name: "Italian Tiramisu",
    image: "https://cdn.dummyjson.com/recipe-images/23.webp",
    description:
      "A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
  },
  {
    id: 24,
    name: "Turkish Kebabs",
    image: "https://cdn.dummyjson.com/recipe-images/24.webp",
    description: "Grilled meat skewers with a blend of Turkish spices.",
  },
  {
    id: 25,
    name: "Blueberry Banana Smoothie",
    image: "https://cdn.dummyjson.com/recipe-images/25.webp",
    description:
      "A healthy and delicious smoothie with blueberries and bananas.",
  },
  {
    id: 26,
    name: "Mexican Street Corn (Elote)",
    image: "https://cdn.dummyjson.com/recipe-images/26.webp",
    description:
      "Grilled corn on the cob topped with a creamy and tangy sauce.",
  },
  {
    id: 27,
    name: "Russian Borscht",
    image: "https://cdn.dummyjson.com/recipe-images/27.webp",
    description: "A hearty beet soup with a rich and tangy flavor.",
  },
  {
    id: 28,
    name: "South Indian Masala Dosa",
    image: "https://cdn.dummyjson.com/recipe-images/28.webp",
    description: "A crispy and savory crepe filled with spiced potatoes.",
  },
  {
    id: 29,
    name: "Lebanese Falafel Wrap",
    image: "https://cdn.dummyjson.com/recipe-images/29.webp",
    description:
      "A wrap filled with crispy falafel, fresh vegetables, and a tangy sauce.",
  },
  {
    id: 30,
    name: "Brazilian Caipirinha",
    image: "https://cdn.dummyjson.com/recipe-images/30.webp",
    description:
      "A refreshing Brazilian cocktail made with cachaça, lime, and sugar.",
  },
];
