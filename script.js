const currencyEl1 = document.getElementById("currency-one");
const currencyEl2 = document.getElementById("currency-two");
const amountEl1 = document.getElementById("amount-one");
const amountEl2 = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");

//fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)

function calculate() {
  const currency1 = currencyEl1.value;
  const currency2 = currencyEl2.value;

  fetch(`https://open.exchangerate-api.com/v6/latest/${currency1}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency2];

      rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
      amountEl2.value = amountEl1.value * rate;
    });
  //   fetch(`https://api.exchangeratesapi.io/latest?base=${currency2}`);
}

swapEl.addEventListener("click", () => {
  const temp = currencyEl1.value;
  currencyEl1.value = currencyEl2.value;
  currencyEl2.value = temp;
});

calculate();

currencyEl1.addEventListener("change", calculate);
currencyEl2.addEventListener("change", calculate);
amountEl1.addEventListener("input", calculate);
amountEl2.addEventListener("input", calculate);
