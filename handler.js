'use strict'

import App from './assets/app'
import Response from './assets/response'
import Defs from './assets/constants'

export const index = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const choco = {}

    try {
        const app = new App(event.pathParameters['packageName'])
        if (!app['$']) await app.set$()

        choco['Name'] = app.getAppName()
        choco['Downloads'] = await app.getDownloads()
        choco['Last Update'] = await app.getLastUpdate()
        choco['Package Maintainer(s)'] = await app.getPackageMaintainers()
        choco['Software Author(s)'] = await app.getSoftwareAuthors()
        choco['Tags'] = await app.getTags()
        choco['Additional Links'] = await app.getAdditionalLinks()
        choco['Description'] = await app.getDescription()
        choco['Files'] = await app.getFiles()
        choco['Virus Scan Results'] = await app.getVirusScanResults()
        choco['Version History'] = await app.getVersionHistory()
        choco['Copyright'] = await app.getCopyright()
        choco['Release Notes'] = await app.getReleaseNotes()
        choco['Dependencies'] = await app.getDependencies()
    } catch (error) {
        return Response.success(Defs.CHOCOLATEY_CATCH_ERROR)
    }

    return Response.success(choco)
}
