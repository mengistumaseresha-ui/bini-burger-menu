export interface MenuItem {
  id: number;
  name: string;
  amharicName: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Bini Classic Burger",
    amharicName: "ቢኒ ክላሲክ በርገር",
    description: "Our signature beef patty with fresh lettuce, tomato, onions, and secret Bini sauce.",
    price: 250,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1f326ba1eb31/hero-burger-with-coke-a353409a-1773526719050.webp",
    category: "Signature"
  },
  {
    id: 2,
    name: "Double Decker Feast",
    amharicName: "ደብል ደከር ፊስት",
    description: "Two juicy beef patties stacked high with double cheese, bacon, and caramelized onions.",
    price: 450,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1f326ba1eb31/double-decker-burger-84e67eae-1773526718970.webp",
    category: "Special"
  },
  {
    id: 3,
    name: "Spicy Zinger Chicken",
    amharicName: "ስፓይሲ ዚንገር ቺክን",
    description: "Crispy fried chicken breast topped with jalapeños and our fiery spicy mayo.",
    price: 300,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1f326ba1eb31/spicy-chicken-burger-fa7bb5ce-1773526717873.webp",
    category: "Chicken"
  },
  {
    id: 4,
    name: "Mushroom Swiss Gourmet",
    amharicName: "መሽሩም ስዊስ ጉርሜት",
    description: "Sautéed mushrooms and melted Swiss cheese over a flame-grilled beef patty.",
    price: 350,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1f326ba1eb31/mushroom-swiss-burger-b0e15a45-1773526724131.webp",
    category: "Gourmet"
  },
  {
    id: 5,
    name: "Veggie Delight",
    amharicName: "ቬጂ ዴላይት",
    description: "A nutritious black bean patty with avocado, fresh sprouts, and citrus vinaigrette.",
    price: 280,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae310898-4d3e-46ec-ae6a-1773526718879.webp",
    category: "Vegetarian"
  }
];