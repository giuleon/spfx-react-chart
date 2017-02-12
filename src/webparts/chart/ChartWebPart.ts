import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'chartStrings';
import Chart from './components/Chart';
import { IChartProps } from './components/IChartProps';
import { IChartWebPartProps } from './IChartWebPartProps';

export default class ChartWebPart extends BaseClientSideWebPart<IChartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IChartProps > = React.createElement(
      Chart,
      {
        chart: this.properties.chart,
        dataset: this.properties.dataset,
        labels: this.properties.labels
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('chart', {
                  label: strings.ChartFieldLabel
                }),
                PropertyPaneTextField('dataset', {
                  label: strings.DatasetFieldLabel
                }),
                PropertyPaneTextField('labels', {
                  label: strings.LabelsFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }
}
