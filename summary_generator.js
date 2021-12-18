const pageTitles = [
  "Histórias",
  "Enredos",
  "Poesias",
  "Contos de fada",
  "Diversão",
  "Alegria"
];

const generateSummary = (array) => {
  let pageCount = 0;
  array.forEach((item) => {
    pageCount++;
    const itemLenght = item.length;
    const indexLenght = Number(pageCount.toString().length);
    const dotQuanty = 85 - (indexLenght + itemLenght);
    const dots = ".".repeat(dotQuanty);
    console.log(`${item} ${dots} ${pageCount}`);
  });
};

generateSummary(pageTitles);
