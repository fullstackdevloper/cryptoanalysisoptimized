import { useState } from "react";

const useFormulaConfig = () => {
    
  const [renameFormula, setRenameFormula] = useState<boolean>(false);
    const [formulaValue, setFormulaValue] = useState<any>('');
    const [formulaValueArr, setFormulaValueArr] = useState<any>(['']);
    const [formulaInputArr, setFormulaInputArr] = useState<any>([]);
    const [singleFormulaInputArr, setSingleFormulaInputArr] = useState<any>([]);
    const [m, setM] = useState(1);
    const [f, setF] = useState(0);
    
    return [formulaValue, setFormulaValue,
        formulaValueArr, setFormulaValueArr,
        formulaInputArr, setFormulaInputArr,
        singleFormulaInputArr, setSingleFormulaInputArr,
        renameFormula, setRenameFormula,
        m, setM,
        f, setF] as const
}

export default useFormulaConfig
