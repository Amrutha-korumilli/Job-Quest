import JobCard from "./JobCard";

const KanbanBoard = ({ jobs }) => {
  const stages = ["Applied", "Interview Scheduled", "Offer Received", "Rejected"];
  return (
    <div className="flex space-x-6 overflow-x-scroll">
      {stages.map((stage) => (
        <div key={stage} className="w-64 bg-gray-100 p-4 rounded-lg">
          <div className="font-semibold mb-4">{stage}</div>
          <div className="space-y-4">
            {jobs
              .filter((job) => job.status === stage)
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
