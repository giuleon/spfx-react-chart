declare interface IChartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  ChartFieldLabel: string;
  DatasetFieldLabel: string;
  LabelsFieldLabel: string;
}

declare module 'chartStrings' {
  const strings: IChartStrings;
  export = strings;
}
