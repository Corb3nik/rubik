<template>
  <div>
    <h2>New Challenge</h2>
    <loading v-if="loading" />
    <errors v-if="hasStatus('failed')" :errors="errors"/>
    <form v-on:submit.prevent="onSubmit">
      <input
        class="form-control"
        type="text"
        @input="handleInput"
        name="name"
        placeholder="Challenge Name"/>
      <input
        class="form-control"
        type="text"
        @input="handleInput"
        name="root"
        placeholder="Root URL"/>
      <input
        class="btn btn-primary"
        type="submit"
        value="Create challenge">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import { isEmpty, includes } from 'lodash'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  components: {
    Errors,
    Loading
  },
  computed: {
    ...mapState('ctf', [
      'ctf'
    ]),
    ...mapState('challengeForm', [
      'name',
      'errors'
    ]),
    ...mapGetters('challengeForm', [
      'hasStatus'
    ]),
    loading () {
      return this.hasStatus('creating') || this.hasStatus('updating')
    }
  },
  methods: {
    ...mapMutations('challengeForm', [
      'change'
    ]),
    ...mapActions('challengeForm', [
      'save'
    ]),
    handleInput (event) {
      const { name, value } = event.target
      this.change({ name, value })
    },
    onSubmit (event) {
      this.save(this.ctf.id)
        .then(challenge => {
          if (!this.hasStatus('succeeded')) return
          this.$router.push({
            name: 'challenge',
            params: {
              ctf_id: challenge.ctf_id,
              challenge_id: challenge.id
            }
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
