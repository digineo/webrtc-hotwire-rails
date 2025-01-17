import { Controller } from 'stimulus'

export default class MediumController extends Controller {
  connect () {
    this.reRenderMediaElement()
    this.dispatch('connect', {
      detail: { clientId: this.clientIdValue }
    })
  }


  // Fix potentially blank videos due to autoplay rules?
  reRenderMediaElement () {
    const mediaElement = this.mediaElementTarget
    const clone = mediaElement.cloneNode(true)
    mediaElement.parentNode.insertBefore(clone, mediaElement)
    mediaElement.remove()
  }

  disconnect () {
    this.dispatch('disconnect', {
      detail: { clientId: this.clientIdValue }
    })
  }

  dispatch (eventName, { target = this.element, detail = {}, bubbles = true, cancelable = true } = {}) {
    const type = `${this.identifier}:${eventName}`
    const event = new CustomEvent(type, { detail, bubbles, cancelable })
    target.dispatchEvent(event)
    return event
  }
}

MediumController.values = { clientId: String }
MediumController.targets = ['mediaElement']
