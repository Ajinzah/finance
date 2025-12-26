const TX_KEY = 'sfp_transactions';

function getTransactions() {
  return JSON.parse(localStorage.getItem(TX_KEY)) || [];
}

function saveTransactions(data) {
  localStorage.setItem(TX_KEY, JSON.stringify(data));
}

function getTotal(type) {
  return getTransactions()
    .filter(t => t.type === type)
    .reduce((sum, t) => sum + Number(t.amount), 0);
}

function formatRupiah(num) {
  return 'Rp ' + Number(num).toLocaleString('id-ID');
}
