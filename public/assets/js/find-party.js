async function createPartyFormHandler (event) {
    event.preventDefault();

    const party_name = document.querySelector('#party-name').value.trim(); 
    
    if (party_name) {
        const response = await fetch('/api/party', {
            method: 'post',
            body: JSON.stringify({
                party_name
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            document.location.reload();
        }
        else {
            alert(response.statusText);
        }
    };
}

document.querySelector('#create-party-form').addEventListener('submit', createPartyFormHandler);