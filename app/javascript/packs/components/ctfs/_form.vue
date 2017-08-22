<template>
  <div class="col-md-4 offset-md-2">
    <h2>New CTF</h2>
    <loading v-if="loading"/>
    <errors v-if="hasStatus('failed')" :errors="errors"/>
    <form v-on:submit.prevent="onSubmit">
      <input
        class="form-control"
        type="text"
        name="name"
        :value="name"
        @input="handleInput"
        placeholder="CTF Name"/>
      <input
        class="btn btn-primary"
        type="submit"
        value="Create CTF">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import { includes } from 'lodash'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  components: {
    Errors,
    Loading
  },
  computed: {
    ...mapState('ctfForm', [
      'name',
      'errors'
    ]),
    ...mapGetters('ctfForm', [
      'hasStatus'
    ]),
    loading () {
      return this.hasStatus('creating') || this.hasStatus('updating')
    }
  },
  methods: {
    ...mapMutations('ctfForm', [
      'change'
    ]),
    ...mapActions('ctfForm', [
      'save'
    ]),
    handleInput (event) {
      const { name, value } = event.target
      this.change({ name, value })
    },
    onSubmit (event) {
      this.save()
        .then(ctf => {
          if (!this.hasStatus('succeeded')) return
          this.$router.push({
            name: 'ctf',
            params: { ctf_id: ctf.id }
          })
        })
    }
  }
}
</script>

<style>
input[type=text] {
  width: 300px;
}

input{
  margin: 5px;
}
</style>
