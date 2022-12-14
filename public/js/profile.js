const addItemHandler = async (event) => {

    // event.preventDefault();

    const name = document.getElementById('form1').value
    const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // document.location.replace('/profile');
        window.location.reload();
    } else {
        alert('Failed to log out.');
    }
};

const deleteItemHandler = async (event) => {

    // event.preventDefault();
    // console.log(event.target.dataset.id)

    if (event.target.dataset.id) {
        const deleteID = event.target.dataset.id
        const response = await fetch(`/api/list/${deleteID}`, {
            method: 'Delete',

            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.reload();
            // document.location.replace('/profile');
        } else {
            alert('Failed to log out.');
        }
    }
    else
        if (event.target.dataset.idupdate) {

            const updateID = event.target.dataset.idupdate
            const name = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.firstChild.value;
            console.log(name)

            // const newName = event.target.dataset
            const response = await fetch(`/api/list/${updateID}`, {
                method: 'PUT',
                body: JSON.stringify({ name }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                window.location.reload();
                // document.location.replace('/profile');
            } else {
                alert('Failed to log out.');
            }

        }
};




document.querySelector('#addItem').addEventListener('click', addItemHandler);
// document.querySelector('#deleteItem').addEventListener('click', deleteItemHandler);
document.body.addEventListener('click', deleteItemHandler)
// document.body.addEventListener('click', updateItemHandler)