<template>
  <div class="dirb">
    <div class="row">
      <div class="col-md-12">
        <div class="card-group">
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
    </div>

    <br/>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Actions</div>
          <div class="card-block">
            <div class="row">
              <div class="col-md-6 text-left">
                <a href="#" class="btn btn-danger">Reset Results</a>
              </div>
              <div class="col-md-6 text-right">
                <a href="#" class="btn btn-primary">Run</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../../api/dirb.js'

export default {
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
    }
  },
  created () {
    api.fetch_results()
      .then(response => {
        this.links = response.data
      })
  }
}
</script>

<style>
</style>
