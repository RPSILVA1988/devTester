<template>
  <div class="dashboard">
    <h1>Seu gerenciador digital de contatos</h1>

    <ul>
      <li v-for="contact in contactList" :key="contact.id">
        <span>{{ contact.name }}</span
        ><br />
        <small>{{ contact.number }}</small
        ><br />
        <small>{{ contact.description }}</small
        ><br />
        <button>Conversar</button>
        <button>Apagar</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Dashboard",
  data() {
    return {
      contactList: [
        {
          id: 1,
          name: "Raniele Pinheiro",
          number: "11 999997777",
          description: "Solicitar Consultoria em DevOps",
        },
        {
          id: 2,
          name: "João da Silva",
          number: "11 999997777",
          description: "Orçamento para aulas de Inglês",
        },
        {
          id: 3,
          name: "Maria da Silva",
          number: "11 999997777",
          description: "Orçamento para aulas de Francês",
        },
      ],
    };
  },
};
</script>
