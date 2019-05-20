<template>
  <div>
    <div>
      <div>
        <div bg="mint">
          <div class="button-pill" @click="addTrack()">Add Track</div>
          <div class="button-pill" v-if="!editor.timelinePlaying" @click="play">Play</div>
          <div class="button-pill" v-if="editor.timelinePlaying" @click="pause">Pause</div>
          <div class="button-pill" @click="restart">Restart</div>
          <div class="button-pill" @click="baseTime *= 1.5">-</div>
          <div class="button-pill" @click="baseTime /= 1.5">+</div>

          Max Time (seconds):
          <input type="text" v-model="timeline.totalTime" />
        </div>

      </div>
    </div>
    <div class="timeline" ref="toucher" v-bind="timeline = timeline || getTemplate()">
      <div class="wider"></div>
      <div class="track-holder" :key="tr._id" v-for="(tr) in tracks" :ref="`holder`">
        <timeline-track :track="tr">
          <timeline-diamond :editor="editor" :mode="'start'" slot="start">
            <div class="full-center">
              {{ tr.start.toFixed(1) }}s
            </div>
          </timeline-diamond>
          <timeline-spread slot="spread">
            <div slot="editor" class="spread-edit">
              <input type="text" class="text-bucket" v-model="tr.title" style="">
              <div class="remove-spread" @click="tryRemoveTrack(tracks, tr)">
                <span v-if="!tr.trashed" >X</span>
                <span v-if="tr.trashed" >Confirm</span>
              </div>
            </div>
            <div slot="dragger" class="full-center">
              {{ (tr.end - tr.start).toFixed(1) }}s
            </div>
          </timeline-spread>
          <timeline-diamond :editor="editor" :mode="'end'" slot="end">
            <div class="full-center">
              {{ tr.end.toFixed(1) }}s
            </div>
          </timeline-diamond>
        </timeline-track>
        <div class="line"></div>
      </div>
      <div class="timetick" ref="timetick"></div>
      <div class="timetick2" ref="timetick2"></div>
    </div>
  </div>
</template>

<script>
import { setInterval } from 'timers'
export default {
  props: {
    title: {
      default: 'Timeline Control'
    },
    editor: {},
    timeline: {}
  },
  components: {
    'timeline-spread': require('./timeline-spread.vue').default,
    'timeline-track': require('./timeline-track.vue').default,
    'timeline-diamond': require('./timeline-diamond.vue').default
  },
  data () {
    return {
      baseTime: 50,
      initBaseTime: 50,
      sizer: 50,
      toucher: false
    }
  },
  created () {
    this.timeline = this.timeline || this.getTemplate()
    this.timeline.tracks.forEach((tt) => {
      tt.start = tt.start || 0
      tt.end = tt.end || 0
    })
    this.tryResetTrackConfirm()
  },
  mounted () {
    this.toucher = this.$refs['toucher']

    this.rect = this.$refs['holder'][0].getBoundingClientRect()

    window.addEventListener('en-timleine-layout', () => {
      if (this.$refs['holder'][0]) {
        this.rect = this.$refs['holder'][0].getBoundingClientRect()
      }
      if (this.$refs['toucher']) {
        this.toucherRect = this.$refs['toucher'].getBoundingClientRect()
        this.syncRect()
      }
    })

    window.addEventListener('resize', () => {
      if (this.$refs['holder']) {
        this.rect = this.$refs['holder'][0].getBoundingClientRect()
        this.syncRect()
      }
    }, false)

    this.toucherRect = this.$refs['toucher'].getBoundingClientRect()
    window.addEventListener('resize', () => {
      if (this.$refs['toucher']) {
        this.toucherRect = this.$refs['toucher'].getBoundingClientRect()
        this.syncRect()
      }
    }, false)

    this.syncRect()
    this.handleHover()
  },
  computed: {
    totalTime: {
      get () {
        return this.timeline.totalTime
      },
      set (v) {
        this.timeline.totalTime = v
      }
    },
    tracks () {
      return this.timeline.tracks
    },
    trackJSON () {
      return JSON.stringify(this.tracks)
    }
  },
  watch: {
    'timeline.totalTime': {
      deep: true,
      handler () {
        this.syncRect()
      }
    },
    'timeline': {
      deep: true,
      handler () {
        this.editor.$emit('update-canvas', { canvas: this.canvas })
      }
    },
    trackJSON: {
      deep: true,
      handler () {
        this.editor.$emit('update-canvas', { canvas: this.canvas })
      }
    }
  },
  methods: {
    syncRect () {
      // this.rect = {
      //   ...this.rect,
      //   width: 800 / 15 * this.timeline.totalTime
      // }
      // this.toucherRect = {
      //   ...this.toucherRect,
      //   width: 800 / 15 * this.timeline.totalTime
      // }
    },
    addTrack () {
      let trs = this.timeline.tracks
      let tr = {
        _id: `_${Number(Math.random() * 100000000000).toFixed(0)}`,
        start: 0,
        end: 10,
        title: 'speed' + trs.length
      }
      trs.push(tr)
      this.editor.$emit('update-canvas', { canvas: this.canvas })
      this.toucher.scrollTop = this.toucher.scrollHeight
      setTimeout(() => {
        this.toucher.scrollTop = this.toucher.scrollHeight
      }, 1000)
    },
    tryResetTrackConfirm () {
      let trs = this.timeline.tracks
      trs.forEach((tr) => {
        tr.trashed = false
      })
      this.$forceUpdate()
    },
    tryRemoveTrack (trs, tr) {
      if (tr.trashed) {
        this.removeTrack(trs, tr)
      }
      this.tryResetTrackConfirm()
      tr.trashed = true
      window.addEventListener('keyup', (evt) => {
        if ((evt.keyCode + '') === '27') {
          tr.trashed = false
          this.$forceUpdate()
        }
      })
      this.$forceUpdate()
    },
    removeTrack (trs, tr) {
      // if (window.prompt(`copy and paste to delete "${tr.title}"`) === tr.title) {
      let idx = trs.findIndex(t => t._id === tr._id)
      if (idx !== -1) {
        trs.splice(idx, 1)
        this.editor.$emit('update-canvas', { canvas: this.canvas })
      }
      // }
    },
    play () {
      this.editor.timelineControl = 'timer'
      this.editor.timelinePercentageLast = this.editor.timelinePercentage
      this.editor.timelinePlaying = true
      this.editor.start = window.performance.now() * 0.001 - this.editor.timelinePercentageLast * this.timeline.totalTime
      this.$forceUpdate()
    },
    restart () {
      this.editor.timelineControl = 'timer'
      this.editor.timelinePercentageLast = this.editor.timelinePercentage
      this.editor.timelinePlaying = true
      this.editor.start = window.performance.now() * 0.001
      this.$forceUpdate()
    },
    pause () {
      this.editor.timelineControl = 'timer'
      this.editor.timelinePlaying = false
      this.$forceUpdate()
    },
    hover () {
      this.editor.timelineControl = 'hover'
      this.editor.timelinePlaying = false
      this.editor.$forceUpdate()
    },
    handleHover () {
      this.editor.timelinePercentage = 0
      this.editor.totalTime = this.timeline.totalTime

      this.$forceUpdate()

      this.parentRect = this.$parent.$parent.$el.getBoundingClientRect()

      let dom = this.$refs['toucher']
      let onupdateTick = (evt) => {
        if (this.editor.timelineControl === 'hover') {
          let now = evt.pageX - this.rect.left + dom.scrollLeft
          // let width = this.toucherRect.width - this.sizer
          let width = this.toucherRect.width - this.sizer

          width *= this.baseTime / this.initBaseTime

          this.editor.timelinePercentage = Number((now) / (width))
          this.editor.timelinePercentageLast = this.editor.timelinePercentage
          this.editor.totalTime = this.timeline.totalTime
        }
      }
      setInterval(() => {
        let width = this.toucherRect.width - this.sizer
        width *= this.baseTime / this.initBaseTime

        if (this.$refs['timetick']) {
          let ticker = Number(3 + this.editor.timelinePercentage * (width) + 0)
          if (isNaN(ticker)) {
            ticker = 0
          }
          let sT = 0
          // let sT = this.toucher.scrollTop
          this.$refs['timetick'].style.transform = `translateZ(1px) translateY(${sT.toFixed(1)}px) translateX(${ticker.toFixed(1)}px)`
        }
        if (this.$refs['timetick2']) {
          let tickerMaxTime = Number(0 + (width) + 0)
          if (isNaN(tickerMaxTime)) {
            tickerMaxTime = 0
          }
          let sT = 0
          // let sT = this.toucher.scrollTop
          this.$refs['timetick2'].style.transform = `translateZ(1px) translateY(${sT.toFixed(1)}px) translateX(${tickerMaxTime.toFixed(1)}px)`
        }
      }, 1000 / 60)
      dom.addEventListener('mouseneter', (evt) => {
        this.hover()
      })
      dom.addEventListener('mousemove', (evt) => {
        this.hover()
      })
      dom.addEventListener('mouseleave', (evt) => {
        this.play()
      })
      window.addEventListener('mousemove', onupdateTick)
    },
    getTemplate () {
      this.$nextTick(() => {
        this.editor.$emit('update-canvas', { canvas: this.canvas })
      })
      return {
        totalTime: 30,
        tracks: [
          {
            _id: 0,
            start: 0,
            end: 11,
            title: 'speed1'
          },
          {
            _id: 1,
            start: 0,
            end: 12,
            title: 'runIn'
          },
          {
            _id: 2,
            start: 0,
            end: 13,
            title: 'flyOut'
          },
          {
            _id: 3,
            start: 0,
            end: 14,
            title: 'popOut'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.timeline{
  width: 100%;
  height: 100%;
  min-height: 200px;
  max-width: 100%;
  overflow-x: scroll;
  position: relative;
}
.wider{
  width: 300px;
}
.track-holder{
  position: relative;
  width: 300px;
  margin-bottom: 1px;
  background-color: #eeeeee;
}
.timetick{
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  background-color: blue;
  pointer-events: none;
}
.timetick2{
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 101;
  background-color: rgb(255, 187, 0);
  pointer-events: none;
}

.label{
  text-align: center;
}
.full-center{
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.text-bucket{
  width: calc(100% - 70px);
  height: 50%;
  box-shadow: none;
  border: none;
  appearance: none;
  outline: none;
  padding: 2px;
  font-size: 18px;
}

.spread-edit{
  display: flex;
}
.remove-spread{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(70px);
  background-color: rgb(190, 94, 94);
  color: white;
}

.button-pill{
  display: inline-block;
  padding: 5px 10px;
  border: rgb(163, 163, 163) solid 1px;
  margin: 5px;
  border-radius: 30px;
}
</style>
