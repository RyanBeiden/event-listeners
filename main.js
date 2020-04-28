const pies = [
  {
    type: 'Apple',
    size: 'Family',
    crust: 'Lattuce',
    price: 30,
    imageUrl: 'https://bit.ly/2YmROQr',
    owner: 'luke',
    aLaMode: true
  },
  {
    type: 'Pecan',
    size: 'Personal',
    crust: 'Basic Flaky',
    price: 3,
    imageUrl: 'https://bit.ly/2KDirs5',
    owner: 'michael',
    aLaMode: false
  },
  {
    type: 'Blueberry',
    size: 'Regular',
    crust: 'Crumb',
    price: 400,
    imageUrl: 'https://bit.ly/3bKk9Um',
    owner: 'matt',
    aLaMode: true
  },
  {
    type: 'Meat Pie',
    size: 'Real Big',
    crust: 'Meat Crust',
    price: 1,
    imageUrl: 'https://bit.ly/2W5vPui',
    owner: 'luke',
    aLaMode: false
  },
  {
    type: 'Pizza Pie',
    size: 'XL',
    crust: 'Thin',
    price: 6,
    imageUrl: 'https://bit.ly/3aIfot9',
    owner: 'michael',
    aLaMode: true
  },
  {
    type: 'Rhubarb',
    size: 'Pie Sized',
    crust: 'Normal',
    price: 2417483647,
    imageUrl: 'https://bit.ly/2yMItGD',
    owner: 'matt',
    aLaMode: true
  },
  {
    type: 'Spanakopita',
    size: 'Pan',
    crust: 'Filo',
    price: 8,
    imageUrl: 'https://bit.ly/3cWfgIi',
    owner: 'everybody',
    aLaMode: true
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPies = (pieCollection) => {
  let domString = '';
  for (let i = 0; i < pieCollection.length; i++) {
    domString += `
      <div class="pie">
        <h2>${pieCollection[i].type}</h2>
        <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type}">
        <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, has a ${pieCollection[i].crust} crust.</p>
        <h4>Price: ${pieCollection[i].price}</h4>
      </div>
    `;
  }
  printToDom('#pieContainer', domString);
}

const filterPiesEvent = (event) => {
  const buttonId = event.target.id;
  const tempPieCollection = [];
  for (let i = 0; i < pies.length; i++) {
    if (pies[i].owner === buttonId) {
      tempPieCollection.push(pies[i]);
    }
  }
  buildPies(tempPieCollection);
}

const clickEvents = () => {
  document.querySelector('#luke').addEventListener('click', filterPiesEvent);
  document.querySelector('#michael').addEventListener('click', filterPiesEvent);
  document.querySelector('#matt').addEventListener('click', filterPiesEvent);
}

const init = () => {
  buildPies(pies);
  clickEvents();
}

init();
