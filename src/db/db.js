import { v4 as uuidv4 } from "uuid";

export const db = [
  {
    restaurantName: "Mc Donny",
    id: uuidv4(),
    menu: {
      burgers: [
        {
          productName: "Big Donny",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Big-Mac:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Two natural beef steaks, onion, pickled cucumber, cheddar cheese, fresh salad, dressed with a special sauce, in a bun with sesame seeds.",
          price: 160,
          id: uuidv4(),
        },
        {
          productName: "Hamburger",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Hamburger:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Natural beef steak, onion, a piece of pickled cucumber, seasoned with mustard and ketchup, in a fragrant wheat flour bun.",
          price: 80,
          id: uuidv4(),
        },
        {
          productName: "Big Feasty",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/Big%20Tasty%20Single:product-header-desktop?wid=829&hei=453&dpr=off",
          description:
            "Natural beef combined with fresh vegetables and processed Emmental cheese.",
          price: 110,
          id: uuidv4(),
        },
        {
          productName: "Fishy Burger",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_File-O-Fish:product-header-desktop?wid=829&hei=453&dpr=off",
          description:
            "Tender fish fillet from cod fish, fried in crispy breading, half a piece of Cheddar cheese, seasoned with a spicy sauce, in a fluffy wheat flour bun.",
          price: 100,
          id: uuidv4(),
        },
        {
          productName: "Lil Chicken",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McJunior:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Juicy chicken cutlet with crispy pieces of cucumber under 'Honey-mustard' sauce in a fragrant bun made of wheat flour.",
          price: 80,
          id: uuidv4(),
        },
      ],
      fries: [
        {
          productName: "Small fries",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Frites_Small_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Selected potatoes, fried in natural oil and slightly salted.",
          price: 40,
          id: uuidv4(),
        },
        {
          productName: "Medium fries",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Frites_Middle_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Selected potatoes, fried in natural oil and slightly salted.",
          price: 60,
          id: uuidv4(),
        },
        {
          productName: "Big fries",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Frites_Large_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Selected potatoes, fried in natural oil and slightly salted.",
          price: 80,
          id: uuidv4(),
        },
      ],
      chicken: [
        {
          productName: "ChickNuggets, 4",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Nuggets_4pcs_v2:product-header-desktop?wid=829&hei=453&dpr=off",
          description:
            "Pieces of tender chicken fillet fried in crispy breading.",
          price: 50,
          id: uuidv4(),
        },
        {
          productName: "ChickNuggets, 9",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Nuggets_9pcs_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Pieces of tender chicken fillet fried in crispy breading.",
          price: 90,
          id: uuidv4(),
        },
        {
          productName: "ChickStrips, 6",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_STRIPS_6pcs_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Strips of white juicy chicken fillet fried in crispy breading. How many pieces do you have? Three to eat alone, or six for yourself and a friend, or twelve for a large company?",
          price: 80,
          id: uuidv4(),
        },
        {
          productName: "ChickStrips, 12",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_STRIPS_12pcs_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description:
            "Strips of white juicy chicken fillet fried in crispy breading. How many pieces do you have? Three to eat alone, or six for yourself and a friend, or twelve for a large company?",
          price: 120,
          id: uuidv4(),
        },
      ],
      drinks: [
        {
          productName: "Coca-Cola",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CocaCola_400ml_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description: "Worldwide famous refreshing drink.",
          price: 40,
          id: uuidv4(),
        },
        {
          productName: "Fanta",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Fanta_400ml_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description: "Worldwide famous refreshing drink.",
          price: 40,
          id: uuidv4(),
        },
        {
          productName: "Sprite",
          img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Sprite_400ml_v2:product-header-desktop?wid=829&hei=455&dpr=off",
          description: "Worldwide famous refreshing drink.",
          price: 40,
          id: uuidv4(),
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
          productName: "Burger Chief",
          img: "https://order.kfc.ua/images/menu/KFC%20Ukraine/336x224_27d0422124eae4c53c1030665fb86f68.jpg",
          description:
            "Hamburger sauce, fillet in original breading, iceberg lettuce and tomatoes with corn bun.",
          price: 150,
          id: uuidv4(),
        },
        {
          productName: "Flexer",
          img: "https://order.kfc.ua/images/menu/KFC%20Ukraine/336x224_f5911cbf685a597c420aec558be724fe.jpg",
          description:
            "Fillet in spicy breading, Iceberg salad with mayonnaise on a wheat bun with black and white sesame seeds.",
          price: 145,
          id: uuidv4(),
        },
        {
          productName: "Luxury Cheese Burger",
          img: "https://order.kfc.ua/images/menu/KFC%20Ukraine/336x224_109d74e6690ff786c43a2158d6b2e8bf.jpg",
          description:
            "Mustard sauce, ketchup, fillet in original breading, Cheddar cheese, cucumbers on a wheat bun with corn sprinkles, salad and tomato slices.",
          price: 160,
          id: uuidv4(),
        },
        {
          productName: "Crispy Burger",
          img: "https://order.kfc.ua/images/menu/KFC%20Ukraine/336x224_1a1a5c3750c5da701bbf757275a7773e.jpg",
          description:
            "Two spicy juicy chicken fillets, pickled cucumbers, cheese, barbecue sauce and mayonnaise.",
          price: 130,
          id: uuidv4(),
        },
      ],
      fries: [
        {
          productName: "Little Fries",
          img: "https://allgomart.net/wp-content/uploads/2025/01/French-Fries.png",
          description: "Little Fries.",
          price: 30,
          id: uuidv4(),
        },
        {
          productName: "Fries Jar",
          img: "https://www.to-go-packaging.com/media/image/product/19412/md/p-snack-box-pure-mit-klappdeckel-klein-braun-unbedruckt.jpg",
          description: "Fries Jar.",
          price: 70,
          id: uuidv4(),
        },
        {
          productName: "Home-made Fries",
          img: "https://www.uman.prontopizza.ua/wp-content/uploads/2020/06/photo_2021-01-08_15-34-50.jpg",
          description:
            "Home-made crumbly and crispy potatoes are a favorite taste now at CFK!",
          price: 80,
          id: uuidv4(),
        },
        {
          productName: "Potato Pie",
          img: "https://ukrainefood.info/uploads/img/x74_52ab239b6fa14.jpg",
          description: "Crispy potato pie made from selected potatoes.",
          price: 70,
          id: uuidv4(),
        },
      ],
      chicken: [
        {
          productName: "Chicken Wings",
          img: "https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC_HUN/09_Csirke/440x440/kfc_hun_3_hw_440x440.png",
          description: "3 spicy chicken wings in crispy breading",
          price: 30,
          id: uuidv4(),
        },
        {
          productName: "Chicken Wings",
          img: "https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC_HUN/09_Csirke/440x440/kfc_hun_8_hw_440x440.png",
          description: "8 spicy chicken wings in crispy breading",
          price: 55,
          id: uuidv4(),
        },
        {
          productName: "Tender chicken fillet",
          img: "https://kfcrestaurants.be/wp-content/uploads/2025/03/6-NGTS-Groot.jpg",
          description: "5 pieces of tender chicken fillet in crispy breading",
          price: 70,
          id: uuidv4(),
        },
        {
          productName: "Spicy chicken fillet",
          img: "https://kfcrestaurants.be/wp-content/uploads/2025/03/6-NGTS-Groot.jpg",
          description:
            "5 pieces of tender chicken fillet, fried in spicy, crispy breading",
          price: 70,
          id: uuidv4(),
        },
      ],
      drinks: [
        {
          productName: "Mirinda",
          img: "https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC_CRO/12_Drinks/440x440/kfc_cro_mirinda_05l_440x440.png",
          description: "Mirinda 0.5 l (bottle)",
          price: 45,
          id: uuidv4(),
        },
        {
          productName: "Pepsi",
          img: "https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC_CRO/12_Drinks/440x440/kfc_cro_pepsi_05l_440x440.png",
          description: "Pepsi 0.5 l (bottle)",
          price: 45,
          id: uuidv4(),
        },
        {
          productName: "7up",
          img: "https://sawepecomcdn.blob.core.windows.net/kfc-web-ordering/KFC_CRO/12_Drinks/440x440/kfc_cro_7up_05l_440x440.png",
          description: "7up 0.5 l (bottle)",
          price: 45,
          id: uuidv4(),
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
          productName: "Indianapolis Burger",
          img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ie/1a7bff1617c06a3917801deb76ba68d1da749164-1200x800.png?w=750&q=40&fit=max&auto=format",
          description:
            "Brioche Bun (Ø 110), Beef Cutlet, Toasted Cheese, Fresh Tomato, Iceberg Salad, Caramelized Onion, Mustard sauce, Chicken sauce.",
          price: 180,
          id: uuidv4(),
        },
        {
          productName: "Cowboy Burger",
          img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ie/4ad93a6663d40fc486e2854045f1fca4340c5e67-1200x800.png?w=750&q=40&fit=max&auto=format",
          description:
            "Brioche Bun (Ø110), Beef Cutlet, Toaster Cheese, Fresh Tomato, Pickled Cucumber, Iceberg Salad, Pickled Onion (blue), BBQ Sauce, Cheese Sauce",
          price: 170,
          id: uuidv4(),
        },
        {
          productName: "Salmon Burger",
          img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ie/d288bf8a5fd053bd671b60d0b3df66f0d2a5f1f6-1200x800.png?w=750&q=40&fit=max&auto=format",
          description: "Bun, tartar sauce, fish cutlet, piece of cheese.",
          price: 120,
          id: uuidv4(),
        },
        {
          productName: "Illinois Burger",
          img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_ie/6f3314acbf8eba2ec9571c44489d4437aa09eb2c-1200x800.png?w=750&q=40&fit=max&auto=format",
          description:
            "Brioche bun (Ø110) Beef Cutlet, Toasted Cheese, Bacon (fried), Caramelized Pear, Arugula Salad, Pesto Sauce, American Mustard",
          price: 130,
          id: uuidv4(),
        },
      ],
      snacks: [
        {
          productName: "L Fries",
          img: "https://chicken-hut.te.ua/uploads/60798d6073424-min.png",
          description:
            "Delicious, deep-fried in vegetable oil and lightly salted potato straws with an appetizingly crispy crust and a soft, crumbly center.",
          price: 50,
          id: uuidv4(),
        },
        {
          productName: "CARAMEL POPCORN 150 G.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuKMjwqNhZBrm9T6cL9BSfVjaBbpTf4QyC1kaxb5rlCvpyvul85X6vqI&s=10",
          description: "CARAMEL POPCORN 150 G.",
          price: 80,
          id: uuidv4(),
        },
        {
          productName: "CHEESE POPCORN 150 G.",
          img: "https://zmfood.eu/wp-content/uploads/2026/08/popcorn-cheese-mr-check-bag-150g-v2-1-e1787334986279.jpg",
          description: "CHEESE POPCORN 150 G.",
          price: 80,
          id: uuidv4(),
        },
      ],
      chicken: [
        {
          productName: "Chicken Leg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_B5yO8Ipiy87ygUy9Hp4KMzEAE2iNRZ66DjJczgQzCFMhpyrl1QlBLfy&s=10",
          description:
            "Vegetable deep-fried chicken leg in original crispy breading.",
          price: 35,
          id: uuidv4(),
        },
        {
          productName: "Nuggets, 6",
          img: "https://chicken-hut.te.ua/uploads/60798cf4699bc-min.png",
          description: "Deep-fried chicken fillets in original breading.",
          price: 40,
          id: uuidv4(),
        },
        {
          productName: "Strips, 5",
          img: "https://chicken-hut.uz.ua/uploads/3eceqdueolicok8w4w.jpg",
          description:
            "Tender pieces of chicken fillet fried in vegetable deep-frying in original breading.",
          price: 60,
          id: uuidv4(),
        },
      ],
      drinks: [
        {
          productName: "RICH Juice, 1l",
          img: "https://chicken-hut.te.ua/uploads/60798e037c981-min.png",
          description: "RICH Juice, 1l",
          price: 70,
          id: uuidv4(),
        },
        {
          productName: "BURN 0,25l",
          img: "https://images.silpo.ua/v2/products/1000x1000/webp/b12e501a-0dd1-4489-b9ae-2207253f372b.png",
          description: "BURN 0,25l",
          price: 50,
          id: uuidv4(),
        },
        {
          productName: "NESTEA",
          img: "https://images.silpo.ua/v2/products/1000x1000/webp/08cbeed1-dafe-4d38-ba96-05649fcc5536.png",
          description: "NESTEA",
          price: 50,
          id: uuidv4(),
        },
      ],
    },
  },
];
