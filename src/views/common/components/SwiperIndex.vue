<template lang="pug">
  .swiper(v-swiper:mySwiper="swiperOption", @transitionend='onTransitionEnd($event)', @slideTo="slideTo(index, speed, runCallbacks)")
    .swiper-wrapper.direction
      .swiper-slide(v-for='(item,index) in contentPageMap')
        component(:is="item", :ani="sliderIndex === index")
    .bottom(v-if="sliderIndex === contentPageMap.length - 1")
      BackCalendar(@backClick="backClick")
</template>


<script>

import BackCalendar from '../../common/components/BackCalendar'
export default {
  name: 'swiper-index',
  components: {
    // C0828F,
    // C0828S,
    // S,
    // T,
    // TH,
    BackCalendar
  },
  props: {
    ani: Boolean,
    swiperOption: {
      type: Object,
      required: false,
      default(){
        return {
          pagination: {
            el: '.swiper-pagination'
          },
          direction: 'vertical',
          mousewheelControl: true,
          touchRatio: 1,
          effect: 'fade',
          longSwipesRatio: 0.1, // 滑动起效比例
          observer: true,
          observeParents: true,
        }
      }
    },

  },
  watch: {
    ani(value) {
      console.log(value)
    }
  },
  data() {
    return {
      // swiperOption: {
			// 	pagination: {
			// 		el: '.swiper-pagination'
			// 	},
			// 	direction: 'vertical',
			// 	mousewheelControl: true,
			// 	touchRatio: 1,
			// 	effect: 'fade',
			// 	longSwipesRatio: 0.1, // 滑动起效比例
			// 	observer: true,
      //   observeParents: true,
      // },
      contentPageMap: [
        C0828F,
        C0828S,
        // T,
        // TH
      ],
      sliderIndex: 0
    }
  },
  methods: {
    onTransitionEnd() {
      this.sliderIndex = this.mySwiper.activeIndex
    },
    backClick () {
      console.log('click')
      this.$emit('backClick')
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../common/css/main.styl'
</style>
