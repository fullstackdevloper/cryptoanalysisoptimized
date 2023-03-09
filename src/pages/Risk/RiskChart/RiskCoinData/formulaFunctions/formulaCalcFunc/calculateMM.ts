export const calculateMM = (dps: any, mRange: any) => {
    let mmDps: any = []
    var k = 2 / (mRange + 1);
    mmDps = [{ x: dps[0].x, y: dps[0].y.length ? dps[0].y[0] : dps[0].y }];
    for (var i = 1; i < dps.length; i++) {
        mmDps.push({ x: dps[i].x, y: (dps[i].y.length ? dps[i].y[0] : dps[i].y) * k + mmDps[i - 1].y * (1 - k) });
    }
    return mmDps;
  }