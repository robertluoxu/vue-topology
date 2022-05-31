<template>
  <div class="box" ref="box">
    <div class="left">
        <Topology />
    </div>
    <div class="right">
        <Contact msg='1234' />
    </div>
  </div>
</template>
<script>
import Contact from './Contact.vue'
import Topology from './Topology.vue'

export default {
  name: 'Center',
  components: {
    Contact,
    Topology
  },
  mounted () {
    window.addEventListener('message', this.handleMessageFromParent)
  },
  methods: {
    handleMessageFromParent (event) {
      var data = event.data
      switch (data.cmd) {
        case 'returnInfo':
          console.log('来着爸爸的消息:', data.params.info)
          break
      }
    }
  }

}
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;
        margin: 1% 0px;
        overflow: hidden;
    }
    .left {
        width: calc(72% - 10px); /*左侧初始化宽度*/
        height: 100%;
        background: #FFFFFF;
        float: left;
    }

    .right {
        float: left;
        width: 28%;   /*右侧初始化宽度*/
        height: 100%;
        background: #fff;
    }
</style>
