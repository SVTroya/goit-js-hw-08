import Player from "@vimeo/player"
import storage from "./storage.js"
import throttle from "lodash/throttle"
const storageKey = 'videoplayer-current-time'
const iframe = document.querySelector('#vimeo-player')

const player = new Player(iframe)
player.on('timeupdate', throttle((data) => storage.save(storageKey, data.seconds), 1000))

player.on('loaded', () => {
  player.setCurrentTime(storage.load(storageKey ))
})