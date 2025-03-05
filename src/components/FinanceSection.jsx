// import './FinanceSection.css';


const FinanceSection = () => {
  return (
    <div className="finance">
      <div className="head">
        <h4>Finance</h4>
      </div>
      <div className="content">
        <div className="cards">
          <div className="finance_logo"></div>
          <div className="details">
            <div className="amount">
              <p>$ 10000</p>
            </div>
            <div className="text">Total Payable</div>
          </div>
        </div>
        <div className="cards">
          <div className="finance_logo"></div>
          <div className="details">
            <div className="amount">
              <p>$ 5000</p>
            </div>
            <div className="text">Total Paid</div>
          </div>
        </div>
        <div className="cards">
          <div className="finance_logo"></div>
          <div className="details">
            <div className="amount">
              <p>$ 300</p>
            </div>
            <div className="text">Others</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
