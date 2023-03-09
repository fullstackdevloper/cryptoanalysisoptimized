import { Menu } from "antd";

export const zoom = (tabId: any, setcurrentTitle: any, metrixTabs: any, setMetrixTabs: any) => (
    <>
      <Menu
        onClick={(e) => handleZoomMenuClick(e, tabId, setcurrentTitle, metrixTabs, setMetrixTabs)}
        items={[
          {
            label: '7 Days',
            key: '7D',
          },
          {
            label: '2 Week',
            key: '2W',
          },
          {
            label: '1 Month',
            key: '1M',
          },
          {
            label: '3 Month',
            key: '3M',
          },
          {
            label: '6 Month',
            key: '6M',
          },
          {
            label: 'YTD',
            key: 'YTD',
          },
          {
            label: '1 Year',
            key: '1Y',
          },
          {
            label: '2 Year',
            key: '2Y',
          },
          {
            label: '3 Year',
            key: '3Y',
          },
          {
            label: '5 Year',
            key: '5Y',
          },
          {
            label: 'All',
            key: 'ALL',
          },
        ]}
      />
    </>
  );

  
  const handleZoomMenuClick = (e: any, tabId: any, setcurrentTitle: any, metrixTabs: any, setMetrixTabs: any) => {
    setcurrentTitle('Replace Metric');  
    metrixTabs[tabId].zoom = e.key;
    setMetrixTabs([...metrixTabs]);
  }