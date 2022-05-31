<template>
  <div>
      <h1>{{ testContent }}</h1>
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
        this.testContent = value
      })
    }
  },
  data () {
    return {
      cont: ''
    }
  },
  computed: {
    testContent: {
      get () {
        return this.cont
      },
      set (v) {
        this.cont = v
      }
    }
  }
}
</script>
