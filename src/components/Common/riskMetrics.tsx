import { Row, Select } from "antd";

import { InlineStylesModel } from "../../models/InlineStyleModel";
import { Spin } from "antd";

const { Option, OptGroup } = Select;

const styles: InlineStylesModel = {
  selectOption: {
    color: "white",
    fontSize: "14px",
    marginBottom: "0em",
    fontWeight: 400,
    width: "100%",
  },
  selectOptionHeader: {
    color: "rgb(100,116,139)",
    fontSize: "14px",
    marginBottom: "0em",
    fontWeight: 400,
  },
};
export const RiskMetricOptions = (
  <>
    <OptGroup style={styles.selectOptionHeader} label="Market" key="market">
      <Option style={styles.selectOption} value="Price" key="Price">
        Price
      </Option>
      {/* <Option style={styles.selectOption} value="Mcap" key="mcap">
        Mcap
      </Option> */}
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="UDPI" key="UDPI">
      <Option style={styles.selectOption} value="UDPI_ST" key="UDPI_ST">
        Short
      </Option>
      <Option style={styles.selectOption} value="UDPI_MT" key="UDPI_MD">
        Medium
      </Option>
      <Option style={styles.selectOption} value="UDPI_LT" key="UDPI_LT">
        Long
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="Mom. Bias" key="MBI">
      <Option style={styles.selectOption} value="MBI" key="MBI">
        MBI
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="Trend Conf." key="TCI">
      <Option style={styles.selectOption} value="TCI" key="TCI">
        TCI
      </Option>
      <Option style={styles.selectOption} value="TCI_CV" key="TCI_CV">
        Crit Level
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="MDC" key="MDC">
      <Option style={styles.selectOption} value="MDC_CV" key="MDC_CV  ">
        MDC
      </Option>
    </OptGroup>
  </>
);

export const RiskMetricOptionsDisabled = (
  <>
    <OptGroup style={styles.selectOptionHeader} label="Market" key="market">
      <Option style={styles.selectOption} value="Price" key="Price">
        Price
      </Option>
      {/* <Option style={styles.selectOption} value="Mcap" key="mcap">
        Mcap
      </Option> */}
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="UDPI" key="UDPI">
      <Option
        style={styles.selectOption}
        value="UDPI_ST"
        key="UDPI_ST"
        disabled
      >
        Short
      </Option>
      <Option
        style={styles.selectOption}
        value="UDPI_MT"
        key="UDPI_MD"
        disabled
      >
        Medium
      </Option>
      <Option
        style={styles.selectOption}
        value="UDPI_LT"
        key="UDPI_LT"
        disabled
      >
        Long
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="Mom. Bias" key="MBI">
      <Option style={styles.selectOption} value="MBI" key="MBI" disabled>
        MBI
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="Trend Conf." key="TCI">
      <Option style={styles.selectOption} value="TCI" key="TCI" disabled>
        TCI
      </Option>
      <Option style={styles.selectOption} value="TCI_CV" key="TCI_CV" disabled>
        <Row justify="space-between">
          Crit Level
          <Spin size="small" />
        </Row>
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="MDC" key="MDC">
      <Option style={styles.selectOption} value="MDC_CV" key="MDC_CV" disabled>
        MDC
      </Option>
    </OptGroup>
  </>
);

export const RiskMetricOptionsDisabledLoading = (
  <>
    <OptGroup style={styles.selectOptionHeader} label="Market" key="market">
      <Option style={styles.selectOption} value="Price" key="Price">
        Price
      </Option>
      {/* <Option style={styles.selectOption} value="Mcap" key="mcap">
        Mcap
      </Option> */}
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="UDPI" key="UDPI">
      <Option
        style={styles.selectOption}
        value="UDPI_ST"
        key="UDPI_ST"
        disabled
      >
        <Row justify="space-between">
          Short
          <Spin size="small" />
        </Row>
      </Option>
      <Option
        style={styles.selectOption}
        value="UDPI_MT"
        key="UDPI_MD"
        disabled
      >
        <Row justify="space-between">
          Medium
          <Spin size="small" />
        </Row>{" "}
      </Option>
      <Option
        style={styles.selectOption}
        value="UDPI_LT"
        key="UDPI_LT"
        disabled
      >
        <Row justify="space-between">
          Long
          <Spin size="small" />
        </Row>
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="Mom. Bias" key="MBI">
      <Option style={styles.selectOption} value="MBI" key="MBI" disabled>
        <Row justify="space-between">
          MBI
          <Spin size="small" />
        </Row>
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="Trend Conf." key="TCI">
      <Option style={styles.selectOption} value="TCI" key="TCI" disabled>
        <Row justify="space-between">
          TCI
          <Spin size="small" />
        </Row>
      </Option>
      <Option style={styles.selectOption} value="TCI_CV" key="TCI_CV" disabled>
        <Row justify="space-between">
          Crit Level
          <Spin size="small" />
        </Row>
      </Option>
    </OptGroup>
    <OptGroup style={styles.selectOptionHeader} label="MDC" key="MDC">
      <Option style={styles.selectOption} value="MDC_CV" key="MDC_CV" disabled>
        <Row justify="space-between">
          MDC
          <Spin size="small" />
        </Row>
      </Option>
    </OptGroup>
  </>
);
