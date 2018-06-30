import Loki from 'lokijs'
import data from '../Data'

let loki = null

export let tokens = null


export const init = (cb) => {
    loki = new Loki('main.db')
}

export const instance = () => {
    return loki
}

export const save = () => {
    loki.saveDatabase(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Database saved.");
        }
    })
}

export const clean = () => {
    loki.getCollection('tokens') && loki.getCollection('tokens').chain().remove()
}

export const reload = () => {
    clean()

    tokens = loki.addCollection('tokens')
    tokens.insert(data.tokens)

    save()
}

export const toObject = () => {
    return {
        tokens: tokens.data
    }
}

init()
reload()