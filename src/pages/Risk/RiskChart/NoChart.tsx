import { Button } from 'antd'
import { InlineStylesModel } from '../../../models/InlineStyleModel'
import {
    PlusOutlined
  } from "@ant-design/icons";
import ChartPopup from './ChartPopup/ChartPopup';
import { showModalFirst } from './ChartPopup/showModels';

const styles: InlineStylesModel = {    
  NewMatricContainer: {
    backgroundColor: "rgb(22,24,29)",
    height: "70vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff"
  },
}
const NoChart = ({chartConfigProps, formulaProps, chartProps, isModalOpen, setIsModalOpen}: any) => {

  return (
    <>
    <div style={styles.NewMatricContainer}>
    <div>
      <p>
        Add one or more metrics to start visualizing data.</p>
      <Button 
      onClick={(e: any) => showModalFirst(e, chartConfigProps)}
      >
        <PlusOutlined /> Add metric
      </Button>
    </div>
  </div>
    <ChartPopup 
              title={'Add Metric'}
              coinSentiment={
                chartProps.coinSentiment !== null
                  ? chartProps.coinSentiment
                    : null
              } 
              formulaProps={formulaProps}
              chartConfigProps={chartConfigProps} 
              chartProps={chartProps} 
              isModalOpen={isModalOpen} 
              setIsModalOpen={setIsModalOpen}/>
              </>
    
  )
}

export default NoChart
