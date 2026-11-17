const products = [
  { id: 1, name: "هدفون بلوتوث", price: 1200000, category: "صوتی", image: "https://picsum.photos/seed/1/400/300" },
  { id: 2, name: "کیبورد مکانیکی", price: 2500000, category: "لوازم جانبی", image: "https://picsum.photos/seed/2/400/300" },
  { id: 3, name: "ماوس گیمینگ", price: 800000, category: "لوازم جانبی", image: "https://picsum.photos/seed/3/400/300" },
  { id: 4, name: "اسپیکر قابل حمل", price: 1800000, category: "صوتی", image: "https://picsum.photos/seed/4/400/300" },
];

export async function GET() {
  return Response.json(products);
}