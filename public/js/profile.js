const addItemHandler = async (event) => {

    event.preventDefault();

    const name = document.getElementById('form1').value
    const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // document.location.replace('/profile');
    } else {
        alert('Failed to log out.');
    }
};

const deleteItemHandler = async (event) => {

    event.preventDefault();
    console.log(event.target.dataset.id)

    if (event.target.dataset.id) {
        const deleteID = event.target.dataset.id
        const response = await fetch(`/api/list/${deleteID}`, {
            method: 'Delete',

            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.location.replace('/profile');
        } else {
            alert('Failed to log out.');
        }
    }
};

document.querySelector('#addItem').addEventListener('click', addItemHandler);
// document.querySelector('#deleteItem').addEventListener('click', deleteItemHandler);
document.body.addEventListener('click', deleteItemHandler)