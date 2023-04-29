function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        // Show the menu to the user
        console.log('Menu:', data);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }
  
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Bacon Burger', 'Veggie Burger'];
        const order = {
          burgers: burgers.sort(() => Math.random() - 0.5).slice(0, 3)
        };
        console.log('Order:', order);
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const status = {
          order_status: true,
          paid: false
        };
        console.log('Order Status:', status);
        resolve(status);
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const status = {
          order_status: true,
          paid: true
        };
        console.log('Payment Status:', status);
        resolve(status);
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    console.log('Thank you for eating with us today!');
  }

  getMenu()
    .then(() => {
      return takeOrder();
    })
    .then(() => {
      return orderPrep();
    })
    .then(() => {
      return payOrder();
    })
    .then((status) => {
      if (status.paid) {
        thankyouFnc();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  