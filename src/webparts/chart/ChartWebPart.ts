import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
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
                PropertyPaneDropdown('chart', {
                  label: strings.ChartFieldLabel,
                  options: [
                    { key: 'Line', text: 'Line' },
                    { key: 'Bar', text: 'Bar' },
                    { key: 'Doughnut', text: 'Doughnut' },
                    { key: 'Horizontalbar', text: 'Horizontalbar' },
                    { key: 'Pie', text: 'Pie' },
                    { key: 'Polar', text: 'Polar' },
                    { key: 'Radar', text: 'Radar' }
                  ]
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
    return false;
  }
}
