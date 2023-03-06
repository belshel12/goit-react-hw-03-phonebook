import { Component } from 'react';
import { Layout } from '../Layout';
import { Title } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
      return;
    }

    this.setState({
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  addFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  selectContact = () => {
    const { contacts, filter } = this.state;

    const selectedName = contacts.filter(contact =>
      filter
        ? contact.name.toLowerCase().includes(filter.toLowerCase())
        : filter
    );
    return selectedName;
  };

  deleteContact = evt => {
    const { contacts } = this.state;
    const item = contacts.find(contact => contact.id === evt);
    const itemIndex = contacts.indexOf(item);

    contacts.splice(itemIndex, 1);

    this.setState(prevState => ({
      contacts: [...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter value={this.state.filter} onSearch={this.addFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          select={this.selectContact}
          onDelete={this.deleteContact}
        />
      </Layout>
    );
  }
}
