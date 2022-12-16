const addItemHandler = async (event) => {

    // event.preventDefault();

    const name = document.getElementById('form1').value
    const description = document.getElementById('form2').value
    const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

        window.location.reload();
    } else {
        alert('Failed to log out.');
    }
};

const deleteItemHandler = async (event) => {



    if (event.target.dataset.id) {
        const deleteID = event.target.dataset.id
        const response = await fetch(`/api/list/${deleteID}`, {
            method: 'Delete',

            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.reload();

        } else {
            alert('Failed to log out.');
        }
    }

    else
        if (event.target.dataset.idupdate || event.target.dataset.idDescritpion) {
            console.log(event.target.dataset.idDescritpion)

            const updateID = event.target.dataset.idupdate
            const name = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.firstChild.value;
            const description = event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value;

            const response = await fetch(`/api/list/${updateID}`, {
                method: 'PUT',
                body: JSON.stringify({ name, description }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                window.location.reload();

            } else {
                alert('Failed to log out.');
            }

        }
};


document.querySelector('#addItem').addEventListener('click', addItemHandler);
document.body.addEventListener('click', deleteItemHandler)
