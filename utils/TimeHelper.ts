import moment from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'

moment.extend(relativeTime)
moment.extend(utc)
moment.extend(duration)

const isTimeError = (time: any) => time === 'Invalid Date'
const timeWrapper = (time: any, defaultTime: string) => isTimeError(time) ? defaultTime : time

const dateFormat = 'YYYY-MM-DD'
const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'
const timeFormat = 'HH:mm'

export class TimeHelper {
  static toUTC = (time: string): string => {
    if (!time) {
      return time
    }
    try {
      const newTime = moment(time).subtract(7, 'hour').format(dateTimeFormat)
      return timeWrapper(newTime, time)
    } catch (e) {
      return time.toString()
    }
  }

  static toLocal = (time: string): string => {
    if (!time) {
      return time
    }
    try {
      const newTime = moment(time).add(7, 'hour').format(dateTimeFormat)
      return timeWrapper(newTime, time)
    } catch (e) {
      return time
    }
  }

  static getCurrentDate = (): string => {
    const newTime = moment().format(dateFormat)
    return timeWrapper(newTime, '')
  }

  static getDateFormTime = (time: string): string => {
    if (!time) {
      return time
    }
    const newTime = moment(time).format(dateFormat)
    return timeWrapper(newTime, time)
  }

  static getDateFormTimeWithLocal = (time: string): string => {
    if (!time) {
      return time
    }
    const newTime = moment(TimeHelper.toLocal(time)).format(dateFormat)
    return timeWrapper(newTime, time)
  }

  static getISODateTimeFormTime = (time: string): string => {
    if (!time) {
      return time
    }

    const testTime = moment(time).format(dateTimeFormat)
    if (isTimeError(testTime)) {
      return time
    }

    const newTime = moment(time).toISOString()
    return (isTimeError(newTime) || !newTime) ? time : newTime
  }

  static getDateTimeFormTime = (time: string): string => {
    if (!time) {
      return time
    }
    const newTime = moment(time).format(dateTimeFormat)
    return timeWrapper(newTime, time)
  }

  static getTimeFormTime = (time: string): string => {
    if (!time) {
      return time
    }
    const newTime = moment(time).format(timeFormat)
    return timeWrapper(newTime, time)
  }

  static getCurrentDateTime = (): string => {
    const newTime = moment().format(dateTimeFormat)
    return timeWrapper(newTime, '')
  }
}
