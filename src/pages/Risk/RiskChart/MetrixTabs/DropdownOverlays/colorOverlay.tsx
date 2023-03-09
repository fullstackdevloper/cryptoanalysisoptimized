import { SketchPicker } from 'react-color';

const colorOverlay = (tabId: any, chartConfigProps: any) => {
    const {colorPicker} = chartConfigProps
    return (
        <>
            <SketchPicker
                color={colorPicker}
                onChangeComplete={(e: any) => handleChangeCompletes(e, tabId, chartConfigProps)} />
        </>
    )
}

export default colorOverlay

const handleChangeCompletes = (val: any, tabId: any, chartConfigProps: any) => {
    const {setColorPicker,metrixTabs, chartConfig, setChartConfiguration} = chartConfigProps
    setColorPicker(val);
    if (chartConfig.series[tabId] !== undefined) {
        chartConfig.series[tabId].color = val.hex;        
    }
    metrixTabs[tabId].color = val.hex;
    chartConfig.yAxis[tabId].lineColor = val.hex;
    setChartConfiguration({ ...chartConfig })
}
