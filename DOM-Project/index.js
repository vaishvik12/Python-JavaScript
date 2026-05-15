
    function onSubscribeClick() {
      const subBttn = document.querySelector('#subs-bttn');
      // if (subBttn.innerHTML === 'Subscribe') {
      //   subBttn.innerHTML = 'Subscribed';
      // } else {
      //   subBttn.innerHTML = 'Subscribe';
      // }
      {subBttn.innerHTML === 'Subscribe' 
      ? subBttn.innerHTML = 'Subscribed'
      : subBttn.innerHTML = 'Subscribe'}
    }


    function getPriceFromInput(){
      const inputPriceEl = document.querySelector(".js-price-input");
      const priceDisplayEl = document.querySelector(".js-total-cost");
  
      const price = Number(inputPriceEl.value); //56

      {price >= 40 
        ? priceDisplayEl.innerHTML = `$${price}`
        : priceDisplayEl.innerHTML = `$${price + 10}`}
    }