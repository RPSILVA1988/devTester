<template>
  <div class="dashboard">
    <div class="container">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <h4 class="title is-4">Seu gerenciador digital de contatos</h4>
          </div>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <div class="level-item">
            <b-button
              id="addNewContact"
              label="+"
              type="is-success"
              @click="showContactAddModalActive = true"
            />
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Número do WhatsApp"
                />
              </p>
              <p class="control">
                <button class="button is-primary">Buscar</button>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div class="contact-list columns is-multiline">
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

      <b-modal
        v-model="showContactAddModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-label="Example Modal"
        aria-modal
      >
        <form action="">
          <div class="modal-card" style="width: 450px">
            <header class="modal-card-head">
              <p class="modal-card-title">Novo Contato</p>
              <button
                type="button"
                class="delete"
                @click="showContactAddModalActive = false"
              />
            </header>
            <section class="modal-card-body">
              <div class="field input-name">
                <input
                  class="input is-primary"
                  v-model="form.name"
                  placeholder="Nome Completo"
                />
                <small class="has-text-danger" v-if="errorName === true"
                  >Nome é obrigatório.</small
                >
              </div>
              <div class="field input-number">
                <input
                  class="input is-primary"
                  v-model="form.number"
                  placeholder="WhatsApp"
                />
                <small class="has-text-danger" v-if="errorNumber === true"
                  >WhatsApp é obrigatório.</small
                >
              </div>
              <div class="field text-description">
                <textarea
                  class="textarea is-primary"
                  v-model="form.description"
                  placeholder="Assunto"
                ></textarea>
                <small class="has-text-danger" v-if="errorDescription === true"
                  >Assunto é obrigatório.</small
                >
              </div>
            </section>
            <footer class="modal-card-foot">
              <b-button
                id="saveButton"
                label="Cadastrar"
                type="button is-success"
                @click="create"
              />
            </footer>
          </div>
        </form>
      </b-modal>
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
      showContactAddModalActive: false,
      errorName: false,
      errorNumber: false,
      errorDescription: false,
      form: {
        name: "",
        number: "",
        description: "",
      },
    };
  },
  methods: {
    create() {
      this.errorName = false;
      this.errorNumber = false;
      this.errorDescription = false;

      if (this.form.name === "") {
        this.errorName = true;
      }

      if (this.form.number === "") {
        this.errorNumber = true;
      }

      if (this.form.description === "") {
        this.errorDescription = true;
      }

      if (
        this.errorName === false &&
        this.errorNumber === false &&
        this.errorDescription === false
      ) {
        console.log(this.form);
        window.axios.post("/contacts", this.form).then(async (res) => {
          await res.data;
          this.showContactAddModalActive = false;
          this.list();
        });
      }
    },
    list() {
      window.axios.get("/contacts").then(async (res) => {
        this.contactList = await res.data;
      });
    },
  },
  mounted() {
    this.list();
  },
};
</script>
