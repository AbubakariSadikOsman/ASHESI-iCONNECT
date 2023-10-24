import Complaint from "../../components/complaints/Complaint"

const Complaints = () => {
  return (
    <div className="dark:text-[#ffffffc2] w-[900px] mb-10">
      <div className="flex justify-between sticky top-[4.36rem] -mt-10 py-5 bg-white dark:bg-[#2D2D2D]">
        <h2 className="font-[Inter] font-bold text-[28px]">
          All Raised Complaints
        </h2>
        <input type="text" placeholder="Search for complaints..." className="px-5 h-10 w-[300px] border-solid border-2 border-[#80000090] outline-none rounded-md dark:bg-[#333]"/>
      </div>
      <Complaint subject={'Dissatisfaction with certain administrative processes'} description={"I want seek clarification and updates from the university's financial aid office but has not received clear information or resolution. As a result, they feel left in the dark about the status of their financial aid application and disbursement timeline."} time={"12:45 PM "} date={"Sep 30, 2023"} />
      <Complaint subject={'Dissatisfaction with certain administrative processes'} description={"I want seek clarification and updates from the university's financial aid office but has not received clear information or resolution. As a result, they feel left in the dark about the status of their financial aid application and disbursement timeline."} time={"12:45 PM "} date={"Sep 30, 2023"} />
      <Complaint subject={'Dissatisfaction with certain administrative processes'} description={"I want seek clarification and updates from the university's financial aid office but has not received clear information or resolution. As a result, they feel left in the dark about the status of their financial aid application and disbursement timeline."} time={"12:45 PM "} date={"Sep 30, 2023"} />
      <Complaint subject={'Dissatisfaction with certain administrative processes'} description={"I want seek clarification and updates from the university's financial aid office but has not received clear information or resolution. As a result, they feel left in the dark about the status of their financial aid application and disbursement timeline."} time={"12:45 PM "} date={"Sep 30, 2023"} />
      <Complaint subject={'Dissatisfaction with certain administrative processes'} description={"I want seek clarification and updates from the university's financial aid office but has not received clear information or resolution. As a result, they feel left in the dark about the status of their financial aid application and disbursement timeline."} time={"12:45 PM "} date={"Sep 30, 2023"} />
    </div>
  )
}

export default Complaints
