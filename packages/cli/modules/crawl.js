const fs = require('fs')
const path = require('path')

const crawl = (dir, crawlFunc) => {
    const resolvedDir = path.resolve(dir)
    return new Promise((resolve) => {
        let files = []
        let error = null
        try {
            files = fs.readdirSync(resolvedDir)
        } catch (err) {
            error = err
        }
        return crawlFunc(error, resolvedDir, files)
            .then((done) => {
                if (done) return resolve(true)
                const parentDir = path.resolve(dir, '..')
                if (parentDir === resolvedDir) return resolve(true)
                return crawl(parentDir, crawlFunc)
            })
            .then((done) => resolve(done))
    })
}

module.exports = crawl
