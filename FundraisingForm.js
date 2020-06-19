const form = document.getElementById('fundraising_form');
form.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault();

    const ename = document.getElementById('ename');
    console.log(`Event name: ${ename.value}`)
    window.sessionStorage.setItem('event', ename.value);

    const cname = document.getElementById('cname');
    console.log(`Cashier name: ${cname.value}`);
    window.sessionStorage.setItem('cname', cname.value);

    const rnumber = document.getElementById('rnumber');
    console.log(`Cashier name: ${rnumber.value}`);
    window.sessionStorage.setItem('rnumber', rnumber.value);
});