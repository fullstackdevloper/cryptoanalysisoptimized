


export const formatKeys = (key) => {
    if (key=== 'Price') {
        return 'Price'
    }
    if (key === 'UDPI_ST') {
        return 'UDPI Short';
    }
    if (key === 'UDPI_MT') {
        return 'UDPI Medium';
    }
    if (key === 'UDPI_LT') {
        return 'UDPI Long';
    }
    if (key === 'MBI') {
        return 'MBI';
    }
    if (key === 'TCI') {
        return 'TCI';
    }
    if (key === 'TCI_CV') {
        return 'TCI Crit';
    }
    if (key === 'MDC_CV') {
        return 'MDC Crit';
    }
    else {
        return 'Series'
    }


}