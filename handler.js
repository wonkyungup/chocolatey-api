'use strict'

import axios from 'axios'
import zlib from 'zlib'
import * as cheerio from 'cheerio'
import Response from './assets/response'
import Defs from './assets/constants'

const getGunzipSync = async (packageName) => {
    try {
        const html = await axios.get(`${Defs.CHOCOLATEY_URL}/${packageName}`, { responseType: Defs.ZLIB_RESPONSE_TYPE })
        return zlib.gunzipSync(html.data)
    } catch (err) {
        throw new Error(err['message'])
    }
}

export const index = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const app = {}

    try {
        const $ = cheerio.load(await getGunzipSync(event.pathParameters['packageName']))
        const $main = $('#package-sidebar')

        app['Name'] = event.pathParameters['packageName']
        app['Downloads'] = $main.find('h3:eq(0)').text()
        app['Last Update'] = $main.find('h3:eq(2)').text()
        app['Package Maintainer(s)'] = []
        $main.find('ul:eq(0)').children('li').each((i, li) => {
            $(li).find('span').each((i, span) => {
                app['Package Maintainer(s)'].push($(span).text())
            })
        })

        app['Software Author(s)'] = $main.find('ul:eq(1)').text().replace(/(\s\s+)/g, ' ').trim()
        app['Tags'] = []
        $main.find('.badge, .bg-primary').each((i, a) => {
            if (app['Tags'].indexOf($(a).text()) < 0) {
                app['Tags'].push($(a).text())
            }
        })

        app['Additional Links'] = {}
        $main.find('#additional-links').children('ul').each((i, ul) => {
            $(ul).find('li > a').each((j, a) => {
                app['Additional Links'][$(a).text().replace(/[\?\:]/g, '').trim()] = $(a).attr('href')
            })
        })

        app['Description'] = $('#description').text().replace(/(\s\s+)/g, '')
        app['Files'] = []
        $('#files').children('div').each((i, div) => {
            $(div).find('span').each((j, span) => {
                app['Files'].push($(span).text())
            })
        })

        app['Virus Scan Results'] = {}
        $main.find('#virus').children('ul').each((i, ul) => {
            $(ul).find('li > a').each((j, a) => {
                app['Virus Scan Results'][$(a).text()] = $(a).attr('href')
            })
        })

        app['Version History'] = {}
        $main.find('#versionhistory').children().each((i, tbl) => {
            $(tbl).find('tbody tr').each((j, tr) => {
                const version = $(tr).find('td').eq(1).text().trim().split(/\s/g)

                if (version.length > 0) {
                    app['Version History'][version[version.length - 1]] = {
                        Downloads: $(tr).find('td').eq(2).text().trim(),
                        "Last Updated": $(tr).find('td').eq(3).text().trim(),
                        Status: $(tr).find('td').eq(4).text().trim()
                    }
                }
            })
        })

        app['Copyright'] = $main.find('#copyright p').text()
        app['Release Notes'] = []
        $main.find('#releasenotes p').children().each((i, p) => {
            if ($(p).text()) {
                app['Release Notes'].push($(p).text())
            }
        })

        app['Dependencies'] = []
        $main.find('#dependencySets').children().each((i, ul) => {
            $(ul).find('li > span').each((j, span) => {
                app['Dependencies'].push($(span).text().replace(/(\s\s+)/g, ' ').trim())
            })
        })
    } catch (error) {
        return Response.success(Defs.CHOCOLATEY_CATCH_ERROR)
    }

    return Response.success(app)
}
