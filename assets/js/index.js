const form = document.querySelector('#searchForm');
const currency = document.querySelector('#currency');
const currencyComp = document.querySelector('#currencycomp');
const price = document.querySelector('#price');
const currencyinp1 = document.querySelector('#currencyinp1');
const currencyinp2 = document.querySelector('#currencyinp2');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = currency.value;
    const secondCurrency = currencyComp.value.toUpperCase();
    const value1 = currencyinp1.value;
    console.log(secondCurrency);
    const url = `https://v6.exchangerate-api.com/v6/a7c79ac91838d70c9b8a281b/latest/${searchTerm}`;
    const res = await axios.get(url);
    console.log(res);
    const rate = res['data']['conversion_rates'][`${secondCurrency}`];
    console.log(currencyinp1.value)
    currencyinp2.value = (rate * currencyinp1.value) ;
    
})

