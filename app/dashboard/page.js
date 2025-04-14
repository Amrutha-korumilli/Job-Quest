import KanbanBoard from "../../components/KanbanBoard";
import { dummyData } from "../../utils/dummyData";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Job Applications</h2>
      <KanbanBoard jobs={dummyData.jobs} />
    </div>
  );
};

export default Dashboard;
