import Loki from 'lokijs'
import data from '../Data'

let loki = null

export let tokens = null
export let books = null
export let sites = null
export let courses = null
export let exchanges = null
export let faq = null
export let hardwareWallets = null
export let softwareWallets = null
export let videos = null
export let notifications = null


export const init = (cb) => {
    loki = new Loki('main.db')
}

export const instance = () => {
    return loki
}

export const clean = () => {
    loki.getCollection('tokens') && loki.getCollection('tokens').chain().remove()
    loki.getCollection('books') && loki.getCollection('books').chain().remove()
    loki.getCollection('sites') && loki.getCollection('sites').chain().remove()
    loki.getCollection('courses') && loki.getCollection('courses').chain().remove()
    loki.getCollection('exchanges') && loki.getCollection('exchanges').chain().remove()
    loki.getCollection('faq') && loki.getCollection('faq').chain().remove()
    loki.getCollection('hardwareWallets') && loki.getCollection('hardwareWallets').chain().remove()
    loki.getCollection('softwareWallets') && loki.getCollection('softwareWallets').chain().remove()
    loki.getCollection('videos') && loki.getCollection('videos').chain().remove()
    loki.getCollection('notifications') && loki.getCollection('notifications').chain().remove()
}

export const reload = () => {
    clean()

    tokens = loki.addCollection('tokens')
    tokens.insert(data.tokens)

    books = loki.addCollection('books')
    books.insert(data.books)

    sites = loki.addCollection('sites')
    sites.insert(data.sites)

    courses = loki.addCollection('courses')
    courses.insert(data.courses)

    exchanges = loki.addCollection('exchanges')
    exchanges.insert(data.exchanges)

    faq = loki.addCollection('faq')
    faq.insert(data.faq)

    hardwareWallets = loki.addCollection('hardwareWallets')
    hardwareWallets.insert(data.hardwareWallets)

    softwareWallets = loki.addCollection('softwareWallets')
    softwareWallets.insert(data.softwareWallets)

    videos = loki.addCollection('videos')
    videos.insert(data.videos)

    notifications = loki.addCollection('notifications')
    notifications.insert(data.notifications)
}

init()
reload()