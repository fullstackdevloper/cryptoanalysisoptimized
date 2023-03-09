import React from 'react'

export const zoomCustom = (metrixTabs: any, currentIndex: any, series: any, data: any) => {
    if (metrixTabs[currentIndex].zoom === '1M') {
        series = data.slice(
          data.length - 30,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '1D') {
        series = data.slice(
          data.length - 1,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '7D') {
        series = data.slice(
          data.length - 8,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '2W') {
        series = data.slice(
          data.length - 16,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '3M') {
        series = data.slice(
          data.length - 90,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '6M') {
        series = data.slice(
          data.length - 180,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '1Y') {
        series = data.slice(
          data.length - 365,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '2Y') {
        series = data.slice(
          data.length - 730,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '3Y') {
        series = data.slice(
          data.length - 1095,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === '5Y') {
        series = data.slice(
          data.length - 1825,
          data.length
        );
      }
      if (metrixTabs[currentIndex].zoom === 'ALL') {
        series = data
      }
      return series;
}
