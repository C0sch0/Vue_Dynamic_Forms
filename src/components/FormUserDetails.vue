<template>
  <div>
    <h1 class="title">Quieres que te sigamos ayudando ?</h1>

    <h2 class="subtitle">
      Somos la AGF mas conveniente según El Mercurio
    </h2>

    <form @input="submit" class="form">
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input type="text" v-model="$v.form.email.$model" placeholder="tu@email.com" class="form-control" id="email">
        <div v-if="$v.form.email.$error && !$v.form.email.required" class="error">email es requerido</div>
        <div v-if="$v.form.email.$error && !$v.form.email.email" class="error">email invalido</div>
      </div>


      <div class="form-group">
        <label class="form-label" for="password">Contraseña</label>
        <input v-model="$v.form.password.$model" type="password" placeholder="Super secreta" class="form-control" id="password">
        <div v-if="$v.form.password.$error && !$v.form.password.required" class="error">contraseña invalida</div>
      </div>


      <div class="form-group">
        <label class="form-label" for="name">Nombre</label>
        <input v-model="$v.form.name.$model" type="text" placeholder="Cómo te gustaría que te llamaramos ?" class="form-control" id="name">
        <div v-if="$v.form.name.$error" class="error">Te faltó el nombre</div>
      </div>
    </form>
  </div>
</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        form: {
          email: null,
          password: null,
          name: null,
        }
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required
        },
        name: {
          required
        }
      }
    },
    methods: {
      submit () {
        if (!this.$v.$invalid) {
          this.$emit('update', {
            email: this.form.email,
            password: this.form.password,
            name: this.form.name
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
