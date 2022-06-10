async function createPCFormHandler (event) {
    console.log('ARE WE HITTING THE HANDLER?');
    event.preventDefault();

    const pc_name = document.querySelector('#char_name').value.trim();
    const race = document.querySelector('#char_race').value.trim();
    const strength = document.querySelector('#char_str').value.trim();
    const dexterity = document.querySelector('#char_dex').value.trim();
    const constitution = document.querySelector('#char_con').value.trim();
    const intelligence = document.querySelector('#char_int').value.trim();
    const wisdom = document.querySelector('#char_wis').value.trim();
    const charisma = document.querySelector('#char_cha').value.trim();
    const user_id = document.querySelector('#user_id').value.trim();

    if(pc_name) {
        const response = await fetch('/api/player_characters', {
            method: 'post',
            body: JSON.stringify({ pc_name, user_id, race, strength, dexterity, constitution, intelligence, wisdom, charisma }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/portal');
        }
        else {
            alert(response.statusText);
        }
    };
}
document.querySelector('#create-pc-form').addEventListener('submit', createPCFormHandler);