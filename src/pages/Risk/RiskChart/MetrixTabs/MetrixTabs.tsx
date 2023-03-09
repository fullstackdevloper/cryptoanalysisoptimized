import { Dropdown,Button, Tabs, Menu, Row, Col, Space, Typography } from 'antd'
import { useChartConfig } from '../../../../hooks/useChartConfig'
import { InlineStylesModel } from '../../../../models/InlineStyleModel'
import {
    CloseOutlined, SwapOutlined, PlusOutlined, DollarOutlined,
    DownOutlined, EyeOutlined, EyeInvisibleOutlined, BarChartOutlined, PlusSquareOutlined
  } from "@ant-design/icons";
import { useState, useEffect } from 'react';
import addButtomOverlay from './DropdownOverlays/addButtomOverlay';
import { zoom } from './DropdownOverlays/zoom';
import { tabButtonOverlay } from './DropdownOverlays/tabButtonOverlay';
import resolutionOverlay from './DropdownOverlays/resolutionOverlay';
import customFormulaOverlay from './DropdownOverlays/customFormulaOverlay';
import scaleOverlay from './DropdownOverlays/scaleOverlay';
import colorOverlay from './DropdownOverlays/colorOverlay';
import chartStyleOverlay from './DropdownOverlays/chartStyleOverlay';
import { hideChartData, showChartData } from './TabFunc/visibilityFunctions';
import EvaluateComponent from './FormulaComp/EvaluateComponent';
import AvailFunctionComponent from './FormulaComp/AvailFunctionComponent';
import axisDropOverlay from './DropdownOverlays/axisDropOverlay';

const styles: InlineStylesModel = {
    RiskTopBar: {
        borderBottom: "1px solid grey",
        position: "relative"
      },
      buttonAdd: {
        position: "absolute",
        top: "13px",
        right: "20px",
        padding: "5px 15px !important",
        fontSize: "12px",
        height: "auto",
      },
      dotContainer: {
        display: "inline-block",
        marginRight: "0.5rem",
        minWidth: "12px",
      },
      dot: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        border: "1px solid white",
      }
}

const MetrixTabs = ({chartConfigProps, formulaProps, isModalOpen, setIsModalOpen}: any) => {
    const {error, setcurrentTitle,
      activeTab, setActiveTab,
      metrixTabs, setMetrixTabs,
      labelSMA, 
      yLabel, setYLabel,
      chartStyle} = chartConfigProps;      

    const changeTab = (e: any) => {
        setActiveTab(e)
      }

      useEffect(() => {
      if (metrixTabs.length === 1) {
        setActiveTab('0');
      }
      }, []);

      
  const updateYAxisonMatrixChange = (id: number) => {
    setYLabel(metrixTabs[id].yAxis+1);
  }

  return (
    <div style={styles.RiskTopBar}>
    <Tabs  className="customTabs" defaultActiveKey={activeTab} activeKey={activeTab} onChange={(e) => changeTab(e)}>
    {metrixTabs.map((item:any, id:any) => {
            return(
                <Tabs.TabPane tab={
                    <Dropdown.Button 
                    className="customDropdown"
                    onClick={() => updateYAxisonMatrixChange(id)}
                      overlay={() => tabButtonOverlay(id, chartConfigProps, formulaProps, setIsModalOpen)} trigger={['click']}>
                      <span style={styles.dotContainer}
                      >
                        <div style={{ ...styles.dot, backgroundColor:item.color }}
                        ></div>
                      </span> {item.selectedMetric === 'Formula' ? `${item.formulaName}(f${item.f})` : item.selectedCrypto && item.selectedCrypto !== null ? `${item.selectedCrypto.symbol.toUpperCase()}:${item.selectedMetric}(m${item.m})` : `BTC:${item.selectedMetric}`}
                    </Dropdown.Button>} key={id}>
                    {item.formulaClicked === true ? 
                    (<Row>
                        <EvaluateComponent f={item.f} chartConfigProps={chartConfigProps} id={id} formulaProps={formulaProps}/>
                        <AvailFunctionComponent f={item.f} chartConfigProps={chartConfigProps} id={id} formulaProps={formulaProps}/>
                        {error && <Row style={{ margin: '5px' }}>
                            <Typography style={{ color: 'red', textAlign: 'right' }}>
                              Formula is invalid
                            </Typography>
                          </Row>}
                    </Row>): null}
                    <Row style={{ borderTop: '1px solid rgb(255 255 255 / 35%)' }}>
                        <Col span={20}>
                        {item.formulaClicked === false && <><Dropdown 
                        className="daysDrop" 
                        overlay={() => resolutionOverlay(id, chartConfigProps)} 
                        trigger={['click']}>
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span className="res-color">Resolution</span>
                                  <span className="bold-content">{item.resolution}</span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                            <Dropdown className="daysDrop" 
                            overlay={() => customFormulaOverlay(id, chartConfigProps)} 
                            trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>
                                  <Space>
                                    <span className="res-color">{item.customFormula.name}</span>
                                    <span className="bold-content">{labelSMA}</span>
                                    <DownOutlined />
                                  </Space>
                                </a>
                              </Dropdown></>}
                            <Dropdown className="daysDrop" 
                            overlay={() => scaleOverlay(id, chartConfigProps)} 
                            trigger={['click']}>
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span className="res-color">Scale</span>
                                  <span className="bold-content">{item.scale}</span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                            <Dropdown className="daysDrop" 
                            overlay={() => colorOverlay(id, chartConfigProps)} 
                            trigger={['click']}>
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span className="res-color">Color</span>
                                  <span style={styles.dotContainer}
                                  >
                                    <div style={{ ...styles.dot, backgroundColor: item.color }}
                                    ></div></span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                            <Dropdown className="daysDrop" 
                            overlay={() => axisDropOverlay(id, chartConfigProps)} 
                            trigger={['click']}>
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span className="res-color">Y Axis</span>
                                  {/* <span className="bold-content">Y{options2.series[id] !== undefined && item.yAxis+1}</span> */}
                                  <span className="bold-content">Y{yLabel}</span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                            <Dropdown className="daysDrop" 
                            overlay={() => chartStyleOverlay(id, chartConfigProps)}
                             trigger={['click']}>
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span className="res-color">Chart Style</span>
                                  <span className="bold-content">{chartStyle}</span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                            <Dropdown className="daysDrop" 
                            overlay={<></>}
                            >
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span className="res-color">Visibility</span>
                                  <span className="bold-content">{item.Visibility === false ? 
                                  <EyeInvisibleOutlined 
                                  onClick={() => showChartData(id, chartConfigProps)} 
                                  /> : 
                                  <EyeOutlined 
                                  onClick={() => hideChartData(id, chartConfigProps)} 
                                  />}</span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                        </Col>
                        
                        <Col span={4}>
                            <Dropdown className="daysDrop rightDrop" 
                            overlay={() => zoom(id, setcurrentTitle, metrixTabs, setMetrixTabs)} 
                            trigger={['click']}>
                              <a onClick={e => e.preventDefault()}>
                                <Space>
                                  <span>Zoom</span>
                                  <span className="bold-content">Custom</span>
                                  <DownOutlined />
                                </Space>
                              </a>
                            </Dropdown>
                          </Col>
                    </Row>
                </Tabs.TabPane>
            )
        })}
    </Tabs>
      <Dropdown 
      overlay={() => 
        addButtomOverlay(metrixTabs.length, chartConfigProps, isModalOpen, setIsModalOpen, formulaProps)
      } 
      trigger={['click']}>
                  <Button style={styles.buttonAdd}>
                    <PlusOutlined /> 
                    Add
                  </Button>
                </Dropdown>
    </div>
  )
}

export default MetrixTabs


