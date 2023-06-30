const ContactosModel = require("../models/Contactos");

class ContactosService {
  async getContacts() {
    try {
      const contacts = await ContactosModel.find();
      return contacts;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getContacts Service");
    }
  }

  async getContactById(id) { 
    try {
      let contact = await ContactosModel.findOne({_id:id});
      return contact;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getContactsById Service");
    }
  }

  

  async createContact(contact) {
    try {
      
      let savedContact = await ContactosModel.create(contact);
      return savedContact;
    
    } catch (err) {
      console.error(err);
      throw new Error("Error in createContact Service",err);
    }
  }

}

module.exports = new ContactosService();
