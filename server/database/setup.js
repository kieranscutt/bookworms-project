require("dotenv").config();
const fs = require("fs");
// const path = require("path");
const db = require("./connect");

const sql = fs.readFileSync("./database/setup.sql").toString();
// const sql = fs.readFileSync(path.join(__dirname, "./setup.sql")).toString();

// start of images

// const image1 = fs.readFileSync(
//   "./database/img/The Girl with the Dragon Tattoo.jpg"
// );
// const image2 = fs.readFileSync("./database/img/The Da Vinci Code.jpg");
// const image3 = fs.readFileSync("./database/img/The Silent Patient.jpg");
// const image4 = fs.readFileSync("./database/img/Gone Baby Gone.jpg");
// const image5 = fs.readFileSync("./database/img/The Girl Before.jpg");
// const image6 = fs.readFileSync("./database/img/The Woman in the Window.jpg");
// const image7 = fs.readFileSync("./database/img/The Couple Next Door.jpg");
// const image8 = fs.readFileSync("./database/img/The Girl on the Bridge.jpg");
// const image9 = fs.readFileSync("./database/img/Sharp Objects.jpg");
// const image10 = fs.readFileSync("./database/img/The Silent Corner.jpg");
// const image11 = fs.readFileSync(
//   "./database/img/The Adventures of Sherlock Holmes.jpg"
// );
// const image12 = fs.readFileSync(
//   "./database/img/Murder on the Orient Express.jpg"
// );
// const image13 = fs.readFileSync("./database/img/The Maltese Falcon.jpg");
// const image14 = fs.readFileSync("./database/img/The Big Sleep.jpg");
// const image15 = fs.readFileSync("./database/img/Gorky Park.jpg");
// const image16 = fs.readFileSync(
//   "./database/img/The Hound of the Baskervilles.jpg"
// );
// const image17 = fs.readFileSync(
//   "./database/img/The Adventures of Father Brown.jpg"
// );
// const image18 = fs.readFileSync("./database/img/Rebecca.jpg");
// const image19 = fs.readFileSync(
//   "./database/img/The No. 1 Ladies' Detective Agency.jpg"
// );
// const image20 = fs.readFileSync("./database/img/The Moonstone.jpg");
// const image21 = fs.readFileSync("./database/img/The Wedding Date.jpg");
// const image22 = fs.readFileSync("./database/img/The Hating Game.jpg");
// const image23 = fs.readFileSync("./database/img/Me Before You.jpg");
// const image24 = fs.readFileSync("./database/img/The Notebook.jpg");
// const image25 = fs.readFileSync("./database/img/Outlander.jpg");
// const image26 = fs.readFileSync("./database/img/The Rosie Project.jpg");
// const image27 = fs.readFileSync("./database/img/Eleanor & Park.jpg");
// const image28 = fs.readFileSync("./database/img/The Fault in Our Stars.jpg");
// const image29 = fs.readFileSync("./database/img/The Time Traveler's Wife.jpg");
// const image30 = fs.readFileSync("./database/img/One Day.jpg");
// const image31 = fs.readFileSync("./database/img/Where the Wild Things Are.jpg");
// const image32 = fs.readFileSync("./database/img/The Chronicles of Narnia.jpg");
// const image33 = fs.readFileSync(
//   "./database/img/The Very Hungry Caterpillar.jpg"
// );
// const image34 = fs.readFileSync(
//   "./database/img/Charlie and the Chocolate Factory.jpg"
// );
// const image35 = fs.readFileSync("./database/img/The Secret Garden.jpg");
// const image36 = fs.readFileSync("./database/img/Diary of a Wimpy Kid.jpg");
// const image37 = fs.readFileSync("./database/img/The Cat in the Hat.jpg");
// const image38 = fs.readFileSync("./database/img/Goodnight Moon.jpg");
// const image39 = fs.readFileSync("./database/img/The Little Prince.jpg");
// const image40 = fs.readFileSync("./database/img/The BFG.jpg");
// const image41 = fs.readFileSync("./database/img/The Hobbit.jpg");
// const image42 = fs.readFileSync("./database/img/Jurassic Park.jpg");
// const image43 = fs.readFileSync("./database/img/The Bourne Identity.jpg");
// const image44 = fs.readFileSync("./database/img/Treasure Island.jpg");
// const image45 = fs.readFileSync("./database/img/The Hunger Games.jpg");
// const image46 = fs.readFileSync(
//   "./database/img/The Adventures of Tom Sawyer.jpg"
// );
// const image47 = fs.readFileSync("./database/img/The Maze Runner.jpg");
// const image48 = fs.readFileSync("./database/img/Ready Player One.jpg");
// const image49 = fs.readFileSync("./database/img/The Count of Monte Cristo.jpg");
// const image50 = fs.readFileSync("./database/img/Ender's Game.jpg");

// // Convert the image files into Buffers
// const imageBuffer1 = Buffer.from(image1);
// const imageBuffer2 = Buffer.from(image2);
// const imageBuffer3 = Buffer.from(image3);
// const imageBuffer4 = Buffer.from(image4);
// const imageBuffer5 = Buffer.from(image5);
// const imageBuffer6 = Buffer.from(image6);
// const imageBuffer7 = Buffer.from(image7);
// const imageBuffer8 = Buffer.from(image8);
// const imageBuffer9 = Buffer.from(image9);
// const imageBuffer10 = Buffer.from(image10);
// const imageBuffer11 = Buffer.from(image11);
// const imageBuffer12 = Buffer.from(image12);
// const imageBuffer13 = Buffer.from(image13);
// const imageBuffer14 = Buffer.from(image14);
// const imageBuffer15 = Buffer.from(image15);
// const imageBuffer16 = Buffer.from(image16);
// const imageBuffer17 = Buffer.from(image17);
// const imageBuffer18 = Buffer.from(image18);
// const imageBuffer19 = Buffer.from(image19);
// const imageBuffer20 = Buffer.from(image20);
// const imageBuffer21 = Buffer.from(image21);
// const imageBuffer22 = Buffer.from(image22);
// const imageBuffer23 = Buffer.from(image23);
// const imageBuffer24 = Buffer.from(image24);
// const imageBuffer25 = Buffer.from(image25);
// const imageBuffer26 = Buffer.from(image26);
// const imageBuffer27 = Buffer.from(image27);
// const imageBuffer28 = Buffer.from(image28);
// const imageBuffer29 = Buffer.from(image29);
// const imageBuffer30 = Buffer.from(image30);
// const imageBuffer31 = Buffer.from(image31);
// const imageBuffer32 = Buffer.from(image32);
// const imageBuffer33 = Buffer.from(image33);
// const imageBuffer34 = Buffer.from(image34);
// const imageBuffer35 = Buffer.from(image35);
// const imageBuffer36 = Buffer.from(image36);
// const imageBuffer37 = Buffer.from(image37);
// const imageBuffer38 = Buffer.from(image38);
// const imageBuffer39 = Buffer.from(image39);
// const imageBuffer40 = Buffer.from(image40);
// const imageBuffer41 = Buffer.from(image41);
// const imageBuffer42 = Buffer.from(image42);
// const imageBuffer43 = Buffer.from(image43);
// const imageBuffer44 = Buffer.from(image44);
// const imageBuffer45 = Buffer.from(image45);
// const imageBuffer46 = Buffer.from(image46);
// const imageBuffer47 = Buffer.from(image47);
// const imageBuffer48 = Buffer.from(image48);
// const imageBuffer49 = Buffer.from(image49);
// const imageBuffer50 = Buffer.from(image50);
// const imagePath1 = path.join(
//   __dirname,
//   "./img/The Girl with the Dragon Tattoo.jpg"
// );
// const imagePath2 = path.join(__dirname, "./img/The Da Vinci Code.jpg");
// const imagePath3 = path.join(__dirname, "./img/The Silent Patient.jpg");
// const imagePath4 = path.join(__dirname, "./img/Gone Baby Gone.jpg");
// const imagePath5 = path.join(__dirname, "./img/The Girl Before.jpg");
// const imagePath6 = path.join(__dirname, "./img/The Woman in the Window.jpg");
// const imagePath7 = path.join(__dirname, "./img/The Couple Next Door.jpg");
// const imagePath8 = path.join(__dirname, "./img/The Girl on the Bridge.jpg");
// const imagePath9 = path.join(__dirname, "./img/Sharp Objects.jpg");

// const imageBuffer1 = fs.readFileSync(imagePath1);
// const imageBuffer2 = fs.readFileSync(imagePath2);
// const imageBuffer3 = fs.readFileSync(imagePath3);
// const imageBuffer4 = fs.readFileSync(imagePath4);
// const imageBuffer5 = fs.readFileSync(imagePath5);
// const imageBuffer6 = fs.readFileSync(imagePath6);
// const imageBuffer7 = fs.readFileSync(imagePath7);
// const imageBuffer8 = fs.readFileSync(imagePath8);
// const imageBuffer9 = fs.readFileSync(imagePath9);

// end of images

db.query(sql)
  .then((data) => {
    db.end();
    console.log("Setup complete");
  })
  .catch((error) => console.log(error));

// db.query(
//   sql
//   // [
//   //   imageBuffer1,
//   //   imageBuffer2,
//   //   imageBuffer3,
//   //   imageBuffer4,
//   //   imageBuffer5,
//   //   imageBuffer6,
//   //   imageBuffer7,
//   //   imageBuffer8,
//   //   imageBuffer9,
//   //   imageBuffer10,
//   //   imageBuffer11,
//   //   imageBuffer12,
//   //   imageBuffer13,
//   //   imageBuffer14,
//   //   imageBuffer15,
//   //   imageBuffer16,
//   //   imageBuffer17,
//   //   imageBuffer18,
//   //   imageBuffer19,
//   //   imageBuffer20,
//   //   imageBuffer21,
//   //   imageBuffer22,
//   //   imageBuffer23,
//   //   imageBuffer24,
//   //   imageBuffer25,
//   //   imageBuffer26,
//   //   imageBuffer27,
//   //   imageBuffer28,
//   //   imageBuffer29,
//   //   imageBuffer30,
//   //   imageBuffer31,
//   //   imageBuffer32,
//   //   imageBuffer33,
//   //   imageBuffer34,
//   //   imageBuffer35,
//   //   imageBuffer36,
//   //   imageBuffer37,
//   //   imageBuffer38,
//   //   imageBuffer39,
//   //   imageBuffer40,
//   //   imageBuffer41,
//   //   imageBuffer42,
//   //   imageBuffer43,
//   //   imageBuffer44,
//   //   imageBuffer45,
//   //   imageBuffer46,
//   //   imageBuffer47,
//   //   imageBuffer48,
//   //   imageBuffer49,
//   //   imageBuffer50,
// )
//   .then((data) => console.log("Set-up complete."))
//   .catch((error) => console.log(error));
