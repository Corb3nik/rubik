<template>
  <div class="errors">
    <ul
      v-for="(messages, attribute) in errors"
      class="errors-item">
      {{attribute}}:
      <li
        v-for="message in messages"
        class="errors-item__message">{{message}}</li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'errors',

  props: {
    errors: {
      type: Object,
      default: function () {
        return {'Error': ['Oops something went wrong!'] }
      }
    }
  }

}
</script>

<style>
.errors {
  color: #c81c1c;
}
.errors-item {
  list-style-type: none;
  padding: 0;
}
.errors-item__message {
  padding-left: 10px;
}
</style>
