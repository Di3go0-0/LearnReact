// Objetivo: Se utiliza para memorizar una instancia de una funcion (No el resultado como UseMemo)
// hace que un hijo no renderice

import { useCallback, useState } from "react";

// Ejemplo:
// Supongamos que tenemos un numero de telefono al que llamamos con frecuencia
// En vez de marcarlo continuamente, lo camos a almacenar en los contactos del telefono y solo lo llamamos

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const ContactCart = ({ contact, onCall }: ContactProps) => {
  console.log(`Renderizing contact ${contact.name}`);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => onCall(contact.phone)}>Call</button>
    </div>
  );
};

export const PhoneBook = () => {
  const [contact, setContact] = useState<Contact[]>([
    {
      id: 1,
      name: "Manzana",
      phone: "312-2323-32233",
    },
    {
      id: 2,
      name: "Pera",
      phone: "302-4354-12942",
    },
    {
      id: 3,
      name: "Pineaple",
      phone: "434-2343-23423",
    },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback(
    (phone: string) => setLog(`Calling to: ${phone}`),
    [],
  );

  const addContact = () => {
    const newContact = {
      id: contact.length + 1,
      name: "New Contact",
      phone: `${Math.floor(100000000 + Math.random() * 1000000)}`,
    };

    setContact([...contact, newContact]);
  };

  return (
    <div>
      <h2>Phone Book</h2>
      {contact.map((contact) => (
        <ContactCart key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>Add Contact</button>
      <h2>Log</h2>
      <p>{log}</p>
    </div>
  );
};
