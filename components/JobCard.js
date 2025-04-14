const JobCard = ({ job }) => {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg flex flex-col space-y-4">
        <div className="font-semibold text-xl">{job.title}</div>
        <div>{job.company}</div>
        <div>{job.status}</div>
        <div>{job.dateApplied}</div>
      </div>
    );
  };
  
  export default JobCard;
  