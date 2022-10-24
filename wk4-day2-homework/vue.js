var container = new Vue({
  el: "#container",
  data: {
    obj1: {
      author: "Brianna",
      date: " February 18, 2021 @ 3:30 pm",
      paragraph:
        "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
    },
    obj2: {
      author: "LINH ",
      date: "February 15, 2021 @ 9:46 am ",
      paragraph:
        "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
    },
    obj3: {
      author: "CATHERINE LEONARDO ",
      date: "February 13, 2021 @ 12:58 pm ",
      paragraph:
        "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure. ",
    },
    obj4: {
      author: "KALI ",
      date: "February 13, 2021 @ 11:31 am ",
      paragraph:
        "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
    },
    text: "REPLY", //is this correct?

    //convert image to vue

    mainimage: '<img src = " images/chili.jpg" width= "180" >',
  },
  components: {
    foodblog: {
      template: "<span>Food Blog</span>",
    },
    comments: {
      template: "<h2>Comments</h2>",
    },
  },
});
components
