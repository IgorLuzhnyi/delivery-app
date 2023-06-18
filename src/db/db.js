import { v4 as uuidv4 } from "uuid";

export const db = [
  {
    restaurantName: "Mc Donny",
    id: uuidv4(),
    menu: {
      burgers: [
        {
          mealName: "Big Donny",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/BIG_MAC:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Two natural beef steaks, onion, pickled cucumber, cheddar cheese, fresh salad, dressed with a special sauce, in a bun with sesame seeds.",
        },
        {
          mealName: "Hamburger",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_Hamburger:product-header-desktop?wid=830&hei=456&dpr=off",
          description:
            "Natural beef steak, onion, a piece of pickled cucumber, seasoned with mustard and ketchup, in a fragrant wheat flour bun.",
        },
        {
          mealName: "Big Feasty",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/BIG_TASTY:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Natural beef combined with fresh vegetables and processed Emmental cheese.",
        },
        {
          mealName: "Fishy Burger",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_File-o-Fish-1:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Tender fish fillet from cod fish, fried in crispy breading, half a piece of Cheddar cheese, seasoned with a spicy sauce, in a fluffy wheat flour bun.",
        },
        {
          mealName: "Lil Chicken",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/Chicken_junior:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Juicy chicken cutlet with crispy pieces of cucumber under 'Honey-mustard' sauce in a fragrant bun made of wheat flour.",
        },
      ],
      fries: [
        {
          mealName: "Small fries",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/FFSmall:product-header-desktop?wid=830&hei=458&dpr=off",
          description:
            "Selected potatoes, fried in natural oil and slightly salted.",
        },
        {
          mealName: "Medium fries",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/FFMedium:product-header-desktop?wid=830&hei=458&dpr=off",
          description:
            "Selected potatoes, fried in natural oil and slightly salted.",
        },
        {
          mealName: "Big fries",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/FFLarge:product-header-desktop?wid=830&hei=456&dpr=off",
          description:
            "Selected potatoes, fried in natural oil and slightly salted.",
        },
      ],
      chicken: [
        {
          mealName: "ChickNuggets, 4",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/Nuggets_4:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Pieces of tender chicken fillet fried in crispy breading.",
        },
        {
          mealName: "ChickNuggets, 9",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/Nuggets_9:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Pieces of tender chicken fillet fried in crispy breading.",
        },
        {
          mealName: "ChickStrips, 6",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/stripes_6-pcs-1:product-header-desktop?wid=746&hei=692&dpr=off",
          description:
            "Strips of white juicy chicken fillet fried in crispy breading. How many pieces do you have? Three to eat alone, or six for yourself and a friend, or twelve for a large company?",
        },
        {
          mealName: "ChickStrips, 12",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/stripes_box_12-pcs-1:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Strips of white juicy chicken fillet fried in crispy breading. How many pieces do you have? Three to eat alone, or six for yourself and a friend, or twelve for a large company?",
        },
      ],
      drinks: [
        {
          mealName: "Coca-Cola",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/CocaColaSmall:product-header-desktop?wid=830&hei=456&dpr=off",
          description: "Worldwide famous refreshing drink.",
        },
        {
          mealName: "Fanta",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/FantaSmall:product-header-desktop?wid=830&hei=456&dpr=off",
          description: "Worldwide famous refreshing drink.",
        },
        {
          mealName: "Sprite",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/SpriteSmall:product-header-desktop?wid=830&hei=456&dpr=off",
          description: "Worldwide famous refreshing drink.",
        },
      ],
    },
  },
  {
    restaurantName: "CFK",
    id: uuidv4(),
    menu: {
      burgers: [
        {
          mealName: "Burger Chief",
          img: "https://www.kfc-ukraine.com/admin/files/4184.png",
          description:
            "Hamburger sauce, fillet in original breading, iceberg lettuce and tomatoes with corn bun.",
        },
        {
          mealName: "Flexer",
          img: "https://www.kfc-ukraine.com/admin/files/4192.png",
          description:
            "Fillet in spicy breading, Iceberg salad with mayonnaise on a wheat bun with black and white sesame seeds.",
        },
        {
          mealName: "Luxury Cheese Burger",
          img: "https://www.kfc-ukraine.com/admin/files/4185.png",
          description:
            "Mustard sauce, ketchup, fillet in original breading, Cheddar cheese, cucumbers on a wheat bun with corn sprinkles, salad and tomato slices.",
        },
        {
          mealName: "Crispy Burger",
          img: "https://www.kfc-ukraine.com/admin/files/4127.jpg",
          description:
            "Two spicy juicy chicken fillets, pickled cucumbers, cheese, barbecue sauce and mayonnaise.",
        },
      ],
      fries: [
        {
          mealName: "Little Fries",
          img: "https://www.kfc-ukraine.com/admin/files/3830.jpg",
          description: "Little Fries.",
        },
        {
          mealName: "Fries Jar",
          img: "https://www.kfc-ukraine.com/admin/files/3833.jpg",
          description: "Fries Jar.",
        },
        {
          mealName: "Home-made Fries",
          img: "https://www.kfc-ukraine.com/admin/files/3834.jpg",
          description:
            "Home-made crumbly and crispy potatoes are a favorite taste now at CFK!",
        },
        {
          mealName: "Potato Pie",
          img: "https://www.kfc-ukraine.com/admin/files/3832.jpg",
          description: "Crispy potato pie made from selected potatoes.",
        },
      ],
      chicken: [
        {
          mealName: "Chicken Wings",
          img: "https://www.kfc-ukraine.com/admin/files/3786.jpg",
          description: "3 spicy chicken wings in crispy breading",
        },
        {
          mealName: "Chicken Wings",
          img: "https://www.kfc-ukraine.com/admin/files/4096.png",
          description: "8 spicy chicken wings in crispy breading",
        },
        {
          mealName: "Tender chicken fillet",
          img: "https://www.kfc-ukraine.com/admin/files/4053.jpg",
          description: "5 pieces of tender chicken fillet in crispy breading",
        },
        {
          mealName: "Spicy chicken fillet",
          img: "https://www.kfc-ukraine.com/admin/files/4099.png",
          description:
            "5 pieces of tender chicken fillet, fried in spicy, crispy breading",
        },
      ],
      drinks: [
        {
          mealName: "Mirinda",
          img: "https://www.kfc-ukraine.com/admin/files/4133.jpg",
          description: "Mirinda 0.5 l (bottle)",
        },
        {
          mealName: "Pepsi",
          img: "https://www.kfc-ukraine.com/admin/files/3760.jpg",
          description: "Pepsi 0.5 l (bottle)",
        },
        {
          mealName: "7up",
          img: "https://www.kfc-ukraine.com/admin/files/4134.jpg",
          description: "7up 0.5 l (bottle)",
        },
      ],
    },
  },
  {
    restaurantName: "Chicken Home",
    id: uuidv4(),
    menu: {
      burgers: [
        {
          mealName: "Indianapolis Burger",
          img: "https://chicken-hut.ua/images/gallery/698/chicken-hut-20211012140616-64379.jpg",
          description:
            "Brioche Bun (Ø 110), Beef Cutlet, Toasted Cheese, Fresh Tomato, Iceberg Salad, Caramelized Onion, Mustard sauce, Chicken sauce.",
        },
        {
          mealName: "Cowboy Burger",
          img: "https://chicken-hut.ua/images/gallery/699/chicken-hut-20211012141621-58555.jpg",
          description:
            "Brioche Bun (Ø110), Beef Cutlet, Toaster Cheese, Fresh Tomato, Pickled Cucumber, Iceberg Salad, Pickled Onion (blue), BBQ Sauce, Cheese Sauce",
        },
        {
          mealName: "Salmon Burger",
          img: "https://chicken-hut.ua/images/gallery/291/chicken-hut-20201229103249-17886.jpg",
          description: "Bun, tartar sauce, fish cutlet, piece of cheese.",
        },
        {
          mealName: "Illinois Burger",
          img: "https://chicken-hut.ua/images/gallery/700/chicken-hut-20211012141908-98980.jpg",
          description:
            "Brioche bun (Ø110) Beef Cutlet, Toasted Cheese, Bacon (fried), Caramelized Pear, Arugula Salad, Pesto Sauce, American Mustard",
        },
      ],
      snacks: [
        {
          mealName: "L Fries",
          img: "https://chicken-hut.ua/images/gallery/78/chicken-hut-20210629101912-58433.jpg",
          description:
            "Delicious, deep-fried in vegetable oil and lightly salted potato straws with an appetizingly crispy crust and a soft, crumbly center.",
        },
        {
          mealName: "CARAMEL POPCORN 150 G.",
          img: "https://chicken-hut.ua/images/gallery/694/chicken-hut-20210909132443-40373.jpg",
          description: "CARAMEL POPCORN 150 G.",
        },
        {
          mealName: "CHEESE POPCORN 150 G.",
          img: "https://chicken-hut.ua/images/gallery/694/chicken-hut-20210909132443-40373.jpg",
          description: "CHEESE POPCORN 150 G.",
        },
      ],
      chicken: [
        {
          mealName: "Chicken Leg",
          img: "https://chicken-hut.ua/images/gallery/41/chicken-homilka.jpg",
          description:
            "Vegetable deep-fried chicken leg in original crispy breading.",
        },
        {
          mealName: "Nuggets, 6",
          img: "https://chicken-hut.ua/images/gallery/82/chicken-hut-20190815145000-94222.jpg",
          description: "Deep-fried chicken fillets in original breading.",
        },
        {
          mealName: "Strips, 5",
          img: "https://chicken-hut.ua/images/gallery/136/chicken-hut-20210108150441-74654.jpg",
          description:
            "Tender pieces of chicken fillet fried in vegetable deep-frying in original breading.",
        },
      ],
      drinks: [
        {
          mealName: "RICH Juice, 1l",
          img: "https://chicken-hut.ua/images/gallery/143/chicken-hut-20170626163338-67337.jpg",
          description: "RICH Juice, 1l",
        },
        {
          mealName: "BURN 0,25l",
          img: "https://chicken-hut.ua/images/gallery/120/chicken-hut-20170621090829-21526.jpg",
          description: "BURN 0,25l",
        },
        {
          mealName: "NESTEA",
          img: "https://chicken-hut.ua/images/gallery/124/chicken-hut-20170621122231-29000.jpg",
          description: "NESTEA",
        },
      ],
    },
  },
];
