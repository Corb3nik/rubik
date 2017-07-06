<template>
  <div class="col-md-4 offset-md-2">
    <h2>New Challenge</h2>
    <loading v-if="display_loading" />
    <errors v-if="has_status('failed')" :errors="errors"/>
    <form v-on:submit.prevent="on_submit">
      <b-form-input
        class="form-control"
        type="text"
        v-model="name"
        name="name"
        placeholder="Challenge Name">
      </b-form-input>
      <b-form-input
        class="form-control"
        type="text"
        v-model="root"
        name="root"
        placeholder="Root URL">
      </b-form-input>
      <input
        class="btn btn-primary"
        type="submit"
        value="Create challenge">
    </form>
  </div>
</template>

<script>
import { isEmpty, includes } from 'lodash'
import * as api from '../../api/challenges.js'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  components: {
    Errors,
    Loading
  },
  props: {
    initialId: { type: [String, Number] },
    initialName: { type: String },
    initialRoot: { type: String }
  },
  data: function () {
    return {
      id: this.initialId,
      name: this.initialName,
      root: this.initialRoot,
      errors: null,
      status: 'idle' // idle, creating, updating, succeeded, failed
    }
  },
  computed: {
    display_loading () {
      return includes(['creating', 'updating'], this.status)
    },
    has_status: function (status) {
      return (status) => {
        return this.status === status
      }
    }
  },
  methods: {
    on_submit (event) {
      if (this.loading) return
      const method = isEmpty(this.id) ? 'create' : 'update'
      this[method].call(this)
    },
    create () {
      let {name, root} = this
      this.status = 'creating'
      this.errors = null
      api.create_challenge({ name, root })
        .then(response => response.data)
        .then(challenge => {
          this.status = 'succeeded'
          this.$router.push({ name: 'challenge', params: { id: challenge.id }})
        })
        .catch((error) => {
          this.status = 'failed'
          if (error.response) {
            let contentType = error.response.headers['content-type']
            if (contentType.indexOf('application/json') != -1) {
              this.errors = error.response.data
            }
          }
        })
    },
    update () {
      throw 'Not implemented yet'
    }
  },
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
