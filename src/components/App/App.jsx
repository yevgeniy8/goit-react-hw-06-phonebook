// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Wrapper, H1, H2 } from './App.styled';

import { useSelector } from 'react-redux';
// import { changeFilter } from 'redux/filterSlice';
// const contactArray = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
    // const [contacts, setContacts] = useState(
    //     () => JSON.parse(localStorage.getItem('contacts')) ?? contactArray
    // );
    // const [filter, setFilter] = useState('');

    const contacts = useSelector(state => state.contacts.contactsList);
    const filter = useSelector(state => state.filter);

    // console.log(contacts);

    // console.log(contacts.contactsList);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    // const addContact = (name, number) => {
    //     const contact = {
    //         id: nanoid(),
    //         name,
    //         number,
    //     };

    //     if (contacts.filter(item => item.name === contact.name).length) {
    //         return alert(`${contact.name} is already in contacts`);
    //     } else {
    //         setContacts(prevState => {
    //             return [...prevState, contact];
    //         });
    //     }
    // };

    // const deleteContact = contactId => {
    //     setContacts(contacts.filter(item => item.id !== contactId));
    // };

    // const changeFilter = event => {
    //     // setFilter(event.target.value);
    //     dispatch(changeFilter(event.target.value));
    // };

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const vilibleContact = getVisibleContacts();

    return (
        <Wrapper>
            <H1>Phonebook</H1>
            {/* <ContactForm onSubmit={addContact} /> */}
            <ContactForm />

            <H2>Contacts</H2>
            {/* <Filter filter={filter} onChange={changeFilter} /> */}
            <Filter />
            {/* <ContactList
                vilibleContact={vilibleContact}
                deleteContact={deleteContact}
            /> */}
            <ContactList vilibleContact={vilibleContact} />
        </Wrapper>
    );
};
