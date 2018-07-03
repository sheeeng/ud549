class AddressBook {
    constructor() {
        this.contacts = [];
        this.initialComplete = false;
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getContact(index) {
        return this.contacts[index];
    }

    deleteContact(index) {
        this.contacts.splice(index, 1);
    }

    getInitialContacts(initialContact) {
        let self = this;
        setTimeout(function() {
            self.initialComplete = true;
            if (initialContact) {
                return initialContact();
            }
        }, 3);
    }
}
