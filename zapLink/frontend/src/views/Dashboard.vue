<template>
  <div class="dashboard">
    <div class="container">
      <h4 class="title is-4">Seu gerenciador digital de contatos</h4>

      <div class="columns is-multiline">
        <div
          class="column is-4"
          v-for="contact in contactList"
          :key="contact.id"
        >
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/whatsapp.svg" alt="Logo WhatsApp" />
                  </figure>
                </div>

                <div class="media-content">
                  <p class="title is-4">{{ contact.name }}</p>
                  <p class="subtitle is-6">{{ contact.number }}</p>
                </div>
              </div>

              <div class="content">
                {{ contact.description }}
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
      contactList: [],
    };
  },
  methods: {
    list() {
      window.axios.get('/contacts').then(async (res) => {
        this.contactList = await res.data;
      })
    }
  },
  mounted() {
    this.list();
  },
};
</script>
