/* async function createPcFormHandler (event) {
    event.preventDefault();

    const pc_name = document.querySelector('#party-name').value.trim(); 
    
    if (pc_name) {
        const response = await fetch('/api/player_characters', {
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

document.querySelector('#list-of-pcs').addEventListener('button', searchPcFormHandler); */