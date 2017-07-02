<template>
  <div class="dirb">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            Technologies
          </div>
          <div class="card-block">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Reference</th>
                  <th>Category</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="result in results">
                  <th scope="row">{{result.name}}</th>
                  <td><a target="_blank" :href="result.website">{{result.website}}</a></td>
                  <td>{{result.category}}</td>
                  <td>{{result.confidence}}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <br/>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Actions</div>
          <div class="card-block">
            <div class="row">
              <div class="col-md-6 text-left">
                <button v-on:click="reset" class="btn btn-danger">Reset Results</button>
              </div>
              <div class="col-md-6 text-right">
                <button v-on:click="run" class="btn btn-primary">Run</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../../api/wappalyzer.js'

export default {
  data () {
    return {
      results: []
    }
  },
  methods: {
    fetch: function() {
      api.fetch()
        .then(response => {
          this.results = response.data
        })
    },
    reset: function() {
      api.reset().
        then(response => {
          this.fetch()
      })
    },
    run: function() {
      api.run().
        then(response => {
          this.fetch()
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style>
</style>
