const products = [
    {
        name: "PlayStation",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&thid=OSK.HEROwcfbds5VQidXmnMSdUaopJLxoGckL5yz4TrSTyk7fxY&mediaurl=https%3a%2f%2fmedia.gettyimages.com%2fphotos%2fnew-playstation-5-picture-id1287173816&exph=682&expw=1024&q=playstation+5&FORM=IRPRST&selectedIndex=0&cbid=OSK.HEROwcfbds5VQidXmnMSdUaopJLxoGckL5yz4TrSTyk7fxY&cbn=KnowledgeCard&idpp=overlayview&ajaxhist=0&ajaxserp=0",
        description:
          "Sony planning to put in-game ads in PlayStation: Reports, Marketing ...",
        price: 599,
        countInStock: 20,
    },
    {
        name: "iPhone 15",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&ccid=rjpmalsq&id=865E15D5BC4BDACF1A0BA20E4C37AF04716C75F3&thid=OIP.rjpmalsqjg73WAD1I1DydwHaEK&mediaurl=https%3A%2F%2Ftrak.in%2Fwp-content%2Fuploads%2F2022%2F09%2F111E26E4-58BF-44DE-975F-CFA6B12E1E05-1280x720-1.jpeg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.ae3a666a5b2a8e0ef75800f52350f277%3Frik%3D83VscQSvN0wOog%26pid%3DImgRaw%26r%3D0&exph=720&expw=1280&q=iphone+15+pro+max&simid=608027181975937729&form=IRPRST&ck=06583A0B4FDE1FAF866DF1BE54C26469&selectedindex=2&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
        description:
          "Sizzling Details Of iPhone 15 Revealed: iPhone 15 Pro Max Will Be ...", 
        price: 2500,
        countInStock: 100,
    },
    {
        name: "Most confortable men's casualy shoes",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&ccid=XdCPJSZ4&id=BB96F252A5BD9A29813B61909A22E65E27C3680A&thid=OIP.XdCPJSZ4Vo3Wy33pr2W_CwHaHa&mediaurl=https%3a%2f%2fguhaha.com%2fwp-content%2fuploads%2f2020%2f06%2fHe5f00c726d3745e7bdd33fca39d3cea9m-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5dd08f252678568dd6cb7de9af65bf0b%3frik%3dCmjDJ17mIpqQYQ%26pid%3dImgRaw%26r%3d0&exph=1400&expw=1400&q=sneakers&simid=608019747374321212&FORM=IRPRST&ck=D7EBD95AC71B5A007C98A055BF9D5717&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0",
        description:
          "Soft Breathable Fashion Sneakers Sport Shoes For Men - Guhaha Buy Classic Leather Legacy Sneakers Women's Footwear from Reebok. Find ...", 
        price: 189,
        countInStock: 23,
    },
    {
        name: "MacBOOK Pro",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&ccid=oWFlLTvR&id=2D1BBB4FB11932AA31CA86B8D0643866A66847D0&thid=OIP.oWFlLTvRi8SFTUZT62BxAwHaGR&mediaurl=https%3a%2f%2fi1.wp.com%2flaptopmedia.com%2fwp-content%2fuploads%2f2017%2f06%2fmacbook_pro_13_a_1143_0_0.jpg%3ffit%3d2040%252C1727%26ssl%3d1&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a161652d3bd18bc4854d4653eb607103%3frik%3d0EdopmY4ZNC4hg%26pid%3dImgRaw%26r%3d0&exph=1727&expw=2040&q=macbook+pro&simid=608009216108542659&FORM=IRPRST&ck=96524553FAB466FEE1EAF57078637F8F&selectedIndex=2&ajaxhist=0&ajaxserp=0",
        description:
          "LaptopMedia Apple MacBook Pro 13 (Early 2015) [Specs and Benchmarks ...", 
        price: 2000,
        countInStock: 55,
    },
    {
        name: "Dell laptop",
        imageUrl: 
         "https://tech.co.za/product/dell-inspiron-16-5630-16-laptop-i7-16gb-ram-512gb-ssd-win-11-home/?msclkid=13629064c18912dc8324f571076a3f1b&utm_source=bing&utm_medium=cpc&utm_campaign=Shopping%20Campaign%20-%20Laptops%20-%20ZA&utm_term=4586612760270657&utm_content=Laptops",
        description:
          "Dell Inspiron 16 5630 16″ Laptop - i7, 16GB RAM, 512GB SSD, Win 11 Home", 
        price: 1500,
        countInStock: 7,
    },
    {
        name: "Samsung Galaxy a13",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&ccid=oAGnAJ47&id=4E55B69DD6B9E7691DBA18357CEED1A450906A2C&thid=OIP.oAGnAJ47cP6oM0oISISdTwHaHa&mediaurl=https%3A%2F%2Favechi.co.ke%2Fmogefov%2F2022%2F04%2FSamsung-Galaxy-A13-Price-in-South-Africa-zar1-2048x2048.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.a001a7009e3b70fea8334a0848849d4f%3Frik%3DLGqQUKTR7nw1GA%26pid%3DImgRaw%26r%3D0&exph=2048&expw=2048&q=samsung+a13&simid=608022350114792405&form=IRPRST&ck=BD11A6C3868AB8C1BD7D4DB2A6AB7385&selectedindex=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
        description:
          "Samsung Galaxy A13 4GB 128GB Price in Kenya - Avechi...", 
        price: 350,
        countInStock: 26,
    },
    {
        name: "Casual Bag",
        imageUrl: 
         "https://lcpshop.net/product/unisex-messenger-bag-casual-bag/?msclkid=1dc45feedbb31babbd033afb1c31535f",
        description:
          "Unisex Messenger Bag Casual Bag", 
        price: 50,
        countInStock: 130,
    },
    {
        name: "Samsung Tv",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&ccid=0y6hys%2f3&id=63E836028FA3F5020688A416497EB934AF741774&thid=OIP.0y6hys_3Ztl5XUfgTGd0gwHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d32ea1cacff766d9795d47e04c677483%3frik%3ddBd0rzS5fkkWpA%26riu%3dhttp%253a%252f%252fmubaraktech.co.ke%252fwp-content%252fuploads%252f2020%252f10%252fSony-50-Inch-LED-Full-HD-Smart-TV-Black-KDL-50W660F-a.jpg%26ehk%3dQcCmO%252bkwjEK%252f%252bhu51QvloY4seVkd7QxSJk4p5dZosoA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1080&q=tv&simid=608012647808585863&FORM=IRPRST&ck=848435A026E7C0BC9344315909D8A63A&selectedIndex=1&ajaxhist=0&ajaxserp=0",
        description:
          "Sony 50 Inch LED Full HD Smart TV Black KDL 50W660F - Mubarak Tech Ltd", 
        price: 500,
        countInStock: 54,
    },
    {
        name: "Office Chairs",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailV2&ccid=JOJLewJP&id=A23E51723386686BCE0879C16784DD525862C1D5&thid=OIP.JOJLewJPTiSAyXv7vsgtfQHaHa&mediaurl=https%3a%2f%2fi5.walmartimages.com%2fasr%2f8a4292b6-0510-4683-b349-424f5ddd09d7_1.f151d19daac9f20651be59a255b342ea.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.24e24b7b024f4e2480c97bfbbec82d7d%3frik%3d1cFiWFLdhGfBeQ%26pid%3dImgRaw%26r%3d0&exph=3000&expw=3000&q=chairs+for+sale&simid=607990219488639122&FORM=IRPRST&ck=2A3EE8E70354E2E593EDFEE6B1F39472&selectedIndex=7&ajaxhist=0&ajaxserp=0",
        description:
          "top wasting time compiling reviews & use our list to make an informed purchase. Find and compare the best products based on price, features, ratings & reviews.", 
        price: 150,
        countInStock: 40,
    },
    {
        name: "Microwave",
        imageUrl: 
         "https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIIRP&sbisrc=ImgDropper&q=imgurl:https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FOIP.Kp02cfJFT_drIOVtSiQ_ZQHaHt%3Fw%3D160%26h%3D180%26c%3D7%26r%3D0%26o%3D5%26dpr%3D1.3%26pid%3D1.7&idpbck=1&selectedindex=0&id=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FOIP.Kp02cfJFT_drIOVtSiQ_ZQHaHt%3Fw%3D160%26h%3D180%26c%3D7%26r%3D0%26o%3D5%26dpr%3D1.3%26pid%3D1.7&ccid=gmonDm4r&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FOIP.Kp02cfJFT_drIOVtSiQ_ZQHaHt%3Fw%3D160%26h%3D180%26c%3D7%26r%3D0%26o%3D5%26dpr%3D1.3%26pid%3D1.7&exph=234&expw=208&vt=2&sim=11",
        description:
          "GE JES1145SHSS 1.1 cu. ft. Countertop Microwave in Stainless Steel ...", 
        price: 100,
        countInStock: 24,
    },
];

module.exports = products;