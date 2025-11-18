// src/tsparticles.vue3.js
import { defineComponent, h } from 'vue'
import { tsParticles } from 'tsparticles'

export default defineComponent({
  name: 'Particles',
  props: {
    id: { type: String, default: 'tsparticles' },
    options: { type: Object, required: true },
  },
  mounted() {
    tsParticles.load(this.id, this.options)
  },
  render() {
    return h('div', {
      id: this.id,
      style: 'width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;',
    })
  },
})
