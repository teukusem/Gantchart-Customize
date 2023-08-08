export const TooltipSideBarCard = ({ data }) => {
  return (
    <div style={{ color: 'black', padding: '0.5rem', fontSize: 12 }}>
      <span style={{ fontWeight: 'bolder' }}>Mooring Time :</span>
      <p style={{ fontSize: 10 }}>2023-06-02 17:00 s/d 2023-06-03 17:00</p>
      <span style={{ fontWeight: 'bolder' }}>Approval Time :</span>
      <p style={{ fontSize: 10 }}>2023-06-02 16:00</p>
      <span style={{ fontWeight: 'bolder' }}>SPOG :</span>
      <p style={{ fontSize: 10 }}>SPOG.IDMAK.2303.020040</p>
    </div>
  );
};
