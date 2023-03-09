import { Col, Tag } from 'antd'
import { InlineStylesModel } from '../../../../../../models/InlineStyleModel';
import { handleAbs, handleCorr, handleCummean, handleCumstd, handleCumSum, handleDiff, handleEMA, handleIf, handleLog, handleMax, handleMedian, handleMin, handlePercentageChange, handlePow, handleRange, handleRsi, handleSMA, handleStd, handleSum } from './formulaTagFunctions'

const styles: InlineStylesModel = {
  tagStyle: { backgroundColor: '#b5afaf', cursor: 'pointer', margin: '5px' },
};

const FormulaTagButtons = ({f, chartConfigProps, id, formulaProps}: any) => {

  return (
    <>
        <Col>
            <Tag style={styles.tagStyle} onClick={(e) => handleSMA(e, f, formulaProps)}>sma</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleEMA(e, f, formulaProps)}>ema</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleMedian(e, f, formulaProps)}>median</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleSum(e, f, formulaProps)}>sum</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleCummean(e, f, formulaProps)}>cummean</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleCumstd(e, f, formulaProps)}>cumstd</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleCumSum(e, f, formulaProps)}>cumsum</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleStd(e, f, formulaProps)}>std</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handlePercentageChange(e, f, formulaProps)}>percentage_change</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleDiff(e, f, formulaProps)}>diff</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleLog(e, f, formulaProps)}>log</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handlePow(e, f, formulaProps)}>pow</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleAbs(e, f, formulaProps)}>abs</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleRange(e, f, formulaProps)}>range</Tag>
        </Col>,
        {/* <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleRsi(e, f, formulaProps)}>rsi</Tag>
        </Col>, */}
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleMax(e, f, formulaProps)}>max</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleMin(e, f, formulaProps)}>min</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleCorr(e, f, formulaProps)}>corr</Tag>
        </Col>,
        <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleIf(e, f, formulaProps)}>if</Tag>
        </Col>,
        {/* <Col>
          <Tag style={styles.tagStyle} onClick={(e) => handleShift(e)}>shift</Tag>
        </Col>, */}
    </>
  )
}

export default FormulaTagButtons


