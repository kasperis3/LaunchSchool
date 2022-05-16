// 2 rewrite 

function makeObj() {
  let obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}

function makeObj1() {
	return {
		propA: 10,
		propB: 20,
	};
}

function createInvoice(services = {}) {
  // implement the factory function here
  return {
  	phone: services.phone || 3000,
  	internet: services.internet || 5500,
  	payments: [],
  	total: function() {
  	  return this.phone + this.internet;
  	},
  	paymentTotal: function() {
  	  return this.payments.reduce((prev, curr) => prev + curr, 0);
  	},
  	amountDue: function() {
  	  return this.total() - this.paymentTotal();	
  	},
  	addPayment: function(payment) {
  	  this.payments.push(payment.total());
  	},
  	addPayments: function(payments) {
  	  payments.forEach(this.addPayment, this);
  	}
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));
console.log(invoices);

console.log(invoiceTotal(invoices)); // 31000

function createPayment(services = {}) {
  // implement the factory function here
  let obj = {
  	total: function() {
  	  return this.amount;
  	},
  };  
  if (services && services.hasOwnProperty('amount')) {
  	obj.amount = services.amount;
  } else {
  	let phone = services.phone || 0;
  	let internet = services.internet || 0;
  	obj.amount = phone + internet;
  }
  console.log(obj);
  return obj;
}



function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000



let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0















