async function createPartyFormHandler (event) {
    event.preventdefault();

    const party_name = document.querySelector('#party-name').value.trim(); 
    
    const response = await fetch('/api/party', {
        method: 'POST',
        body: JSON.stringify({
            party_name
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
        document.location.replace('/portal');
    }
    else {
        alert(response.statusText);
    }
};

document.querySelector('#create-party-form').addEventListener('submit', createPartyFormHandler);