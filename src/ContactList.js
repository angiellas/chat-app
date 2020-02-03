import React from 'react';
import Contact from './components/Contact';

const list = [
    {
        name: "Rosemary Hunter",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
        online: false,
    },
    {
        name: "Alexis Cole",
        avatar: "https://randomuser.me/api/portraits/women/53.jpg",
        online: false,
    },
    {
        name:"Angie",
        avatar:"https://randomuser.me/api/portraits/women/79.jpg",
        online: true,
    },
    {
        name: "Jessica",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        online: false,
    },
    {
        name: "Dominick",
        avatar: "https://randomuser.me/api/portraits/men/97.jpg",
        online: true,
    },
];

const ContactList = () => (
    <div>
        {list.map(item => (
            <Contact key={item.name} name={item.name} avatar={item.avatar} online={item.online} />
            )
        )}
    </div>
);

export default ContactList;