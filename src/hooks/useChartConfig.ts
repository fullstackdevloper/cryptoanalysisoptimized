import { useState, useEffect } from "react";
import { formatDate } from "../common/sharedFunctions";
import getRandomColor from "../components/Common/getRandomColor";
import { chartModel } from "../models/chartModel";
import NewMetrix from "../pages/Risk/RiskChart/RiskGraph/DisplayGraphFunc/newMetrix";
import { fetchTop100Coins } from "../services/MarketCapService";

export const useChartConfig = (SeriesData: chartModel[]) => {
  const [metrixTabs, setMetrixTabs] = useState(SeriesData);
  const [isHidden, setIsHidden] = useState<any>(false);
  const [error, setError] = useState<boolean>(false);
  const [removalKey, setRemovalKey] = useState(true);

    
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTitle, setcurrentTitle] = useState('New Metric');
  const [coinData, setCoinData] = useState<any>(null);
  const [SEMDays, setSEMDays] = useState<any>('');

  useEffect(() => {
    const getTop100Coins = async () => {
      const top100Coins = await fetchTop100Coins();
      setCoinData(top100Coins);
    };

    if (coinData === null) {
      getTop100Coins();
    }
  }, [coinData]);

    
  const [selectedCrypto, setSelectedCrypto] = useState(
    coinData !== null ? coinData[0] : null
  );

  const [showRiskDataSetter, setshowRiskDataSetter] = useState<boolean>(true);
    const [labelSMA, setLabelSEM] = useState<any>('0 Days');
    const [formulaOptions, setFormulaOptions] = useState('SMA');
    const [yLabel,setYLabel] = useState(1);
    const [chartStyle, setChartStyle] = useState('Line');

    
  const [customAxis, setCustomAxis] = useState<any>([
    {
      label: 'Y1',
      key: '1',
    }
  ]);

    const [activeTab, setActiveTab] = useState<any>('0');
    const [currentIndex, setcurrentIndex] = useState(0);
    const [addMatric, setAddMatric] = useState<boolean>(false);
    const [typeScale, setTypeScale] = useState('Log');
    const [colorPicker, setColorPicker] = useState<any>(`${getRandomColor()}`);
    const [currentMatric, setCurrentMatic] = useState(metrixTabs[0]);

    const [chartConfig, setChartConfiguration] = useState<any>({
      chart: {
        backgroundColor: "rgba(0, 0, 0,0.75)",
        spacing: [0, 10, 0, 10],
        zoomBySingleTouch: true,
        zoomType: 'x',
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: true,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        x: 0,
        y: 0,
        borderWidth: 0,
        alignColumns: false,
        margin: 0
      },
      navigator: {
        enabled: true,
      },
      lang: {
        numericSymbols: ["K", "M", "B", "T", "P", "E"],
        rangeSelectorZoom: ""
      },
      yAxis: [
        {
          labels: {
            style: {
              color: "white",
            },
          },
          type: "linear",
          opposite: false,
          gridLineColor: "rgba(164,164,164,.35)",
          tickInterval: "1000",
          crosshair: {
            enabled: true,
            // width: "0.031rem",
            width: "0.03rem",
            snap: false,
            color: '#555'
          },
          lineColor: metrixTabs[0] !== undefined ? metrixTabs[0].color : null,
          lineWidth: undefined
        },
      ],
      xAxis: {
        dateTimeLabelFormats: {
          hour: "%I:%M %P"
        },
        crosshair: {
          enabled: true,
          snap: false,
          width: "0.03rem",
          color: '#555'
        },
        labels: {
          style: {
            color: "white",
          },
        },
        lineColor: "#47494c",
        tickColor: "#47494c",
        // tickInterval:1000,
        tickAmount: 1,
      },
      rangeSelector: {
        labelStyle: {
          display: 'none'
       },
        buttons: [{
          type: 'month',
          count: 1,
          text: '1M'
        }, {
          type: 'week',
          count: 1,
          text: '1W'
  
        }, {
          type: 'month',
          count: 1,
          text: '1D',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]]
          }
        },
  
        {
          type: 'hour',
          count: 1,
          text: '1H',
        },
  
        {
          type: 'minutes',
          count: 10,
          text: '10m'
        }],
  
        selected: undefined,
        buttonTheme: {
          style: {
            display: 'none'
          }
        },
        inputEnabled: false
  
      },
      scrollbar: {
        enabled: false,
      },
      tooltip:{
          backgroundColor: "black",
          borderColor: "rgba(3, 172, 252, 1)",
        formatter: function (this: Highcharts.TooltipFormatterContextObject) {
          let points:any;
          points = this.points;
            return points.reduce(function (s:any, point:any) {
            //   const date = formatDate(new Date(point.x).toDateString());
                return s + '<br/>' + `<b style="color:${point.color}" >${point.series.name} </b>`+ ': ' +
                `<b style="color:${point.color}" >${point.y} </b>` ;
            }, '<b>' + formatDate(new Date(this.x).toDateString()) + '</b>');
        },
        shared: true,
        stickOnContact: true
    },
      series: [
        {
          data: metrixTabs[0] !== undefined && (metrixTabs[0].Visibility === true) ? metrixTabs[0].data : [],
          name: "Total Market Cap",
          turboThreshold: 0,
        },
      ],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false
            }
          }
        }]
      }
      });
    
    return [chartConfig, setChartConfiguration, 
      currentTitle, setcurrentTitle,
      activeTab, setActiveTab,
      metrixTabs, setMetrixTabs,
      currentIndex, setcurrentIndex,
      selectedCrypto, setSelectedCrypto,
      labelSMA, setLabelSEM,
      yLabel, setYLabel,
      chartStyle, setChartStyle,
      coinData, setCoinData,
      addMatric, setAddMatric,
      isHidden, setIsHidden,
      SEMDays, setSEMDays,
      formulaOptions, setFormulaOptions,
      typeScale, setTypeScale,
      colorPicker, setColorPicker,
      error, setError,
      showRiskDataSetter, setshowRiskDataSetter,
      removalKey, setRemovalKey,
      customAxis, setCustomAxis,
      isModalOpen, setIsModalOpen,
      currentMatric, setCurrentMatic]  as const;
}
