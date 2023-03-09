import {
    RiskMetricOptions,
    RiskMetricOptionsDisabled,
    RiskMetricOptionsDisabledLoading,
  } from "../../../../components/Common/riskMetrics";
  
  import { InlineStylesModel } from "../../../../models/InlineStyleModel";
  import { Select } from "antd";
  
  const styles: InlineStylesModel = {
    metricSelectorStyle: {
        color: "white",
        backgroundColor:'grey',
        fontSize: "14px",
        marginBottom: "0em",
        fontWeight: 400,
        cursor: "pointer",
        width: "100%",
      },
  };
  
  interface MetricPropsType {
    setStateAction: any;
    currentStateValue: any;
    coinSentiment: any;
    selectedCoin: any;
    setPopupError: any;
  }
  
  export const AddRiskMatricSelector = (MetricProps: MetricPropsType) => {
    const { coinSentiment, selectedCoin, currentStateValue, setPopupError } = MetricProps;
    const onMetricSelected = (value: any) => {
      MetricProps.setStateAction(value);
      setPopupError(false);
    };
  
    const metricsAvailable =
      coinSentiment !== null && selectedCoin !== null
        ? Object.keys(coinSentiment).find((coin) => {
            return coin.toLowerCase() === selectedCoin.symbol;
          })
        : null;
  
    return (
      <Select
        onChange={onMetricSelected}
        style={styles.metricSelectorStyle}
        defaultValue={""}
        size={"small"}
        value={currentStateValue}
      >
        {coinSentiment !== null && metricsAvailable
          ? RiskMetricOptions
          : coinSentiment === null
          ? RiskMetricOptionsDisabledLoading
          : RiskMetricOptionsDisabled}
      </Select>
    );
  };
  