import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    contactsList: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                return {
                    contactsList: [...state.contactsList, action.payload],
                };
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact: (state, action) => {
            return {
                contactsList: state.contactsList.filter(
                    item => item.id !== action.payload
                ),
            };
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

//  const deleteContact = contactId => {
//      setContacts(contacts.filter(item => item.id !== contactId));
//  };

// console.log(contactsSlice.actions.addContact({ name: 5, number: 6 }));
// console.log(contactsSlice);

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
