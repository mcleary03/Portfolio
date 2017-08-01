import 'aframe'

export default AFRAME.registerComponent('change-scale-on-hover', {
  schema: {
    scale: { default: '2 2 2' }
  },
  init: function () {
    const data = this.data
    const el = this.el
    const defaultScale = el.getAttribute('scale')

    el.addEventListener('mouseenter', function () {
      el.setAttribute('scale', data.scale)
    })
    el.addEventListener('mouseleave', function () {
      el.setAttribute('scale', defaultScale)
    })
  }
})
