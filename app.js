const app = Vue.createApp({
  data() {
    return {
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
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{contact.name}}</h2>
    <button @click="toggleDetails">{{detailVisibility ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailVisibility">
      <li><strong>Phone:</strong>{{contact.phone}}</li>
      <li><strong>Email:</strong>{{contact.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailVisibility: false,
      contact: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailVisibility = !this.detailVisibility;
    },
  },
});

app.mount('#app');
