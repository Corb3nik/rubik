<template>
  <div class="dirb">
    <div class="row">
      <div class="col-md-12">

        <!-- HTML -->
        <div class="card">
          <div class="card-header">
            HTML
          </div>
          <div class="card-block">
            <ul>
              <li v-for="link in html_links">
                <a target="_blank" :href="link.url">{{ urlToPath(link.url) }}</a>
              </li>
            </ul>
          </div>
        </div>
        <br>

        <!-- JS -->
        <div class="card">
          <div class="card-header">
            JS
          </div>
          <div class="card-block">
            <ul>
              <li v-for="link in js_links">
                <a target="_blank" :href="link.url">{{ urlToPath(link.url) }}</a>
              </li>
            </ul>
          </div>
        </div>
        <br>

        <!-- CSS -->
        <div class="card">
          <div class="card-header">
            CSS
          </div>
          <div class="card-block">
            <ul>
              <li v-for="link in css_links">
                <a target="_blank" :href="link.url">{{ urlToPath(link.url) }}</a>
              </li>
            </ul>
          </div>
        </div>
        <br>

        <!-- Misc -->
        <div class="card">
          <div class="card-header">
            Misc
          </div>
          <div class="card-block">
            <ul>
              <li v-for="link in misc_links">
                <a target="_blank" :href="link.url">{{ urlToPath(link.url) }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <br>

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
import * as api from '../../api/spider.js'

export default {
  props: {
    ctf_id: { type: [String, Number], require: true },
    challenge_id: { type: [String, Number], require: true }
  },
  data () {
    return {
      links: [],
      html_links: [],
      js_links: [],
      css_links: [],
      misc_links: []
    }
  },
  watch: {
    links: function() {
      self = this
      this.html_links = []
      this.js_links = []
      this.css_links = []
      this.misc_links = []
      this.links.forEach(function (link) {
        var content_type = link.content_type
        if (content_type.includes("html"))
          self.html_links.push(link)

        else if (content_type.includes("javascript"))
          self.js_links.push(link)

        else if (content_type.includes("css"))
          self.css_links.push(link)

        else self.misc_links.push(link)
      })
    }
  },
  methods: {
    urlToPath: function(url) {
      return (new URL(url)).pathname
    },
    fetch: function() {
      let { ctf_id, challenge_id } = this
      api.fetch(ctf_id, challenge_id)
        .then(response => {
          this.links = response.data
        })
    },
    reset: function() {
      let { ctf_id, challenge_id } = this
      api.reset(ctf_id, challenge_id)
        .then(response => {
          this.fetch()
        })
    },
    run: function() {
      let { ctf_id, challenge_id } = this
      api.run(ctf_id, challenge_id)
        .then(response => {
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
