/**
 * Runs on submit of the first form.
 */
const form = document.getElementById('lpform')
form.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault();
    const fname = document.getElementById('fname');
    console.log(`First name: ${fname.value}`)
});
