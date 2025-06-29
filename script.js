let contactName = document.getElementById("contact-name");
let contactPhone = document.getElementById("contact-phone");
// contacts is an array that will hold all the details of a contact
let contacts = [];
// contactsList is the container where all the contacts will be listed/shown.
let contactList = document.querySelector("main");

// The addContact function will push the contact details (value) to the contacts array & call the contactLoader function.
function addContact() {
    console.log(contactName.value,contactPhone.value)
    contacts.push(
        {
            "Name" : contactName.value,
            "Phone Number" : contactPhone.value,
        },
    );
    console.log(contacts)
    contactLoader(contacts)
}

// The addContactButton when triggered will call the addContact function.
let addContactButton = document.getElementById("add-contact");
addContactButton.onclick = addContact;

// The contactLoader function will display the contacts.
function contactLoader(contacts) {
    contactList.innerHTML = ``
    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `
        <!-- contact-box is the individual contact containing contact info like name, phone number, etc. -->
        <div class="contact-box">
            Name: ${contacts[i]["Name"]}
            <br>
            Phone Number: ${contacts[i]["Phone Number"]}
            <br>
            <button id="edit-contact" >Edit Contact</button>
            <button id="add-contact" >Remove Contact</button>
            </div>
        <br>
        `
    }
}