import axios from 'axios'
import * as zlib from 'zlib'
import * as cheerio from 'cheerio'
import Defs from './constants'

export default class App {
    constructor(name) {
        this.name = name
        this.$ = null
        this.$main = null
    }

    onError (msg) {
        throw new Error(`ERROR :: RETRIEVE :: ${msg}`)
    }

    async set$ () {
        let result
        try {
            const uri = `${Defs.CHOCOLATEY_URL}/${this.name}`
            result = await axios.get(uri, { [Defs.STR_RESPONSE_TYPE]: Defs.STR_ARRAY_BUFFER })
            result = zlib.unzipSync(result['data'])

            this.$ = cheerio.load(result)
            this.$main = this.$('#packageSidebar')

            return this
        } catch (err) {
            this.onError(err['message'])
        }
    }

    getAppName () {
        try {
            return this.name
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getDownloads () {
        try {
            const _$main = this.$main
            return _$main.find('h3:eq(0)').text()
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getLastUpdate () {
        try {
            const _$main = this.$main
            return _$main.find('h3:eq(2)').text()
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getPackageMaintainers () {
        try {
            const list = []
            const _$ = this.$
            const _$main = this.$main

            _$main.find('ul:eq(0)').children('li').each((i, li) => {
                _$(li).find('span').each((i, span) => {
                    list.push(_$(span).text())
                })
            })

            return list
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getSoftwareAuthors () {
        try {
            const _$main = this.$main
            return _$main.find('ul:eq(1)').text().replace(/(\s\s+)/g, ' ').trim()
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getTags () {
        try {
            const list = []
            const _$ = this.$
            const _$main = this.$main

            _$main.find('.badge, .bg-primary').each((i, a) => {
                if (list.indexOf(_$(a).text()) < 0) {
                    list.push(_$(a).text())
                }
            })

            return list
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getAdditionalLinks () {
        try {
            const obj = {}
            const _$ = this.$
            const _$main = this.$main

            _$main.find('#additional-links').children('ul').each((i, ul) => {
                _$(ul).find('li > a').each((j, a) => {
                    obj[_$(a).text().replace(/[\?\:]/g, '').trim()] = _$(a).attr('href')
                })
            })

            return obj
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getDescription () {
        try {
            const _$ = this.$
            return _$('#description').text().replace(/(\s\s+)/g, '')
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getFiles () {
        try {
            const list = []
            const _$ = this.$

            _$('#files').children('div').each((i, div) => {
                _$(div).find('span').each((j, span) => {
                    list.push(_$(span).text())
                })
            })

            return list
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getVirusScanResults () {
        try {
            const obj = {}
            const _$ = this.$
            const _$main = this.$main

            _$main.find('#virus').children('ul').each((i, ul) => {
                _$(ul).find('li > a').each((j, a) => {
                    obj[_$(a).text()] = _$(a).attr('href')
                })
            })

            return obj
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getVersionHistory () {
        try {
            const obj = {}
            const _$ = this.$
            const _$main = this.$main

            _$main.find('#versionhistory').children().each((i, tbl) => {
                _$(tbl).find('tbody tr').each((j, tr) => {
                    const version = _$(tr).find('td').eq(1).text().trim().split(/\s/g)

                    if (version.length > 0) {
                        obj[version[version.length - 1]] = {
                            Downloads: _$(tr).find('td').eq(2).text().trim(),
                            "Last Updated": _$(tr).find('td').eq(3).text().trim(),
                            Status: _$(tr).find('td').eq(4).text().trim()
                        }
                    }
                })
            })

            return obj
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getCopyright () {
        try {
            const _$main = this.$main
            return _$main.find('#copyright p').text()
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getReleaseNotes () {
        try {
            const list = []
            const _$ = this.$
            const _$main = this.$main

            _$main.find('#releasenotes p').children().each((i, p) => {
                if (_$(p).text()) {
                    list.push(_$(p).text())
                }
            })

            return list
        } catch (err) {
            this.onError(err['message'])
        }
    }

    async getDependencies () {
        try {
            const list = []
            const _$ = this.$
            const _$main = this.$main

            _$main.find('#dependencySets').children().each((i, ul) => {
                _$(ul).find('li > span').each((j, span) => {
                    list.push(_$(span).text().replace(/(\s\s+)/g, ' ').trim())
                })
            })

            return list
        } catch (err) {
            this.onError(err['message'])
        }
    }
}
