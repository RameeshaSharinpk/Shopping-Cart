var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"Apple iPhone 12",
      category:"Mobile",
      description:"Fingerprint-resistant Oleophobic Coating Screen",
      image:"https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901540-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzk2NDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRlL2g1OS85NDA3NzU2NzMwMzk4LmpwZ3xhMjNlZTYyZDE0NWQxODIwZTZlMzAyMGZhZmFlMWNkZGMxZDU0YWMxYzE0NWYwYjFhMjQ1YWIzMjhlMDliYTRm"
    },
    {
      name:"Samsung Galaxy A12",
      category:"Mobile",
      description:"Fingerprint-resistant Oleophobic Coating Screen",
      image:"https://images.samsung.com/is/image/samsung/p6pim/uk/sm-a127fzbveua/gallery/uk-galaxy-a12-a127-sm-a127fzbveua-486074586?$720_576_PNG$"
    },
    {
      name:"Xiaomi 11 Lite NE 5G",
      category:"Mobile",
      description:"Fingerprint-resistant Oleophobic Coating Screen",
      image:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1632833370.2214110.png"
    },
    {
      name:"OPPO A31 ",
      category:"Mobile",
      description:"Fingerprint-resistant Oleophobic Coating Screen",
      image:"https://m.media-amazon.com/images/I/61CnyJ-IbML._SL1500_.jpg"
    }
  ]
  
  res.render('index', {products,admin:false});
});

module.exports = router;
