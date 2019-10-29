<template>
  <div>
    <h2>{{title}}</h2>
    <div>
      <h2>Object</h2>
      {{post}}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: [String],
      post: {
        type: Object
      }
    }
  }
</script>
