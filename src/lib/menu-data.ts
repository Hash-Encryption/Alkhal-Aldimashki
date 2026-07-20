import coldImg from "@/assets/cat-cold.jpg";
import hotImg from "@/assets/cat-hot.jpg";
import saladImg from "@/assets/cat-salad.jpg";
import shawarmaImg from "@/assets/cat-shawarma.jpg";

export type MenuItem = {
  id: string;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  category_en: string;
  category_ar: string;
  image: string;
  items: MenuItem[];
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const raw: Omit<MenuCategory, "id" | "items"> & { items: Omit<MenuItem, "id">[] }[] | any = [
  {
    category_en: "Cold Appetizers",
    category_ar: "المقبلات الباردة",
    image: coldImg,
    items: [
      { name_en: "Hummus", name_ar: "حمص", description_en: "Cooked chickpeas blended with sesame tahini.", description_ar: "حبوب الحمص المطهوة والممزوجة مع طحينة السمسم", price: 21 },
      { name_en: "Mutabl", name_ar: "متبل", description_en: "Shami yogurt with grilled eggplant blended with lemon and sesame tahini.", description_ar: "اللبن الشامي مع الباذنجان المشوي الممزوج مع الليمون وطحينة السمسم", price: 21 },
      { name_en: "Baba Ghanoug", name_ar: "بابا غنوج", description_en: "Grilled eggplant with tomatoes and onions garnished with walnuts and pomegranate molasses.", description_ar: "الباذنجان المشوي مع الطماطم والبصل المزينة بالجوز ودبس الرمان", price: 21 },
      { name_en: "Muhammra", name_ar: "محمرة", description_en: "Fresh walnuts mixed with tomato paste and spicy chili paste.", description_ar: "الجوز الطازج الممزوج مع دبس الطماطم ودبس الفلفل الحار", price: 21 },
      { name_en: "Hummus Beiruti", name_ar: "حمص بيروتي", description_en: "Cooked chickpeas blended with parsley and garlic mixed with sesame tahini.", description_ar: "حبوب الحمص المطهوة مع البقدونس والثوم والممزوجة مع طحينة السمسم", price: 21 },
      { name_en: "Hummus with Meat", name_ar: "حمص باللحمة", description_en: "Cooked chickpeas blended with sesame tahini topped with meat pieces.", description_ar: "حبوب الحمص المطهوة والممزوجة مع طحينة السمسم ولحم رأس العصفور", price: 32 },
      { name_en: "Eggplant Moussaka", name_ar: "مسقعة باذنجان", description_en: "Crispy bread slices mixed with tomato sauce topped with eggplant pieces.", description_ar: "شرائح الخبز المقرمش الممزوجة مع صلصة الطماطم واللبن وقطع الباذنجان", price: 22 },
      { name_en: "Grape Leaves", name_ar: "ورق عنب", description_en: "Rice wrapped in grape leaves, cooked with pomegranate molasses and Damascene spices.", description_ar: "الأرز الملفوف بورق العنب المطهوة مع دبس الرمان والتوابل الدمشقية", price: 18 },
    ],
  },
  {
    category_en: "Hot Appetizers",
    category_ar: "المقبلات الساخنة",
    image: hotImg,
    items: [
      { name_en: "Lentil Soup", name_ar: "شوربة عدس", description_en: "Cooked lentils with Damascene spices.", description_ar: "حبوب العدس المطهوة مع البهارات الدمشقية", price: 6 },
      { name_en: "Kubba", name_ar: "كبة مقلية", description_en: "4 pieces fried kibbeh stuffed with minced meat and nuts.", description_ar: "اقراص من عجينة الكبة المقلية محشوة باللحم المفروم والمكسرات", price: 27 },
      { name_en: "Cheese Burak", name_ar: "برك جبنة", description_en: "4 pieces fried pastries stuffed with Damascene cheeses.", description_ar: "4 أقراص من المعجنات المقلية المحشوة بالأجبان الدمشقية", price: 19 },
      { name_en: "Cheese Sticks", name_ar: "أصابع الجبن", description_en: "6 pieces fried cheese sticks stuffed with mozzarella.", description_ar: "6 أصابع جبن مقلية محشوة بالموزريلا", price: 21 },
      { name_en: "Freekeh Plate", name_ar: "صحن فريكة", description_en: "A plate of cooked freekeh topped with nuts.", description_ar: "صحن من الفريك المطهو والمزين بالمكسرات", price: 12 },
      { name_en: "Syrian Fries", name_ar: "صحن بطاطا", description_en: "Fried potato slices topped with Damascene spices.", description_ar: "شرائح من البطاطس المقلية والمضاف عليها البهارات الدمشقية", price: 10 },
    ],
  },
  {
    category_en: "Salads",
    category_ar: "السلطات",
    image: saladImg,
    items: [
      { name_en: "Tabbouleh", name_ar: "تبولة", description_en: "A mix of parsley, tomatoes, onions, and bulgur topped with olive oil and lemon.", description_ar: "خليط من البقدونس والطماطم والبصل والبرغل عليها زيت الزيتون والليمون", price: 24 },
      { name_en: "Fattoush", name_ar: "فتوش", description_en: "A mix of leafy greens, tomatoes, onions and radishes, garnished with crispy bread slices.", description_ar: "خليط من الورقيات والطماطم والبصل والفجل المزينة بشرائح الخبز المقرمش", price: 24 },
      { name_en: "Watercress Salad", name_ar: "سلطة جرجير", description_en: "A mix of arugula, onions, and tomatoes, topped with pomegranate and a special Damascene mix.", description_ar: "خليط من الجرجير والبصل والطماطم مع الرمان وخلطة الخال الدمشقي المميزة", price: 24 },
    ],
  },
  {
    category_en: "Chicken Shawarma",
    category_ar: "شاورما دجاج",
    image: shawarmaImg,
    items: [
      { name_en: "Chicken Shawarma Sandwich", name_ar: "ساندوتش شاورما دجاج", description_en: "A sandwich made of chicken shawarma slices covered with garlic, pickles, and wrapped in fresh saj bread.", description_ar: "ساندوتش من شرحات شاورما الدجاج مغطاة بالثوم والمخلل الملفوفة بخبز الصاج الطازج.", price: 13 },
      { name_en: "Chicken Shawarma Pieces", name_ar: "شاورما دجاج عربي", description_en: "6 pieces of chicken shawarma served with fried potato slices, garlic, pickles.", description_ar: "6 قطع من شاورما الدجاج تقدم مع شرحات البطاطس المقلية والثوم والمخلل", price: 24 },
      { name_en: "Fattah Chicken Shawarma", name_ar: "فتة شاورما دجاج", description_en: "Chicken shawarma slices with crispy bread, tahini, and Damascene spices.", description_ar: "فتة من شاورما الدجاج مع الخبز المقرمش والطحينة وتوابل الخال الدمشقي", price: 35 },
    ],
  },
];

export const menu: MenuCategory[] = raw.map((c: any) => ({
  id: slug(c.category_en),
  category_en: c.category_en,
  category_ar: c.category_ar,
  image: c.image,
  items: c.items.map((it: any) => ({ ...it, id: slug(c.category_en) + "-" + slug(it.name_en) })),
}));
