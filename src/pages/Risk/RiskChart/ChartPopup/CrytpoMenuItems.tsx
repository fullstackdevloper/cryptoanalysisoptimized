import { Col, Row, Select} from "antd";
import { InlineStylesModel } from "../../../../models/InlineStyleModel";

const styles: InlineStylesModel = { 
  datePickerTitle: {
      marginTop: "auto",
      marginRight: "5px",
      cursor: "pointer",
  },
  cryptoSelectorCol: {
      fontSize: "14px",
      marginBottom: "0em",
      fontWeight: 400,
      textAlign: "center",
      color: "white",
  },
  logoStyle: {
    height: "17px",
    width: "17px",
  },
};

const CrytpoMenuItems = (coinData: any) => (
    coinData !== null
      ? coinData.map((menuOption: any) => {
        return (
          <Select.Option
            key={menuOption.id}
            value={menuOption.id}
            style={{
              backgroundColor: "#0a0c12",
              fontSize: 16,
            }}
          >
            <Row style={styles.datePickerTitle} align="middle">
              <Col style={styles.cryptoSelectorCol}>
                <img
                  alt={`${menuOption.name}-logo`}
                  src={menuOption.image}
                  style={{ ...styles.logoStyle, ...{ marginRight: "10px" } }}
                />
                {menuOption.name}
              </Col>
            </Row>
          </Select.Option>
        );
      })
      : null);

  
  export default CrytpoMenuItems