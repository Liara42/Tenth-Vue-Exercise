const app = Vue.createApp({
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      contacts: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
        {
          id: 'sameer',
          name: 'Sameer Gaikwad',
          phone: '09833 285 765',
          email: 'sameer@localhost.com',
        },
      ],
    };
  },
  methods:{
    addContact(){
      contact = {
        id: '',
        name: '',
        phone: '',
        email: '',
      }
      arr = this.name.split(" ")
      contact.id = arr[0].toLowerCase()
      contact.name = this.name
      contact.phone = this.phone
      contact.email = this.email
      this.contacts.push(contact)
    }
  }
});

app.component('friend', {
  props: {
    contact: Object
  },
  template: `
    <h2>{{contact.name}}</h2>
    <button @click="toggleDetails">{{detailVisibility ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailVisibility">
      <li><strong>Phone:</strong>{{contact.phone}}</li>
      <li><strong>Email:</strong>{{contact.email}}</li>
    </ul>
  `,
  data() {
    return {
      detailVisibility: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailVisibility = !this.detailVisibility;
    },
  },
});

app.mount('#app');
