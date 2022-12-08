# Chocolatey-api

## Contents

- [Quick Start](#quick-start)

## <a name="quick-start"></a>Quick Start

### Getting started

To get your product package name, please do the following:

1. Open [Chocolatey software](https://community.chocolatey.org/packages) browser 
2. Copy the package name
![chocolatey-package-name](https://user-images.githubusercontent.com/34180230/204074625-ad520ddc-b3b8-40e2-9b2e-c3191de5e224.png)




#### If you have a package name, send method Get to the corresponding API address.
- **https://api.for-developer.link/choco/app/{packageName}**
  - EX) https://api.for-developer.link/choco/app/googlechrome
* Please note that it will take some time (2-3 seconds)
- Get it as JSON type:
```
{
  "Name": "googlechrome",
  "Downloads": "98,789,057",
  "Last Update": "24 Nov 2022",
  "Package Maintainer(s)": [
    "chocolatey-community"
  ],
  "Software Author(s)": "Google Inc.",
  "Tags": [
    "google",
    "chrome",
    "web",
    "internet",
    "browser",
    "admin"
  ],
  "Additional Links": {
    "Software Site": "https://www.google.com/chrome/browser/",
    "Software License": "https://www.google.it/intl/en/chrome/browser/privacy/eula_text.html",
    "Package Source": "https://github.com/chocolatey-community/chocolatey-packages/tree/master/automatic/googlechrome",
    "Package outdated": "https://docs.chocolatey.org/en-us/community-repository/users/package-triage-process",
    "Package broken": "https://docs.chocolatey.org/en-us/community-repository/users/package-triage-process",
    "Contact Maintainers": "/packages/GoogleChrome/ContactOwners",
    "Contact Site Admins": "/packages/GoogleChrome/107.0.5304.122/ContactAdmins",
    "Software Vendor": "https://docs.chocolatey.org/en-us/community-repository/users/package-triage-process#are-you-a-software-vendor",
    "Report Abuse": "/packages/GoogleChrome/107.0.5304.122/ReportAbuse",
    "Download": "https://community.chocolatey.org/api/v2/package/GoogleChrome/107.0.5304.122"
  },
  "Description": "Chrome is a fast, simple, and secure web browser, built for the modern web.\nNotesThis package uses Chrome's administrative MSI installer and installs the 32-bit on 32-bit OSes and the 64-bit version on 64-bit OSes. If this package is installed on a 64-bit OS and the 32-bit version of Chrome is already installed, the package keeps installing/updating the 32-bit version of Chrome.\nThis package always installs the latest version of Google Chrome, regardless of the version specified in the package. Google does not officially offer older versions of Chrome for download. Because of this you may get checksum mismatch between the time Google releases a new installer, and the package is automatically updated.\nIf the package is out of date please check Version History for the latest submitted version. If you have a question, please ask it in Chocolatey Community Package Discussions or raise an issue on the Chocolatey Community Packages Repository if you have problems with the package. Disqus comments will generally not be responded to.",
  "Files": [
    "tools\\chocolateyInstall.ps1",
    "tools\\helpers.ps1"
  ],
  "Virus Scan Results": {
    "GoogleChrome.107.0.5304.122.nupkg (5a2203724ad8)": "https://www.virustotal.com/gui/file/5a2203724ad87e27d5ebb54fcde2401c2f868cca72a8cf7e3198acbb877bf04f/detection/f-5a2203724ad87e27d5ebb54fcde2401c2f868cca72a8cf7e3198acbb877bf04f-1669335915",
    "googlechromestandaloneenterprise64.msi (a6e7742042ed)": "https://www.virustotal.com/gui/file/a6e7742042ed4def2e9ee7bf72d67e99fb4f782f93c704a8673a3a3a1c578a11/detection/f-a6e7742042ed4def2e9ee7bf72d67e99fb4f782f93c704a8673a3a3a1c578a11-1669313204",
    "googlechromestandaloneenterprise.msi (8abb0ee38cce)": "https://www.virustotal.com/gui/file/8abb0ee38cce52415394e6d42e6e5a5bf6446d2438fc48c77f49e81c5519b0a4/detection/f-8abb0ee38cce52415394e6d42e6e5a5bf6446d2438fc48c77f49e81c5519b0a4-1669320612"
  },
  "Version History": {
    "107.0.5304.122": {
      "Downloads": "396241",
      "Last Updated": "Thursday, November 24, 2022",
      "Status": "Approved"
    },
    "107.0.5304.107": {
      "Downloads": "1350234",
      "Last Updated": "Wednesday, November 9, 2022",
      "Status": "Approved"
    },
    "107.0.5304.88": {
      "Downloads": "1383777",
      "Last Updated": "Friday, October 28, 2022",
      "Status": "Approved"
    },
    "107.0.5304.63": {
      "Downloads": "566093",
      "Last Updated": "Wednesday, October 26, 2022",
      "Status": "Approved"
    },
    "106.0.5249.119": {
      "Downloads": "1261745",
      "Last Updated": "Wednesday, October 12, 2022",
      "Status": "Approved"
    },
    .....
  },
  "Copyright": "",
  "Release Notes": [],
  "Dependencies": [
    "chocolatey-core.extension (≥ 1.3.3)"
  ]
}
```

### Precautions when using
- Sometimes, if you don't get results, try after a few minutes
- Because it is a personal project, the service can be stopped at any time in the event of a problem

### Questions
- Please register on the issue card
