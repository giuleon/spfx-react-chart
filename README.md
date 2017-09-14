# SharePoint Framework Reactjs Chart

SPFx client side web part that renders various kind of charts (radar, polar, line, pie, horizontalbar, doughnut).

## Building the code

```bash
git clone the repo
npm install
gulp serve
```
## SPFx-Reactjs-Chart

The SharePoint Framework is in release candidate phase now, then I decided to give also my little contribution, in this sense I developed a SPFx client side web part that renders various kind of charts (radar, polar, line, pie, horizontalbar, doughnut).
It is possible configure the chart with the classic right pane of Office 365 and this permits to set the type of chart, data to display and the labels.
Regarding the technical aspect, I used the classic tool chain of SharePoint Framework, ReactJS like client side framework and chart.js to design the graphics.

![alt text](https://github.com/giuleon/spfx-react-chart/blob/master/spfx-react-chart.gif "Demo")

I published my solution on my Office 365 tenant and I followed this article from Office Dev Center:
[How to enable the CDN on your SharePoint online tenant](https://dev.office.com/blogs/office-365-public-cdn-developer-preview-release), this is really useful because I can store the bundle of my web part here, but you can create your CDN also on Azure.
Just in case you decide to deploy the solution on your SharePoint online please take a look to this article.

[Here the article on my blog](http://www.delucagiuliano.com/sharepoint-framework-react-chart-web-part)

## Used SharePoint Framework Version
![drop](https://img.shields.io/badge/version-GA-green.svg)

## Applies to

* [SharePoint Framework Release GA](https://blogs.office.com/2017/02/23/sharepoint-framework-reaches-general-availability-build-and-deploy-engaging-web-parts-today/)
* [Office 365 tenant](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)

## Solution

Solution|Author(s)
--------|---------
spfx-react-chart | Giuliano De Luca ([@giuleon](http://www.twitter.com/giuleon), [delucagiuliano.com](techmikael.com))

## Version history

Version|Date|Comments
-------|----|--------
1.0|February 15th, 2017|Initial release
1.0.1|September 14th, 2017|Updated SPFx version
