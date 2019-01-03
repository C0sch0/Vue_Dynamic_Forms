<template>
  <div>
    <h1 class="title">Hace cuanto tiempo tienes el fondo ?</h1>

    <h2 class="subtitle">
      Necesitamos saber para hacer el calculo de cuotas que tienes a tu nombre.
    </h2>

    <form @input="submit" class="form">
      <div class="form-group">
        <label class="form-label" for="delivery_name">Días (**)</label>
        <input v-model="$v.form.recipient.$model" type="text" placeholder="7 días" class="form-control" id="delivery_name">
        <div v-if="$v.form.recipient.$error" class="error">field is required</div>
      </div>

      <div class="form-group">
        <label class="form-label" for="address">Cuánto invertiste ?</label>
        <textarea v-model="$v.form.address.$model" placeholder="1 peso" rows="3" class="form-control" id="address"></textarea>
        <div v-if="$v.form.address.$error" class="error">field is required</div>
      </div>
    </form>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  export default {
    props:{
      wizardData: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        form: {
          address: null,
          recipient: this.wizardData.name
        }
      }
    },
    validations: {
      form: {
        address: {
          required
        },
        recipient: {
          required
        }
      }
    },
    methods: {
      submit () {
        this.$emit('update', {
          data: {
            recipient: this.form.recipient,
            address: this.form.address
          },
          valid: !this.$v.$invalid
        })
      }
    }
  }

</script>
