# spfx-reactjs-chart

This is where you include your web part docs.

## Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* commonjs components - this allows this package to be reused from other packages.
* dist/* - a single bundle containing the components used for uploading to a cdn pointing a registered Sharepoint webpart library to.
* example/* a test page that hosts all components in this package.

### Build options

gulp clean - TODO
gulp test - TODO
gulp watch - TODO
gulp build - TODO
gulp deploy - TODO

## Spfx-Reactjs-Chart

The SharePoint Framework is in release candidate phase now, then I decided to give also my little contribution, in this sense I developed a SPFX client side web part that renders various kind of charts (radar, polar, line, pie, horizontalbar, doughnut).
It is possible configure the chart with the classic right pane of Office 365 and this permits to set the type of chart, data to display and the labels.
Regarding the technical aspect, I used the classic tool chain of SharePoint Framework, ReactJS like client side framework and chart.js to design the graphics.

![alt text](https://github.com/giuleon/spfx-react-chart/blob/master/spfx-react-chart.gif "Demo")

I published my solution on my Office 365 tenant and I followed this article from Office Dev Center “How to enable the CDN on your SharePoint online tenant“, this is really useful because I can store the bundle of my web part here, but you can create your CDN also on Azure.
Just in case you decide to deploy the solution on your SharePoint online please take a look to this article.

[Here the article on my blog](http://www.delucagiuliano.com/sharepoint-framework-react-chart-web-part)
