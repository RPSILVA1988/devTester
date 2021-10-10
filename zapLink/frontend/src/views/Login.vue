
<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-6 custom-center">
            <img src="../assets/logo.svg" alt="Logo" />
            <p class="title">Seu gerenciador de contatos rápidos</p>

            <div class="card login">
              <div class="card-content">
                <form>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input
                        class="input"
                        type="email"
                        placeholder="Seu email"
                        style="background: #a6c8c9"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input
                        class="input"
                        type="password"
                        placeholder="Sua senha"
                        style="background: #a6c8c9"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-success">Entrar</button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <img src="../assets/landing.svg" alt="Marca" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.login {
  width: 400px;
  border-radius: 10px;
  background-color: gray;
}
.custom-center {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}
</style>