import AddIcon from "../../assets/images/addtransaction.svg";
const AddTransactionBtn = (props) => {
  const { openAddReportModalHandler } = props;
  return (
    <div onClick={openAddReportModalHandler} className="add-budget">
      <img src={AddIcon} alt="" />
    </div>
  );
};

export default AddTransactionBtn;
