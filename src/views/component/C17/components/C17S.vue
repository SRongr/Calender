<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Essay(:calendar-text="calendarText", v-if='ani')
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Essay from '../../../common/components/Essay'
import Arrow from '../../../common/components/Arrow'
export default {
  components: {
    Essay,
    Arrow
  },
  props: {
    ani: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      showDescribe: false,
      calendarText: [
        '于是我在你的空间里得知你玩阴阳师。作为一个从儿时走到高中的游戏大高玩，我准备从游戏下手, 想着将来成为高手, 有一些共同话题。没有预料到的是，比我晚入坑的都好几个ssr了。我还拿着鬼使黑当着主力军。某天发现你把我删了, 阴阳师玩了一会也正式弃游了'
      ],
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 100%
  background-color #000000
  flex-direction column
  flexC()
  .bg
    position absolute
    width 100%
    height 100%
    background-image url('https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/hoppy8.png') 
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
