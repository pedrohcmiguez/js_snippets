let pageTitles = [
  "Histórias",
  "Enredos",
  "Poesias",
  "Contos de fada",
  "Diversão",
  "Alegria"
];

const generateSummary = (array) => {
  array.forEach((item) => {
    const itemLenght = item.length;
    const itemIndex = array.indexOf(item);
    const indexLenght = Number(itemIndex.toString().length);
    const dotQuanty = 85 - (indexLenght + itemLenght);
    const dots = ".".repeat(dotQuanty);
    console.log(`${item} ${dots} ${itemIndex}`);
  });
}

generateSummary(pageTitles);
