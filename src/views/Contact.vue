<template>
  <div>
      <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  },
  mounted () {
    if (window.topology) {
      window.topology._emitter.on('nodeChange', (value) => {
        this.msg = value
      })
    }
  }
}
</script>
