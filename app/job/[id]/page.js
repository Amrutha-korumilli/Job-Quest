const JobDetails = ({ job }) => {
    return (
      <div className="space-y-4">
        <div className="font-semibold text-2xl">{job.title}</div>
        <div>{job.company}</div>
        <div>{job.description}</div>
        <div>{job.dateApplied}</div>
        <div>{job.status}</div>
      </div>
    );
  };
  
  export default JobDetails;
  