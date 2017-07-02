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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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
          this.links = response.data
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
