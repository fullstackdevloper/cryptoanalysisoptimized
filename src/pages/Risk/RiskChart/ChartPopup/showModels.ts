export const showModalFirst = (e: any, chartConfigProps: any) => {
    const {setAddMatric,setcurrentTitle,setRemovalKey,setIsHidden, setIsModalOpen} = chartConfigProps
    setIsModalOpen(true);
    setAddMatric(true);
    setcurrentTitle('Add Matric');
    setRemovalKey(true);
    setIsHidden(false);
  };

export const showModal = (e: any, chartConfigProps: any) => {
  const {setIsModalOpen} = chartConfigProps
    setIsModalOpen(true);
  };