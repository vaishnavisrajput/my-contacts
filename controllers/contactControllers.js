const asyncHandler = require("express-async-handler");
const Contact= require("../models/contactModel");
// @desc Get all contacts
// @route GET api/contacts
// @access private

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

// @desc Create New contacts
// @route POST api/contacts
// @access private

const createContact = asyncHandler(async(req, res) => {
    console.log("The requested body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){ // checking if all the fields are provided
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
});

// @desc Get contacts
// @route GET api/contacts/:id
// @access private

const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(201).json(contact);
});

// @desc update New contacts
// @route PUT api/contacts/:id
// @access private

const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have a permission to update other user's contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedContact);
});

// @desc delete New contacts
// @route DELETE api/contacts/:id
// @access private

const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have a permission to update other user's contact");
    }
    await Contact.deleteOne({ _id: req.params.id});
    res.status(200).json({ message: "Contact deleted successfully", contact});
});


module.exports = { 
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}; 