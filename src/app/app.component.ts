import { Component, EventEmitter, Input, OnInit, Optional, Output, ViewContainerRef } from '@angular/core';
// import { Chart } from 'chart.js';
import { VALIDATION_REPORT_ERRORS } from './validation-report-errors';
// import { UtilsService } from '../../../core/services/utils.service';
// import { StackTraceService } from '../../../core/components/stack-trace/stack-trace.service';
// import { FilterTextService } from '../../../shared/filter-text/filter-text.service';
// import { MatDialogRef } from '@angular/material/dialog';
// import { ProcessDetailFormComponent } from '../process-detail-form.component';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 }))
      ])
    ]
    )
  ],
})
export class AppComponent {
  /**  Whether the window is maximized or not */
  @Input()
  maximized = false;

  /** Sends an event to the parent to maximize the window */
  @Output()
  maximize: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Send an event Whether the table is loading so we display the table spinner or  not */
  @Output()
  tableSpinner: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** The related Process File entity */
  entity: any;

  /** Chart configurations */
  chart1: any = [];
  chart2: any = [];
  doughnutChart: any = [];
  lineChart: any = [];
  stackedBarChart: any = [];
  horizontalBarChart: any = [];

  /** Whether the widget are flipped or not */
  widget1Flipped = false;
  widget2Flipped = false;
  widget3Flipped = false;
  widget4Flipped = false;

  /** List of errors */
  errors: any[] = [];

  /** List of filtered errors */
  filteredErrors: any[] = [];

  /** Selected error */
  selectedError: any;

  /** List of errors table headers */
  errorsHeaders: any[] = [];

  /** List of errors table actions */
  errorsActions: any[] = [];

  /** The report file content */
  report: any;

  europeanComissionLogo = './assets/images/european-commission-logo.png';
  eurostatLogo = './assets/images/eurostat_logo.png';
  belgiumFlag = './assets/images/flags/belgium.png';


  /**
   * Validation Report Component constructor
   * @param dialogRef - Reference to a dialog opened via the MatDialog service 
   * @param service - The ProcessService to send HTTP requests
   * @param spinner - Contains the Spinner to be displayed when loading data
   * @param viewContainerRef - Represents a container with the view of the component
   * @param stackTrace - Handles the errors including stack trace information
   * @param utils - Contains common useful functions
   * @param filterService - Contains the filter features
   */
  constructor(
    // @Optional() public dialogRef: MatDialogRef<ProcessDetailFormComponent>,
    // public service: ProcessService,
    // public spinner: SpinnerService,
    public viewContainerRef: ViewContainerRef,
    // public stackTrace: StackTraceService,
    // public utils: UtilsService,
    // public filterService: FilterTextService
    ) {
    // super(spinner, viewContainerRef, stackTrace);
  }

  /**
   * Retrieves a title for the action over the Validation Report panel.
   * @returns A string with the corresponding title
   */
  get maximizeAction(): string {
    return (this.maximized) ? 'Restore Validation Report' : 'Maximize Validation Report';
  }

  /**
   * Initializes the component
   */
  ngOnInit() {
    this.setCharts();
    this.configErrors();
    this.setDummyErrors();
    // TODO: implement the actual validation report parsing
    // this.sampleFile();
  }

  /**
   * Sets the data coming from the process detail form
   * @param data - The data related to the entity
   */
  setData(data: any) {
    this.entity = data;
  }

  /**
   * Maximizes / restores the Validation Report.
   */
  maximizeReport() {
    this.maximize.emit();
  }

  /**
   * Closes the parent window.
   */
  close() {
    this.errors.forEach(error => {
      error.highlight = false;
    });
    // this.dialogRef.close(false);
  }

  /**
   * Flips a specific widget displaying either the front or the back.
   * @param widget - The widget element to be flipped
   */
  flipWidget(widget: number) {
    switch (widget) {
      case 1:
        this.widget1Flipped = !this.widget1Flipped;
        break;
      case 2:
        this.widget2Flipped = !this.widget2Flipped;
        break;
      case 3:
        this.widget3Flipped = !this.widget3Flipped;
        break;
      case 4:
        this.widget4Flipped = !this.widget4Flipped;
        break;
    }
  }

  /**
   * Sets the configuration for the Charts.
   */
  setCharts() {
    setTimeout(() => {
      // this.setChart1();
      // this.setChart2();
      this.setStackedBarChart();
      this.setDoughnutChart();
      // this.setLineChart();
      // this.setHorizontalBarChart();
    }, 0);
  }

  /**
   * Refreshes charts data.
   */
  refreshCharts() {
    setTimeout(() => {
      this.doughnutChart.chart.update();
    }, 1000);
  }

  /**
   * Sets the configuration for the Stacked Bar Chart.
   */
  setStackedBarChart() {
    // const barOptionsStacked = {
    //   scales: {
    //     xAxes: [{
    //       stacked: true,
    //       gridLines: {
    //         display: false,
    //       },
    //     }],
    //     yAxes: [
    //       {
    //         stacked: true,
    //         gridLines: {
    //           display: false,
    //         },
    //       }
    //     ]
    //   },
    //   legend: {
    //     display: true
    //   },
    //   animation: {}
    // };
    // this.stackedBarChart = new Chart('stackedBar', {
    //   type: 'bar',
    //   data: {
    //     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    //     datasets: [
    //       {
    //         label: 'Low',
    //         data: [65, 59, 90, 81, 56],
    //         backgroundColor: '#42BFF7'
    //       },
    //       {
    //         label: 'Moderate',
    //         data: [28, 48, 40, 19, 96],
    //         backgroundColor: 'rgb(198, 236, 253)'
    //       }

    //     ]
    //   },
    //   options: barOptionsStacked,
    // });
  }

  /**
   * Sets the configuration for the Doughnut Chart .
   */
  setDoughnutChart() {
    // this.doughnutChart = new Chart('doughnutChart', {
    //   type: 'doughnut',
    //   data: {
    //     labels: [
    //       'Red',
    //       'Yellow',
    //       'Blue'
    //     ],
    //     datasets: [
    //       {
    //         data: [10, 20, 30],
    //         backgroundColor: [
    //           '#FF6384',
    //           '#FFCD56',
    //           '#36A2EB'
    //         ]
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: true
    //     },
    //     scales: {}
    //   }
    // });
  }

  setChart1() {
    // this.chart1 = new Chart('chart1', {
    //   type: 'bar',
    //   data: {
    //     labels: ['1900', '1950', '1999', '2050'],
    //     datasets: [
    //       {
    //         label: 'Africa',
    //         backgroundColor: '#3e95cd',
    //         data: [133, 221, 783, 2478]
    //       }, {
    //         label: 'Europe',
    //         backgroundColor: '#8e5ea2',
    //         data: [408, 547, 675, 734]
    //       }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Population growth (millions)'
    //     },
    //     scales: {
    //       xAxes: [{
    //         stacked: true,
    //         gridLines: {
    //           display: false,
    //         },
    //       }],
    //       yAxes: [
    //         {
    //           stacked: true,
    //           gridLines: {
    //             display: false,
    //           },
    //         }
    //       ]
    //     },
    //   }
    // });
  }

  /**
   * Sets the configuration for the Chart2 - tests purposes .
   */
  setChart2() {
    // this.chart2 = new Chart('chart2', {
    //   type: 'pie',
    //   data: {
    //     labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    //     datasets: [{
    //       label: 'Population (millions)',
    //       backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
    //       data: [2478, 5267, 734, 784, 433]
    //     }]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Predicted world population (millions) in 2050'
    //     }
    //   }
    // });
  }

  /**
   * Sets the configuration for the Line Chart .
   */
  setLineChart() {
    // this.lineChart = new Chart('lineChart', {
    //   type: 'line',
    //   data: {
    //     labels: ['Struval', 'Conval', 'Delivery', 'Deletion'],
    //     datasets: [
    //       {
    //         label: '2018',
    //         data: [20, 10, 30, 50],
    //         backgroundColor: 'rgba(255,99,132,0.6)',
    //         borderColor: 'rgba(255,99,132,1)',
    //       },
    //       {
    //         label: '2019',
    //         data: [50, 30, 40, 80],
    //         backgroundColor: 'rgba(198, 236, 253, 0.6)',
    //         borderColor: 'rgb(198, 236, 253)',
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       display: true
    //     },
    //     scales: {
    //       xAxes: [{
    //         gridLines: {
    //           display: false,
    //         },
    //       }],
    //       yAxes: [
    //         {
    //           gridLines: {
    //             display: false,
    //           },
    //         }
    //       ]
    //     }
    //   }
    // });
  }

  /**
   * Sets the configuration for the Horizontal Bar Chart .
   */
  setHorizontalBarChart() {
    // this.horizontalBarChart = new Chart('horizontalBarChart', {
    //   type: 'horizontalBar',
    //   data: {
    //     labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    //     datasets: [
    //       {
    //         label: 'Population (millions)',
    //         backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
    //         data: [2478, 5267, 734, 784, 433]
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: { display: false },
    //     title: {
    //       display: false,
    //       text: ''
    //     }
    //   }
    // });
  }

  /**
   * Sets the configuration of the headers in the errors table.
   */
  configErrors() {
    this.errorsHeaders = [
      {
        title: 'Message Id',
        name: 'messageId',
        width: 170,
        type: 'string'
      },
      {
        title: 'Name',
        name: 'conceptName',
        width: 100,
        type: 'string'
      },
      {
        title: 'Type',
        name: 'conceptType',
        width: 100,
        type: 'string'
      },
      {
        title: 'Value',
        name: 'conceptValue',
        width: 120,
        type: 'string'
      },
      {
        title: 'Occurrence(s)',
        name: 'occurrences',
        width: 90,
        type: 'string'
      },
      {
        title: 'Severity',
        name: 'severity',
        width: 80,
        type: 'string'
      },
    ];
    this.errorsActions = [
      {
        icon: 'icon-paste1',
        name: 'Copy to Clipboard',
        code: 'copyToClipboard'
      }
    ];
  }

  /**
   * Clicks on a specific cell within the Error Table.
   * @param data - The data related to the selected cell: {field, item}
   */
  clickErrorCell(data: any) {
    this.selectedError = data;
    this.filteredErrors.forEach((error: any) => {
      error.highlight = (error === this.selectedError) ? true : false;
    });
  }

  /**
   * Sets some dummy errors
   */
  setDummyErrors() {
    this.errors = VALIDATION_REPORT_ERRORS;
    this.filteredErrors = this.errors;
  }

  
}
