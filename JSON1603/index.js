let readlineSync = require("readline-sync");
let fs = require("fs");

let data = [];
const ID = []; 

const getID = new Promise((resolve, reject) => {
  setTimeout(() => {
    const fileContent = fs.readFileSync("./data.json");
    data = JSON.parse(fileContent);
    data.forEach(cur => ID.push(cur.ID));
    resolve(ID);
  }, 1500);
});

const getFullInfo  = (ID) => {
  return new Promise((resolve, reject) => {
    setTimeout((id) => {
      const idData =  data.filter(cur => cur.ID === id);
      resolve(idData)
    }, 1500, ID);
  });
}

// getID
// .then(ID => {
//   console.log(ID);
//   return getFullInfo(ID[1]);
// })
// .then(info => console.log(info));
async function getFullInfoAW() {
  const IDs = await getID;
  console.log(IDs);
  const info = await getFullInfo(IDs[1]);
  console.log(info);
  return info;
};
// getRecipeAW().then(res => {
//   console.log(`${res} is the best ever`);
// });
getFullInfoAW()
