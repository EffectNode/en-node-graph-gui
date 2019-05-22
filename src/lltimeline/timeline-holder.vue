<template>
  <div>
    <div>
      <div>
        <div bg="mint">
          <div class="button-pill" @click="addTrack()">Add Track</div>
          <div class="button-pill" v-if="!editor.timelinePlaying" @click="play">Play</div>
          <div class="button-pill" v-if="editor.timelinePlaying" @click="pause">Pause</div>
          <div class="button-pill" @click="restart">Restart</div>
          <!-- <div class="button-pill" @click="baseTime *= 1.25">-</div>
          <div class="button-pill" @click="baseTime /= 1.25">+</div> -->

          Max Time (seconds):
          <input type="text" v-model="timeline.totalTime" />
          Current Time: {{ (timeline.totalTime * timeinfo.timelinePercentage).toFixed(2) }}
        </div>

      </div>
    </div>
    <div class="timeline" ref="toucher" v-bind="timeline = timeline || getTemplate()">
      <div class="wider"></div>
      <div class="track-holder" :key="tr._id" v-for="(tr) in tracks" :ref="`holder`">
        <timeline-track :track="tr">
          <timeline-diamond :editor="editor" :mode="'start'" slot="start">
            <div class="no-sel full-center">
              {{ tr.start.toFixed(1) }}s
            </div>
          </timeline-diamond>
          <timeline-spread slot="spread">
            <div slot="editor" class="no-sel spread-edit">
              <input type="text" class="text-bucket" v-model="tr.title" style="">
              <div class="remove-spread" @click="tryRemoveTrack(tracks, tr)">
                <span v-if="!tr.trashed" >X</span>
                <span v-if="tr.trashed" >Confirm</span>
              </div>
            </div>
            <div slot="dragger" class="no-sel full-center">
              {{ (tr.end - tr.start).toFixed(1) }}s
            </div>
          </timeline-spread>
          <timeline-diamond :editor="editor" :mode="'end'" slot="end">
            <div class="no-sel full-center">
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
export default {
  props: {
    title: {
      default: 'Timeline Control'
    },
    doSync: {},
    editor: {},
    timeinfo: {},
    timeline: {}
  },
  components: {
    'timeline-spread': require('./timeline-spread.vue').default,
    'timeline-track': require('./timeline-track.vue').default,
    'timeline-diamond': require('./timeline-diamond.vue').default
  },
  data () {
    return {
      canvas: {},
      baseTime: 30,
      initBaseTime: 30,
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
        this.doSync('update-timleine')
      }
    },
    trackJSON: {
      deep: true,
      handler () {
        this.doSync('update-timleine')
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
        end: 20,
        title: 'speed' + trs.length
      }
      trs.push(tr)
      this.doSync('update-timleine')
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
        this.doSync('update-timleine')
      }
      // }
    },
    play () {
      this.timeinfo.timelineControl = 'timer'
      this.timeinfo.timelinePercentageLast = this.timeinfo.timelinePercentage
      this.timeinfo.timelinePlaying = true
      this.timeinfo.start = window.performance.now() * 0.001 - this.timeinfo.timelinePercentageLast * this.timeline.totalTime
      this.$forceUpdate()
      this.doSync('play')
    },
    restart () {
      this.timeinfo.timelineControl = 'timer'
      this.timeinfo.timelinePercentageLast = this.timeinfo.timelinePercentage
      this.timeinfo.timelinePlaying = true
      this.timeinfo.start = window.performance.now() * 0.001
      this.$forceUpdate()
      this.doSync('restart')
    },
    pause () {
      this.timeinfo.timelineControl = 'timer'
      this.timeinfo.timelinePlaying = false
      this.$forceUpdate()
      this.doSync('pause')
    },
    hover () {
      this.timeinfo.timelineControl = 'hover'
      this.timeinfo.timelinePlaying = false
      this.$forceUpdate()
      this.doSync('hovering')
    },
    handleHover () {
      this.timeinfo.timelinePercentage = 0
      this.timeinfo.totalTime = this.totalTime

      this.$forceUpdate()

      let dom = this.$refs['toucher']
      let onupdateTick = (evt) => {
        if (this.timeinfo.timelineControl === 'hover') {
          let now = evt.pageX - this.rect.left + dom.scrollLeft
          let width = this.toucherRect.width - this.sizer

          this.timeinfo.timelinePercentage = Number((now) / (width))
          this.timeinfo.timelinePercentageLast = this.timeinfo.timelinePercentage
          this.timeinfo.totalTime = this.totalTime
        }
      }
      setInterval(() => {
        let width = this.toucherRect.width - this.sizer
        if (this.$refs['timetick']) {
          let ticker = Number(0.1 + this.timeinfo.timelinePercentage * (width) + 0)
          if (isNaN(ticker)) {
            ticker = 0
          }
          this.$refs['timetick'].style.transform = `translateZ(1px) translateX(${ticker.toFixed(1)}px)`
        }
        if (this.$refs['timetick2']) {
          let tickerMaxTime = Number(0 + (width) + 0)
          if (isNaN(tickerMaxTime)) {
            tickerMaxTime = 0
          }
          this.$refs['timetick2'].style.transform = `translateZ(1px) translateX(${tickerMaxTime.toFixed(1)}px)`
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

      let isDown = false
      dom.addEventListener('touchstart', evt => {
        isDown = true
      })
      window.addEventListener('touchmove', (evt) => {
        if (isDown && evt.touches[0]) {
          this.hover()
          onupdateTick({ pageX: evt.touches[0].pageX })
        }
      })
      window.addEventListener('touchend', (evt) => {
        isDown = false
        this.play()
      })
    },
    getTemplate () {
      this.$nextTick(() => {
        this.doSync('update-timleine')
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
  min-height: 275px;
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
  z-index: 1;
  background-color: blue;
  pointer-events: none;
}
.timetick2{
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
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
.no-sel{
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
