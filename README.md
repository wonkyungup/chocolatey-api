# Chocolatey-api

## Contents

- [Quick Start](#quick-start)

## <a name="quick-start"></a>Quick Start

### Getting started

To get your product ID, please do the following:

1. Open [Chocolatey software](https://community.chocolatey.org/packages) browser 
2. Copy the package name
![chocolatey-package-name](https://user-images.githubusercontent.com/34180230/204074625-ad520ddc-b3b8-40e2-9b2e-c3191de5e224.png)




#### If you have a product ID, send method Get to the corresponding API address.
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
    "106.0.5249.103": {
      "Downloads": "1018372",
      "Last Updated": "Thursday, October 6, 2022",
      "Status": "Approved"
    },
    "106.0.5249.91": {
      "Downloads": "909137",
      "Last Updated": "Friday, September 30, 2022",
      "Status": "Approved"
    },
    "106.0.5249.62": {
      "Downloads": "810025",
      "Last Updated": "Tuesday, September 27, 2022",
      "Status": "Approved"
    },
    "105.0.5195.127": {
      "Downloads": "1355536",
      "Last Updated": "Tuesday, September 13, 2022",
      "Status": "Approved"
    },
    "105.0.5195.102": {
      "Downloads": "1169200",
      "Last Updated": "Friday, September 2, 2022",
      "Status": "Approved"
    },
    "105.0.5195.54": {
      "Downloads": "785544",
      "Last Updated": "Wednesday, August 31, 2022",
      "Status": "Approved"
    },
    "104.0.5112.102": {
      "Downloads": "1412266",
      "Last Updated": "Wednesday, August 17, 2022",
      "Status": "Approved"
    },
    "104.0.5112.81": {
      "Downloads": "1502034",
      "Last Updated": "Tuesday, August 2, 2022",
      "Status": "Approved"
    },
    "103.0.5060.134": {
      "Downloads": "1173216",
      "Last Updated": "Wednesday, July 20, 2022",
      "Status": "Approved"
    },
    "103.0.5060.114": {
      "Downloads": "1255909",
      "Last Updated": "Monday, July 4, 2022",
      "Status": "Approved"
    },
    "103.0.5060.66": {
      "Downloads": "874455",
      "Last Updated": "Tuesday, June 28, 2022",
      "Status": "Approved"
    },
    "103.0.5060.53": {
      "Downloads": "968929",
      "Last Updated": "Wednesday, June 22, 2022",
      "Status": "Approved"
    },
    "102.0.5005.115": {
      "Downloads": "1237418",
      "Last Updated": "Thursday, June 9, 2022",
      "Status": "Approved"
    },
    "102.0.5005.63": {
      "Downloads": "1448631",
      "Last Updated": "Wednesday, May 25, 2022",
      "Status": "Approved"
    },
    "101.0.4951.67": {
      "Downloads": "1172041",
      "Last Updated": "Friday, May 13, 2022",
      "Status": "Approved"
    },
    "101.0.4951.64": {
      "Downloads": "530864",
      "Last Updated": "Wednesday, May 11, 2022",
      "Status": "Approved"
    },
    "101.0.4951.54": {
      "Downloads": "1237618",
      "Last Updated": "Monday, May 2, 2022",
      "Status": "Approved"
    },
    "101.0.4951.41": {
      "Downloads": "850148",
      "Last Updated": "Wednesday, April 27, 2022",
      "Status": "Approved"
    },
    "100.0.4896.127": {
      "Downloads": "1115750",
      "Last Updated": "Friday, April 15, 2022",
      "Status": "Approved"
    },
    "100.0.4896.88": {
      "Downloads": "621080",
      "Last Updated": "Tuesday, April 12, 2022",
      "Status": "Approved"
    },
    "100.0.4896.75": {
      "Downloads": "798136",
      "Last Updated": "Tuesday, April 5, 2022",
      "Status": "Approved"
    },
    "100.0.4896.60": {
      "Downloads": "895116",
      "Last Updated": "Wednesday, March 30, 2022",
      "Status": "Approved"
    },
    "99.0.4844.84": {
      "Downloads": "678051",
      "Last Updated": "Saturday, March 26, 2022",
      "Status": "Approved"
    },
    "99.0.4844.82": {
      "Downloads": "780487",
      "Last Updated": "Sunday, March 20, 2022",
      "Status": "Approved"
    },
    "99.0.4844.74": {
      "Downloads": "679668",
      "Last Updated": "Wednesday, March 16, 2022",
      "Status": "Approved"
    },
    "99.0.4844.51": {
      "Downloads": "1248752",
      "Last Updated": "Wednesday, March 2, 2022",
      "Status": "Approved"
    },
    "98.0.4758.102": {
      "Downloads": "1246491",
      "Last Updated": "Tuesday, February 15, 2022",
      "Status": "Approved"
    },
    "98.0.4758.82": {
      "Downloads": "782367",
      "Last Updated": "Wednesday, February 9, 2022",
      "Status": "Approved"
    },
    "98.0.4758.80": {
      "Downloads": "1497187",
      "Last Updated": "Wednesday, February 2, 2022",
      "Status": "Approved"
    },
    "97.0.4692.99": {
      "Downloads": "1189053",
      "Last Updated": "Thursday, January 20, 2022",
      "Status": "Approved"
    },
    "97.0.4692.71": {
      "Downloads": "1047843",
      "Last Updated": "Wednesday, January 5, 2022",
      "Status": "Approved"
    },
    "96.0.4664.110": {
      "Downloads": "1073980",
      "Last Updated": "Tuesday, December 14, 2021",
      "Status": "Approved"
    },
    "96.0.4664.93": {
      "Downloads": "719294",
      "Last Updated": "Tuesday, December 7, 2021",
      "Status": "Approved"
    },
    "96.0.4664.45": {
      "Downloads": "1107958",
      "Last Updated": "Monday, November 15, 2021",
      "Status": "Approved"
    },
    "95.0.4638.69": {
      "Downloads": "1017159",
      "Last Updated": "Friday, October 29, 2021",
      "Status": "Approved"
    },
    "95.0.4638.54": {
      "Downloads": "840682",
      "Last Updated": "Wednesday, October 20, 2021",
      "Status": "Approved"
    },
    "94.0.4606.81": {
      "Downloads": "925064",
      "Last Updated": "Thursday, October 7, 2021",
      "Status": "Approved"
    },
    "94.0.4606.71": {
      "Downloads": "760351",
      "Last Updated": "Friday, October 1, 2021",
      "Status": "Approved"
    },
    "94.0.4606.61": {
      "Downloads": "703741",
      "Last Updated": "Friday, September 24, 2021",
      "Status": "Approved"
    },
    "94.0.4606.54": {
      "Downloads": "508032",
      "Last Updated": "Tuesday, September 21, 2021",
      "Status": "Approved"
    },
    "93.0.4577.82": {
      "Downloads": "670786",
      "Last Updated": "Tuesday, September 14, 2021",
      "Status": "Approved"
    },
    "93.0.4577.63": {
      "Downloads": "795002",
      "Last Updated": "Wednesday, September 1, 2021",
      "Status": "Approved"
    },
    "92.0.4515.159": {
      "Downloads": "836237",
      "Last Updated": "Tuesday, August 17, 2021",
      "Status": "Approved"
    },
    "92.0.4515.131": {
      "Downloads": "726500",
      "Last Updated": "Tuesday, August 3, 2021",
      "Status": "Approved"
    },
    "92.0.4515.107": {
      "Downloads": "690089",
      "Last Updated": "Wednesday, July 21, 2021",
      "Status": "Approved"
    },
    "91.0.4472.164": {
      "Downloads": "470114",
      "Last Updated": "Friday, July 16, 2021",
      "Status": "Approved"
    },
    "91.0.4472.124": {
      "Downloads": "842306",
      "Last Updated": "Friday, June 25, 2021",
      "Status": "Approved"
    },
    "91.0.4472.114": {
      "Downloads": "530268",
      "Last Updated": "Friday, June 18, 2021",
      "Status": "Approved"
    },
    "91.0.4472.106": {
      "Downloads": "483112",
      "Last Updated": "Tuesday, June 15, 2021",
      "Status": "Approved"
    },
    "91.0.4472.101": {
      "Downloads": "433562",
      "Last Updated": "Thursday, June 10, 2021",
      "Status": "Approved"
    },
    "91.0.4472.77": {
      "Downloads": "745157",
      "Last Updated": "Wednesday, May 26, 2021",
      "Status": "Approved"
    },
    "90.0.4430.212": {
      "Downloads": "702315",
      "Last Updated": "Monday, May 10, 2021",
      "Status": "Approved"
    },
    "90.0.4430.93": {
      "Downloads": "610745",
      "Last Updated": "Tuesday, April 27, 2021",
      "Status": "Approved"
    },
    "90.0.4430.72": {
      "Downloads": "886358",
      "Last Updated": "Thursday, April 15, 2021",
      "Status": "Approved"
    },
    "89.0.4389.128": {
      "Downloads": "232229",
      "Last Updated": "Wednesday, April 14, 2021",
      "Status": "Approved"
    },
    "89.0.4389.114": {
      "Downloads": "529379",
      "Last Updated": "Wednesday, March 31, 2021",
      "Status": "Approved"
    },
    "89.0.4389.90": {
      "Downloads": "730255",
      "Last Updated": "Saturday, March 13, 2021",
      "Status": "Approved"
    },
    "89.0.4389.82": {
      "Downloads": "563040",
      "Last Updated": "Saturday, March 6, 2021",
      "Status": "Approved"
    },
    "89.0.4389.72": {
      "Downloads": "366432",
      "Last Updated": "Wednesday, March 3, 2021",
      "Status": "Approved"
    },
    "88.0.4324.190": {
      "Downloads": "565936",
      "Last Updated": "Tuesday, February 23, 2021",
      "Status": "Approved"
    },
    "88.0.4324.182": {
      "Downloads": "436848",
      "Last Updated": "Wednesday, February 17, 2021",
      "Status": "Approved"
    },
    "88.0.4324.150": {
      "Downloads": "573204",
      "Last Updated": "Friday, February 5, 2021",
      "Status": "Approved"
    },
    "88.0.4324.146": {
      "Downloads": "296673",
      "Last Updated": "Wednesday, February 3, 2021",
      "Status": "Approved"
    },
    "88.0.4324.104": {
      "Downloads": "567552",
      "Last Updated": "Friday, January 22, 2021",
      "Status": "Approved"
    },
    "87.0.4280.141": {
      "Downloads": "623840",
      "Last Updated": "Thursday, January 7, 2021",
      "Status": "Approved"
    },
    "87.0.4280.88": {
      "Downloads": "766498",
      "Last Updated": "Thursday, December 3, 2020",
      "Status": "Approved"
    },
    "87.0.4280.66": {
      "Downloads": "536436",
      "Last Updated": "Wednesday, November 18, 2020",
      "Status": "Approved"
    },
    "86.0.4240.198": {
      "Downloads": "408230",
      "Last Updated": "Thursday, November 12, 2020",
      "Status": "Approved"
    },
    "86.0.4240.193": {
      "Downloads": "356701",
      "Last Updated": "Tuesday, November 10, 2020",
      "Status": "Approved"
    },
    "86.0.4240.183": {
      "Downloads": "402897",
      "Last Updated": "Tuesday, November 3, 2020",
      "Status": "Approved"
    },
    "86.0.4240.111": {
      "Downloads": "498887",
      "Last Updated": "Wednesday, October 21, 2020",
      "Status": "Approved"
    },
    "86.0.4240.75": {
      "Downloads": "541227",
      "Last Updated": "Wednesday, October 7, 2020",
      "Status": "Approved"
    },
    "85.0.4183.121": {
      "Downloads": "2157877",
      "Last Updated": "Tuesday, September 22, 2020",
      "Status": "Approved"
    },
    "85.0.4183.102": {
      "Downloads": "509826",
      "Last Updated": "Tuesday, September 8, 2020",
      "Status": "Approved"
    },
    "85.0.4183.83": {
      "Downloads": "472428",
      "Last Updated": "Wednesday, August 26, 2020",
      "Status": "Approved"
    },
    "84.0.4147.135": {
      "Downloads": "362362",
      "Last Updated": "Wednesday, August 19, 2020",
      "Status": "Approved"
    },
    "84.0.4147.125": {
      "Downloads": "367298",
      "Last Updated": "Tuesday, August 11, 2020",
      "Status": "Approved"
    },
    "84.0.4147.105": {
      "Downloads": "404142",
      "Last Updated": "Tuesday, July 28, 2020",
      "Status": "Approved"
    },
    "84.0.4147.89": {
      "Downloads": "405777",
      "Last Updated": "Tuesday, July 14, 2020",
      "Status": "Approved"
    },
    "83.0.4103.116": {
      "Downloads": "548283",
      "Last Updated": "Monday, June 22, 2020",
      "Status": "Approved"
    },
    "83.0.4103.106": {
      "Downloads": "317860",
      "Last Updated": "Monday, June 15, 2020",
      "Status": "Approved"
    },
    "83.0.4103.97": {
      "Downloads": "377555",
      "Last Updated": "Wednesday, June 3, 2020",
      "Status": "Approved"
    },
    "83.0.4103.61": {
      "Downloads": "424736",
      "Last Updated": "Tuesday, May 19, 2020",
      "Status": "Approved"
    },
    "81.0.4044.138": {
      "Downloads": "450135",
      "Last Updated": "Wednesday, May 6, 2020",
      "Status": "Approved"
    },
    "81.0.4044.129": {
      "Downloads": "321977",
      "Last Updated": "Tuesday, April 28, 2020",
      "Status": "Approved"
    },
    "81.0.4044.122": {
      "Downloads": "282549",
      "Last Updated": "Wednesday, April 22, 2020",
      "Status": "Approved"
    },
    "81.0.4044.113": {
      "Downloads": "301740",
      "Last Updated": "Thursday, April 16, 2020",
      "Status": "Approved"
    },
    "81.0.4044.92": {
      "Downloads": "337219",
      "Last Updated": "Wednesday, April 8, 2020",
      "Status": "Approved"
    },
    "80.0.3987.163": {
      "Downloads": "281324",
      "Last Updated": "Friday, April 3, 2020",
      "Status": "Approved"
    },
    "80.0.3987.162": {
      "Downloads": "194123",
      "Last Updated": "Wednesday, April 1, 2020",
      "Status": "Approved"
    },
    "80.0.3987.149": {
      "Downloads": "440698",
      "Last Updated": "Wednesday, March 18, 2020",
      "Status": "Approved"
    },
    "80.0.3987.132": {
      "Downloads": "456291",
      "Last Updated": "Wednesday, March 4, 2020",
      "Status": "Approved"
    },
    "80.0.3987.122": {
      "Downloads": "355898",
      "Last Updated": "Tuesday, February 25, 2020",
      "Status": "Approved"
    },
    "80.0.3987.116": {
      "Downloads": "358287",
      "Last Updated": "Tuesday, February 18, 2020",
      "Status": "Approved"
    },
    "80.0.3987.106": {
      "Downloads": "160470",
      "Last Updated": "Friday, February 14, 2020",
      "Status": "Approved"
    },
    "80.0.3987.100": {
      "Downloads": "508063",
      "Last Updated": "Wednesday, February 12, 2020",
      "Status": "Approved"
    },
    "80.0.3987.87": {
      "Downloads": "392075",
      "Last Updated": "Wednesday, February 5, 2020",
      "Status": "Approved"
    },
    "79.0.3945.130": {
      "Downloads": "606809",
      "Last Updated": "Friday, January 17, 2020",
      "Status": "Approved"
    },
    "79.0.3945.117": {
      "Downloads": "385071",
      "Last Updated": "Wednesday, January 8, 2020",
      "Status": "Approved"
    },
    "79.0.3945.88": {
      "Downloads": "497311",
      "Last Updated": "Wednesday, December 18, 2019",
      "Status": "Approved"
    },
    "79.0.3945.79": {
      "Downloads": "361451",
      "Last Updated": "Wednesday, December 11, 2019",
      "Status": "Approved"
    },
    "78.0.3904.108": {
      "Downloads": "582185",
      "Last Updated": "Tuesday, November 19, 2019",
      "Status": "Approved"
    },
    "78.0.3904.97": {
      "Downloads": "416334",
      "Last Updated": "Thursday, November 7, 2019",
      "Status": "Approved"
    },
    "78.0.3904.87": {
      "Downloads": "294052",
      "Last Updated": "Friday, November 1, 2019",
      "Status": "Approved"
    },
    "78.0.3904.70": {
      "Downloads": "366119",
      "Last Updated": "Tuesday, October 22, 2019",
      "Status": "Approved"
    },
    "77.0.3865.120": {
      "Downloads": "380591",
      "Last Updated": "Thursday, October 10, 2019",
      "Status": "Approved"
    },
    "77.0.3865.90": {
      "Downloads": "531112",
      "Last Updated": "Wednesday, September 18, 2019",
      "Status": "Approved"
    },
    "77.0.3865.75": {
      "Downloads": "318917",
      "Last Updated": "Wednesday, September 11, 2019",
      "Status": "Approved"
    },
    "76.0.3809.132": {
      "Downloads": "490826",
      "Last Updated": "Tuesday, August 27, 2019",
      "Status": "Approved"
    },
    "76.0.3809.100": {
      "Downloads": "483683",
      "Last Updated": "Wednesday, August 7, 2019",
      "Status": "Approved"
    },
    "76.0.3809.87": {
      "Downloads": "289360",
      "Last Updated": "Wednesday, July 31, 2019",
      "Status": "Approved"
    },
    "75.0.3770.142": {
      "Downloads": "404617",
      "Last Updated": "Tuesday, July 16, 2019",
      "Status": "Approved"
    },
    "75.0.3770.100": {
      "Downloads": "492598",
      "Last Updated": "Tuesday, June 18, 2019",
      "Status": "Approved"
    },
    "75.0.3770.90": {
      "Downloads": "203948",
      "Last Updated": "Thursday, June 13, 2019",
      "Status": "Approved"
    },
    "75.0.3770.80": {
      "Downloads": "288291",
      "Last Updated": "Tuesday, June 4, 2019",
      "Status": "Approved"
    },
    "74.0.3729.169": {
      "Downloads": "301904",
      "Last Updated": "Wednesday, May 22, 2019",
      "Status": "Approved"
    },
    "74.0.3729.157": {
      "Downloads": "232377",
      "Last Updated": "Tuesday, May 14, 2019",
      "Status": "Approved"
    },
    "74.0.3729.131": {
      "Downloads": "298717",
      "Last Updated": "Wednesday, May 1, 2019",
      "Status": "Approved"
    },
    "74.0.3729.108": {
      "Downloads": "224576",
      "Last Updated": "Wednesday, April 24, 2019",
      "Status": "Approved"
    },
    "73.0.3683.103": {
      "Downloads": "362904",
      "Last Updated": "Friday, April 5, 2019",
      "Status": "Approved"
    },
    "73.0.3683.86": {
      "Downloads": "299901",
      "Last Updated": "Thursday, March 21, 2019",
      "Status": "Approved"
    },
    "73.0.3683.75": {
      "Downloads": "203750",
      "Last Updated": "Wednesday, March 13, 2019",
      "Status": "Approved"
    },
    "72.0.3626.121": {
      "Downloads": "301627",
      "Last Updated": "Saturday, March 2, 2019",
      "Status": "Approved"
    },
    "72.0.3626.119": {
      "Downloads": "180283",
      "Last Updated": "Friday, February 22, 2019",
      "Status": "Approved"
    },
    "72.0.3626.109": {
      "Downloads": "183880",
      "Last Updated": "Thursday, February 14, 2019",
      "Status": "Approved"
    },
    "72.0.3626.96": {
      "Downloads": "172556",
      "Last Updated": "Thursday, February 7, 2019",
      "Status": "Approved"
    },
    "72.0.3626.81": {
      "Downloads": "197786",
      "Last Updated": "Wednesday, January 30, 2019",
      "Status": "Approved"
    },
    "71.0.3578.98": {
      "Downloads": "435830",
      "Last Updated": "Thursday, December 13, 2018",
      "Status": "Approved"
    },
    "71.0.3578.80": {
      "Downloads": "179999",
      "Last Updated": "Wednesday, December 5, 2018",
      "Status": "Approved"
    },
    "70.0.3538.11000": {
      "Downloads": "253031",
      "Last Updated": "Monday, November 19, 2018",
      "Status": "Approved"
    },
    "70.0.3538.10200": {
      "Downloads": "200856",
      "Last Updated": "Saturday, November 10, 2018",
      "Status": "Approved"
    },
    "70.0.3538.7700": {
      "Downloads": "299367",
      "Last Updated": "Thursday, October 25, 2018",
      "Status": "Approved"
    },
    "70.0.3538.6700": {
      "Downloads": "202785",
      "Last Updated": "Wednesday, October 17, 2018",
      "Status": "Approved"
    },
    "69.0.3497.10000": {
      "Downloads": "401394",
      "Last Updated": "Tuesday, September 18, 2018",
      "Status": "Approved"
    },
    "69.0.3497.9200": {
      "Downloads": "131183",
      "Last Updated": "Wednesday, September 12, 2018",
      "Status": "Approved"
    },
    "69.0.3497.8100": {
      "Downloads": "217132",
      "Last Updated": "Wednesday, September 5, 2018",
      "Status": "Approved"
    },
    "68.0.3440.10600": {
      "Downloads": "383909",
      "Last Updated": "Thursday, August 9, 2018",
      "Status": "Approved"
    },
    "68.0.3440.8400": {
      "Downloads": "174104",
      "Last Updated": "Wednesday, August 1, 2018",
      "Status": "Approved"
    },
    "68.0.3440.7500": {
      "Downloads": "158622",
      "Last Updated": "Wednesday, July 25, 2018",
      "Status": "Approved"
    },
    "67.0.3396.9900": {
      "Downloads": "326175",
      "Last Updated": "Monday, June 25, 2018",
      "Status": "Approved"
    },
    "67.0.3396.8700": {
      "Downloads": "234943",
      "Last Updated": "Tuesday, June 12, 2018",
      "Status": "Approved"
    },
    "67.0.3396.7900": {
      "Downloads": "129921",
      "Last Updated": "Wednesday, June 6, 2018",
      "Status": "Approved"
    },
    "67.0.3396.6200": {
      "Downloads": "150409",
      "Last Updated": "Wednesday, May 30, 2018",
      "Status": "Approved"
    },
    "66.0.3359.18100": {
      "Downloads": "177978",
      "Last Updated": "Tuesday, May 15, 2018",
      "Status": "Approved"
    },
    "66.0.3359.17000": {
      "Downloads": "103472",
      "Last Updated": "Friday, May 11, 2018",
      "Status": "Approved"
    },
    "66.0.3359.13900": {
      "Downloads": "193563",
      "Last Updated": "Friday, April 27, 2018",
      "Status": "Approved"
    },
    "66.0.3359.11700": {
      "Downloads": "141130",
      "Last Updated": "Wednesday, April 18, 2018",
      "Status": "Approved"
    },
    "65.0.3325.18100": {
      "Downloads": "312136",
      "Last Updated": "Wednesday, March 21, 2018",
      "Status": "Approved"
    },
    "65.0.3325.16200": {
      "Downloads": "118795",
      "Last Updated": "Wednesday, March 14, 2018",
      "Status": "Approved"
    },
    "65.0.3325.14600": {
      "Downloads": "151523",
      "Last Updated": "Wednesday, March 7, 2018",
      "Status": "Approved"
    },
    "64.0.3282.18600": {
      "Downloads": "178399",
      "Last Updated": "Friday, February 23, 2018",
      "Status": "Approved"
    },
    "64.0.3282.16800": {
      "Downloads": "340798",
      "Last Updated": "Wednesday, February 14, 2018",
      "Status": "Approved"
    },
    "64.0.3282.16700": {
      "Downloads": "17874",
      "Last Updated": "Wednesday, February 14, 2018",
      "Status": "Approved"
    },
    "64.0.3282.14000": {
      "Downloads": "296633",
      "Last Updated": "Friday, February 2, 2018",
      "Status": "Approved"
    },
    "64.0.3282.11900": {
      "Downloads": "161129",
      "Last Updated": "Wednesday, January 24, 2018",
      "Status": "Approved"
    },
    "63.0.3239.132": {
      "Downloads": "284087",
      "Last Updated": "Friday, January 5, 2018",
      "Status": "Approved"
    },
    "63.0.3239.108": {
      "Downloads": "279666",
      "Last Updated": "Friday, December 15, 2017",
      "Status": "Approved"
    },
    "63.0.3239.84": {
      "Downloads": "144355",
      "Last Updated": "Thursday, December 7, 2017",
      "Status": "Approved"
    },
    "62.0.3202.94": {
      "Downloads": "327271",
      "Last Updated": "Tuesday, November 14, 2017",
      "Status": "Approved"
    },
    "62.0.3202.89": {
      "Downloads": "121093",
      "Last Updated": "Monday, November 6, 2017",
      "Status": "Approved"
    },
    "62.0.3202.75": {
      "Downloads": "156805",
      "Last Updated": "Friday, October 27, 2017",
      "Status": "Approved"
    },
    "62.0.3202.62": {
      "Downloads": "140028",
      "Last Updated": "Wednesday, October 18, 2017",
      "Status": "Approved"
    },
    "61.0.3163.100": {
      "Downloads": "602885",
      "Last Updated": "Friday, September 22, 2017",
      "Status": "Approved"
    },
    "61.0.3163.91": {
      "Downloads": "97005",
      "Last Updated": "Friday, September 15, 2017",
      "Status": "Approved"
    },
    "61.0.3163.79": {
      "Downloads": "138051",
      "Last Updated": "Wednesday, September 6, 2017",
      "Status": "Approved"
    },
    "60.0.3112.113": {
      "Downloads": "153457",
      "Last Updated": "Thursday, August 24, 2017",
      "Status": "Approved"
    },
    "60.0.3112.101": {
      "Downloads": "134683",
      "Last Updated": "Monday, August 14, 2017",
      "Status": "Approved"
    },
    "60.0.3112.90": {
      "Downloads": "128841",
      "Last Updated": "Thursday, August 3, 2017",
      "Status": "Approved"
    },
    "60.0.3112.78": {
      "Downloads": "107627",
      "Last Updated": "Wednesday, July 26, 2017",
      "Status": "Approved"
    },
    "59.0.3071.115": {
      "Downloads": "256643",
      "Last Updated": "Monday, June 26, 2017",
      "Status": "Approved"
    },
    "59.0.3071.109": {
      "Downloads": "91277",
      "Last Updated": "Wednesday, June 21, 2017",
      "Status": "Approved"
    },
    "59.0.3071.104": {
      "Downloads": "61431",
      "Last Updated": "Friday, June 16, 2017",
      "Status": "Approved"
    },
    "59.0.3071.86": {
      "Downloads": "102025",
      "Last Updated": "Tuesday, June 6, 2017",
      "Status": "Approved"
    },
    "58.0.3029.110": {
      "Downloads": "247540",
      "Last Updated": "Tuesday, May 9, 2017",
      "Status": "Approved"
    },
    "58.0.3029.96": {
      "Downloads": "76741",
      "Last Updated": "Wednesday, May 3, 2017",
      "Status": "Approved"
    },
    "58.0.3029.81": {
      "Downloads": "116007",
      "Last Updated": "Wednesday, April 19, 2017",
      "Status": "Approved"
    },
    "57.0.2987.13301": {
      "Downloads": "61565",
      "Last Updated": "Friday, April 14, 2017",
      "Status": "Approved"
    },
    "57.0.2987.133": {
      "Downloads": "142937",
      "Last Updated": "Thursday, March 30, 2017",
      "Status": "Approved"
    },
    "57.0.2987.110": {
      "Downloads": "130237",
      "Last Updated": "Friday, March 17, 2017",
      "Status": "Approved"
    },
    "57.0.2987.98": {
      "Downloads": "79913",
      "Last Updated": "Friday, March 10, 2017",
      "Status": "Approved"
    },
    "56.0.2924.87001": {
      "Downloads": "123229",
      "Last Updated": "Wednesday, March 1, 2017",
      "Status": "Approved"
    },
    "56.0.2924.87": {
      "Downloads": "567924",
      "Last Updated": "Thursday, February 2, 2017",
      "Status": "Approved"
    },
    "56.0.2924.76": {
      "Downloads": "99214",
      "Last Updated": "Thursday, January 26, 2017",
      "Status": "Approved"
    },
    "55.0.2883.87": {
      "Downloads": "555865",
      "Last Updated": "Friday, December 9, 2016",
      "Status": "Approved"
    },
    "55.0.2883.75": {
      "Downloads": "127290",
      "Last Updated": "Friday, December 2, 2016",
      "Status": "Approved"
    },
    "54.0.2840.99": {
      "Downloads": "360123",
      "Last Updated": "Thursday, November 10, 2016",
      "Status": "Approved"
    },
    "54.0.2840.87": {
      "Downloads": "171481",
      "Last Updated": "Wednesday, November 2, 2016",
      "Status": "Approved"
    },
    "54.0.2840.71": {
      "Downloads": "91363",
      "Last Updated": "Thursday, October 20, 2016",
      "Status": "Approved"
    },
    "54.0.2840.59": {
      "Downloads": "121160",
      "Last Updated": "Wednesday, October 12, 2016",
      "Status": "Approved"
    },
    "53.0.2785.143": {
      "Downloads": "92831",
      "Last Updated": "Thursday, September 29, 2016",
      "Status": "Approved"
    },
    "53.0.2785.116": {
      "Downloads": "87419",
      "Last Updated": "Wednesday, September 14, 2016",
      "Status": "Approved"
    },
    "53.0.2785.113": {
      "Downloads": "17470",
      "Last Updated": "Tuesday, September 13, 2016",
      "Status": "Approved"
    },
    "53.0.2785.101": {
      "Downloads": "52764",
      "Last Updated": "Wednesday, September 7, 2016",
      "Status": "Approved"
    },
    "53.0.2785.89": {
      "Downloads": "79800",
      "Last Updated": "Wednesday, August 31, 2016",
      "Status": "Approved"
    },
    "52.0.2743.116": {
      "Downloads": "218430",
      "Last Updated": "Wednesday, August 3, 2016",
      "Status": "Approved"
    },
    "52.0.2743.82": {
      "Downloads": "84177",
      "Last Updated": "Wednesday, July 20, 2016",
      "Status": "Approved"
    },
    "51.0.2704.106": {
      "Downloads": "3310",
      "Last Updated": "Friday, June 24, 2016",
      "Status": "Approved"
    },
    "51.0.2704.103": {
      "Downloads": "753",
      "Last Updated": "Thursday, June 16, 2016",
      "Status": "Approved"
    },
    "51.0.2704.84": {
      "Downloads": "605",
      "Last Updated": "Monday, June 6, 2016",
      "Status": "Approved"
    },
    "51.0.2704.79": {
      "Downloads": "754",
      "Last Updated": "Wednesday, June 1, 2016",
      "Status": "Approved"
    },
    "51.0.2704.63": {
      "Downloads": "1535",
      "Last Updated": "Wednesday, May 25, 2016",
      "Status": "Approved"
    },
    "50.0.2661.102": {
      "Downloads": "1116",
      "Last Updated": "Wednesday, May 11, 2016",
      "Status": "Approved"
    },
    "50.0.2661.94": {
      "Downloads": "14997",
      "Last Updated": "Thursday, April 28, 2016",
      "Status": "Approved"
    },
    "50.0.2661.87": {
      "Downloads": "19700",
      "Last Updated": "Thursday, April 21, 2016",
      "Status": "Approved"
    },
    "50.0.2661.75": {
      "Downloads": "22159",
      "Last Updated": "Wednesday, April 13, 2016",
      "Status": "Approved"
    },
    "49.0.2623.112": {
      "Downloads": "17187",
      "Last Updated": "Thursday, April 7, 2016",
      "Status": "Approved"
    },
    "49.0.2623.110": {
      "Downloads": "22155",
      "Last Updated": "Monday, March 28, 2016",
      "Status": "Approved"
    },
    "49.0.2623.108": {
      "Downloads": "10763",
      "Last Updated": "Thursday, March 24, 2016",
      "Status": "Approved"
    },
    "49.0.2623.87": {
      "Downloads": "27727",
      "Last Updated": "Wednesday, March 9, 2016",
      "Status": "Approved"
    },
    "49.0.2623.75": {
      "Downloads": "15568",
      "Last Updated": "Wednesday, March 2, 2016",
      "Status": "Approved"
    },
    "48.0.2564.116": {
      "Downloads": "23073",
      "Last Updated": "Thursday, February 18, 2016",
      "Status": "Approved"
    },
    "48.0.2564.109": {
      "Downloads": "19088",
      "Last Updated": "Tuesday, February 9, 2016",
      "Status": "Approved"
    },
    "48.0.2564.103": {
      "Downloads": "13998",
      "Last Updated": "Wednesday, February 3, 2016",
      "Status": "Approved"
    },
    "48.0.2564.97": {
      "Downloads": "16968",
      "Last Updated": "Wednesday, January 27, 2016",
      "Status": "Approved"
    },
    "48.0.2564.82": {
      "Downloads": "14134",
      "Last Updated": "Wednesday, January 20, 2016",
      "Status": "Approved"
    },
    "47.0.2526.111": {
      "Downloads": "15422",
      "Last Updated": "Wednesday, January 13, 2016",
      "Status": "Approved"
    },
    "47.0.2526.106": {
      "Downloads": "27612",
      "Last Updated": "Wednesday, December 16, 2015",
      "Status": "Approved"
    },
    "47.0.2526.82": {
      "Downloads": "10114",
      "Last Updated": "Saturday, December 12, 2015",
      "Status": "Approved"
    },
    "47.0.2526.81": {
      "Downloads": "755",
      "Last Updated": "Saturday, December 12, 2015",
      "Status": "Approved"
    },
    "47.0.2526.80": {
      "Downloads": "7500",
      "Last Updated": "Tuesday, December 8, 2015",
      "Status": "Approved"
    },
    "47.0.2526.73": {
      "Downloads": "9124",
      "Last Updated": "Tuesday, December 1, 2015",
      "Status": "Approved"
    },
    "46.0.2490.86": {
      "Downloads": "22196",
      "Last Updated": "Tuesday, November 10, 2015",
      "Status": "Approved"
    },
    "46.0.2490.71": {
      "Downloads": "28789",
      "Last Updated": "Thursday, October 15, 2015",
      "Status": "Approved"
    },
    "45.0.2454.101": {
      "Downloads": "28143",
      "Last Updated": "Thursday, September 24, 2015",
      "Status": "Approved"
    },
    "45.0.2454.99": {
      "Downloads": "10286",
      "Last Updated": "Monday, September 21, 2015",
      "Status": "Approved"
    },
    "45.0.2454.93": {
      "Downloads": "12186",
      "Last Updated": "Tuesday, September 15, 2015",
      "Status": "Approved"
    },
    "45.0.2454.85": {
      "Downloads": "18322",
      "Last Updated": "Tuesday, September 1, 2015",
      "Status": "Approved"
    },
    "44.0.2403.157": {
      "Downloads": "18109",
      "Last Updated": "Thursday, August 20, 2015",
      "Status": "Approved"
    },
    "44.0.2403.155": {
      "Downloads": "14421",
      "Last Updated": "Tuesday, August 11, 2015",
      "Status": "Approved"
    },
    "44.0.2403.130": {
      "Downloads": "10104",
      "Last Updated": "Tuesday, August 4, 2015",
      "Status": "Approved"
    },
    "44.0.2403.125": {
      "Downloads": "9701",
      "Last Updated": "Tuesday, July 28, 2015",
      "Status": "Approved"
    },
    "44.0.2403.107": {
      "Downloads": "5608",
      "Last Updated": "Friday, July 24, 2015",
      "Status": "Approved"
    },
    "44.0.2403.89": {
      "Downloads": "6264",
      "Last Updated": "Tuesday, July 21, 2015",
      "Status": "Approved"
    },
    "43.0.2357.134": {
      "Downloads": "10796",
      "Last Updated": "Tuesday, July 14, 2015",
      "Status": "Approved"
    },
    "43.0.2357.132": {
      "Downloads": "7165",
      "Last Updated": "Tuesday, July 7, 2015",
      "Status": "Approved"
    },
    "43.0.2357.124": {
      "Downloads": "18516",
      "Last Updated": "Tuesday, June 9, 2015",
      "Status": "Approved"
    },
    "43.0.2357.81": {
      "Downloads": "10148",
      "Last Updated": "Monday, May 25, 2015",
      "Status": "Approved"
    },
    "43.0.2357.65": {
      "Downloads": "6361",
      "Last Updated": "Tuesday, May 19, 2015",
      "Status": "Approved"
    },
    "42.0.2311.152": {
      "Downloads": "6714",
      "Last Updated": "Tuesday, May 12, 2015",
      "Status": "Approved"
    },
    "42.0.2311.135": {
      "Downloads": "9007",
      "Last Updated": "Tuesday, April 28, 2015",
      "Status": "Approved"
    },
    "42.0.2311.90": {
      "Downloads": "9878",
      "Last Updated": "Tuesday, April 14, 2015",
      "Status": "Approved"
    },
    "41.0.2272.118": {
      "Downloads": "11522",
      "Last Updated": "Wednesday, April 1, 2015",
      "Status": "Approved"
    },
    "41.0.2272.101": {
      "Downloads": "11900",
      "Last Updated": "Friday, March 20, 2015",
      "Status": "Approved"
    },
    "41.0.2272.89": {
      "Downloads": "9711",
      "Last Updated": "Tuesday, March 10, 2015",
      "Status": "Approved"
    },
    "41.0.2272.76": {
      "Downloads": "5576",
      "Last Updated": "Friday, March 6, 2015",
      "Status": "Approved"
    },
    "40.0.2214.115": {
      "Downloads": "12473",
      "Last Updated": "Thursday, February 19, 2015",
      "Status": "Approved"
    },
    "40.0.2214.111": {
      "Downloads": "10788",
      "Last Updated": "Thursday, February 5, 2015",
      "Status": "Approved"
    },
    "40.0.2214.94": {
      "Downloads": "7966",
      "Last Updated": "Thursday, January 29, 2015",
      "Status": "Approved"
    },
    "40.0.2214.93": {
      "Downloads": "3989",
      "Last Updated": "Tuesday, January 27, 2015",
      "Status": "Approved"
    },
    "40.0.2214.91": {
      "Downloads": "4574",
      "Last Updated": "Thursday, January 22, 2015",
      "Status": "Approved"
    },
    "39.0.2171.99": {
      "Downloads": "7324",
      "Last Updated": "Tuesday, January 13, 2015",
      "Status": "Approved"
    },
    "39.0.2171.95": {
      "Downloads": "11783",
      "Last Updated": "Tuesday, December 9, 2014",
      "Status": "Approved"
    },
    "39.0.2171.71": {
      "Downloads": "5491",
      "Last Updated": "Tuesday, November 25, 2014",
      "Status": "Approved"
    },
    "39.0.2171.65": {
      "Downloads": "4875",
      "Last Updated": "Tuesday, November 18, 2014",
      "Status": "Approved"
    },
    "38.0.2125.122": {
      "Downloads": "2561",
      "Last Updated": "Wednesday, November 12, 2014",
      "Status": "Approved"
    },
    "38.0.2125.111": {
      "Downloads": "11523",
      "Last Updated": "Monday, October 27, 2014",
      "Status": "Approved"
    },
    "38.0.2125.104": {
      "Downloads": "5816",
      "Last Updated": "Tuesday, October 14, 2014",
      "Status": "Approved"
    },
    "38.0.2125.101": {
      "Downloads": "4093",
      "Last Updated": "Tuesday, October 7, 2014",
      "Status": "Approved"
    },
    "37.0.2062.124": {
      "Downloads": "5882",
      "Last Updated": "Wednesday, September 24, 2014",
      "Status": "Approved"
    },
    "37.0.2062.120": {
      "Downloads": "6230",
      "Last Updated": "Tuesday, September 9, 2014",
      "Status": "Approved"
    },
    "37.0.2062.103": {
      "Downloads": "4351",
      "Last Updated": "Tuesday, September 2, 2014",
      "Status": "Approved"
    },
    "37.0.2062.102": {
      "Downloads": "2243",
      "Last Updated": "Friday, August 29, 2014",
      "Status": "Approved"
    },
    "37.0.2062.95": {
      "Downloads": "1128",
      "Last Updated": "Thursday, August 28, 2014",
      "Status": "Approved"
    },
    "37.0.2062.94": {
      "Downloads": "1893",
      "Last Updated": "Tuesday, August 26, 2014",
      "Status": "Approved"
    },
    "36.0.1985.143": {
      "Downloads": "4799",
      "Last Updated": "Tuesday, August 12, 2014",
      "Status": "Approved"
    },
    "36.0.1985.122": {
      "Downloads": "5817",
      "Last Updated": "Wednesday, July 16, 2014",
      "Status": "Approved"
    },
    "35.0.1916.153": {
      "Downloads": "876",
      "Last Updated": "Wednesday, July 16, 2014",
      "Status": "Approved"
    },
    "35.0.1916.114": {
      "Downloads": "9831",
      "Last Updated": "Tuesday, May 20, 2014",
      "Status": "Approved"
    },
    "34.0.1847.11601": {
      "Downloads": "5815",
      "Last Updated": "Tuesday, April 22, 2014",
      "Status": "Approved"
    },
    "34.0.1847.131": {
      "Downloads": "830",
      "Last Updated": "Thursday, April 24, 2014",
      "Status": "Approved"
    },
    "34.0.1847.116": {
      "Downloads": "3290",
      "Last Updated": "Wednesday, April 9, 2014",
      "Status": "Approved"
    },
    "33.0.1750.154": {
      "Downloads": "4590",
      "Last Updated": "Saturday, March 15, 2014",
      "Status": "Approved"
    },
    "33.0.1750.149": {
      "Downloads": "2044",
      "Last Updated": "Tuesday, March 11, 2014",
      "Status": "Approved"
    },
    "33.0.1750.146": {
      "Downloads": "2397",
      "Last Updated": "Tuesday, March 4, 2014",
      "Status": "Approved"
    },
    "33.0.1750.117": {
      "Downloads": "2445",
      "Last Updated": "Thursday, February 20, 2014",
      "Status": "Approved"
    },
    "32.0.1700.107": {
      "Downloads": "3103",
      "Last Updated": "Monday, February 3, 2014",
      "Status": "Approved"
    },
    "32.0.1700.102": {
      "Downloads": "1904",
      "Last Updated": "Monday, January 27, 2014",
      "Status": "Approved"
    },
    "32.0.1700.76": {
      "Downloads": "2365",
      "Last Updated": "Wednesday, January 15, 2014",
      "Status": "Approved"
    },
    "31.0.1650.63": {
      "Downloads": "3987",
      "Last Updated": "Thursday, December 5, 2013",
      "Status": "Approved"
    },
    "31.0.1650.57": {
      "Downloads": "1934",
      "Last Updated": "Sunday, November 17, 2013",
      "Status": "Approved"
    },
    "31.0.1650.48": {
      "Downloads": "1051",
      "Last Updated": "Wednesday, November 13, 2013",
      "Status": "Approved"
    },
    "30.0.1599.101": {
      "Downloads": "2403",
      "Last Updated": "Wednesday, October 16, 2013",
      "Status": "Approved"
    },
    "30.0.1599.69": {
      "Downloads": "1336",
      "Last Updated": "Friday, October 4, 2013",
      "Status": "Approved"
    },
    "30.0.1599.66": {
      "Downloads": "834",
      "Last Updated": "Thursday, October 3, 2013",
      "Status": "Approved"
    },
    "29.0.1547.76": {
      "Downloads": "1332",
      "Last Updated": "Thursday, September 19, 2013",
      "Status": "Approved"
    },
    "29.0.1547.66": {
      "Downloads": "1915",
      "Last Updated": "Thursday, September 5, 2013",
      "Status": "Approved"
    },
    "29.0.1547.62": {
      "Downloads": "1510",
      "Last Updated": "Wednesday, August 28, 2013",
      "Status": "Approved"
    },
    "29.0.1547.57": {
      "Downloads": "1489",
      "Last Updated": "Wednesday, August 21, 2013",
      "Status": "Approved"
    },
    "28.0.1500.95": {
      "Downloads": "1919",
      "Last Updated": "Wednesday, July 31, 2013",
      "Status": "Approved"
    },
    "28.0.1500.72": {
      "Downloads": "1571",
      "Last Updated": "Sunday, July 21, 2013",
      "Status": "Approved"
    },
    "28.0.1500.71": {
      "Downloads": "1337",
      "Last Updated": "Wednesday, July 10, 2013",
      "Status": "Approved"
    },
    "27.0.1453.116": {
      "Downloads": "1682",
      "Last Updated": "Wednesday, June 19, 2013",
      "Status": "Approved"
    },
    "27.0.1453.110": {
      "Downloads": "866",
      "Last Updated": "Monday, June 17, 2013",
      "Status": "Approved"
    },
    "26.0.1410.64": {
      "Downloads": "1994",
      "Last Updated": "Friday, May 10, 2013",
      "Status": "Approved"
    },
    "10.0.0": {
      "Downloads": "5514",
      "Last Updated": "Saturday, March 3, 2012",
      "Status": "Approved"
    }
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
