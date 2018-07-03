describe('Address Book', function() {
    let addressBook, contact;

    beforeEach(function() {
        addressBook = new AddressBook(),
        contact = new Contact();
    });

    it('Should be able to add a contact.', function() {
        addressBook.addContact(contact);
        expect(addressBook.getContact(0)).toBe(contact);
    });

    it('Should be able to delete a contact.', function() {
        addressBook.addContact(contact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe('Asynchronous Address Book', function () {
    let addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('Should be able to get initial contacts.', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});
