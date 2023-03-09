export const handleSMA = (e, f, formulaProps) => {
    const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
      formulaValue, setFormulaValue} = formulaProps;
    console.log(formulaValueArr[0], f,'log');
    formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'sma(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} sma(m1,7)`}`;
    setFormulaValueArr([...formulaValueArr]);
    formulaInputArr[0] !== '' ? setFormulaInputArr([...formulaInputArr, { name: "sma", m: 1, period: 7 }]) : setFormulaInputArr([{ name: "sma", m: 1, period: 7 }])
    let FormulaValue = `${formulaValue === '' ? 'sma(m1,7)' : `${formulaValue} sma(m1,7)`}`
    setFormulaValue(FormulaValue)
    console.log(formulaValue,'log');
  }

export const handleEMA = (e, f, formulaProps) => {
    const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
      formulaValue, setFormulaValue} = formulaProps;
      formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'ema(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} ema(m1,7)`}`;
    setFormulaValueArr([...formulaValueArr]);
    setFormulaInputArr([...formulaInputArr, { name: "ema", m: 1, period: 7 }])
    setFormulaValue(`${formulaValue} ema(m1,7)`)
}

export const handleMedian = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'median(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} median(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "median", m: 1, period: 6 }])
  setFormulaValue(`${formulaValue} median(m1,7)`)
}


export const handleSum = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'sum(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} sum(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "sum", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} sum(m1,7)`)
}

export const handleCummean = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'cummean(m1)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} cummean(m1)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "cummean", m: 1 }])
  setFormulaValue(`${formulaValue} cummean(m1)`)
}

export const handleCumstd = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'cumstd(m1)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} cumstd(m1)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "cumstd", m: 1 }])
  setFormulaValue(`${formulaValue} cumstd(m1)`)
}

export const handleCumSum = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
      formulaValue, setFormulaValue} = formulaProps;
    formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'cumsum(m1)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} cumsum(m1)`}`;
    setFormulaValueArr([...formulaValueArr]);
    setFormulaInputArr([...formulaInputArr, { name: "cumsum", m: 1 }])
    setFormulaValue(`${formulaValue} cumsum(m1)`)
}

export const handleStd = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'std(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} std(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "std", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} std(m1,7)`)
}

export const handlePercentageChange = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'percentage_change(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} percentage_change(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "percentage_change", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} percentage_change(m1,7)`)
}

export const handleDiff = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'diff(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} diff(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "diff", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} diff(m1,7)`)
}

export const handleLog = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'log(m1)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} log(m1)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "log", m: 1 }])
  setFormulaValue(`${formulaValue} log(m1)`)
}

export const handlePow = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'pow(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} pow(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "pow", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} pow(m1,7)`)  
}

export const handleAbs = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'abs(m1)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} abs(m1)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "abs", m: 1 }])
  setFormulaValue(`${formulaValue} abs(m1)`) 
}

export const handleRange = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'range(m1)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} range(m1)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "range", m: 1 }])
  setFormulaValue(`${formulaValue} range(m1)`)
}

export const handleRsi = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'rsi(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} rsi(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "rsi", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} rsi(m1,7)`)
}

export const handleMax = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'max(m1,m2)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} max(m1,m2)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "max", m1: 1, m2: 2 }])
  setFormulaValue(`${formulaValue} max(m1,m2)`)
}

export const handleMin = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'min(m1,m2)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} min(m1,m2)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "min", m1: 1, m2: 2 }])
  setFormulaValue(`${formulaValue} min(m1,m2)`)
}

export const handleCorr = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'corr(m1,m2,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} corr(m1,m2,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "corr", m1: 1, m2: 2, period: 6 }])
  setFormulaValue(`${formulaValue === undefined ? '' : formulaValue} corr(m1,m2,7)`)
}

export const handleIf = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'if(m1,>,m2,m1,0)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} if(m1,>,m2,m1,0)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "if", m1: 1, m2: 2, cond: '>' }])
  setFormulaValue(`${formulaValue === undefined ? '' : formulaValue} if(m1,>,m2,m1,0)`)
}

export const handleShift = (e, f, formulaProps) => {
  const {formulaValueArr, setFormulaValueArr, formulaInputArr, setFormulaInputArr,
    formulaValue, setFormulaValue} = formulaProps;
  formulaValueArr[f] = `${formulaValueArr[f] === '' ? 'shift(m1,7)' : `${formulaValueArr[f] === undefined ? '' : formulaValueArr[f]} shift(m1,7)`}`;
  setFormulaValueArr([...formulaValueArr]);
  setFormulaInputArr([...formulaInputArr, { name: "shift", m: 1, period: 7 }])
  setFormulaValue(`${formulaValue} shift(m1,7)`)
}