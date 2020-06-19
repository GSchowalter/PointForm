/**
 * Runs on submit of the first form.
 */
COMMUNITYSERVICE_PAGE = 'CommunityService.html';
FUNDRAISING_PAGE = 'Fundraising.html';

const form = document.getElementById('lpform')
form.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault();
    const fname = document.getElementById('fname');
    console.log(`First name: ${fname.value}`)
    window.sessionStorage.setItem('fname', fname.value);

    const lname = document.getElementById('lname');
    console.log(`Last name: ${lname.value}`);
    window.sessionStorage.setItem('lname', lname.value);


    var ele = document.getElementsByName('Event type');
    var type = 'unchecked';

    for(i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            console.log(`${ele[i].value} is checked`);
            window.sessionStorage.setItem('Event type', ele[i].value);
            type = ele[i].value;
        }
    }

    switch(type) {
        case 'Community Service':
            //go to community service page
            window.location.href = COMMUNITYSERVICE_PAGE;
            break;
        case 'Fundraising':
            //go to fundraising page
            window.location.href = FUNDRAISING_PAGE;
            break;
        default:
            //reload the page
    }
});

