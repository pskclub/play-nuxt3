import { defineStore } from 'pinia'
import { useVideos } from '~/hooks/videos'

export const useVideoStore = defineStore('video', () => useVideos())
