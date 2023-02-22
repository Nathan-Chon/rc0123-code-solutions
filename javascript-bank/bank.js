/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else if (balance > 0) {
    var newAccountObject = new Account(this.nextAccountNumber, holder);
    newAccountObject.deposit(balance);
    this.accounts.push(newAccountObject);
    this.nextAccountNumber++;
    return newAccountObject.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  if (this.accounts.length === 0) {
    return total;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].getBalance();
    }
  }
  return total;
};
