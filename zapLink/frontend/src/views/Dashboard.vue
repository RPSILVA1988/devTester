<template>
  <div class="dashboard">
    <div class="container">
      <h1>Seu gerenciador digital de contatos</h1>

      <div class="columns">
        <div
          class="column is-4" v-for="contact in contactList" :key="contact.id">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>

                <div class="media-content">
                  <p class="title is-4">{{contact.name}}</p>
                  <p class="subtitle is-6">{{contact.number}}</p>
                </div>
              </div>

              <div class="content">
                {{contact.description}}
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Conversar</a>
              <a href="#" class="card-footer-item">Apagar</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
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
