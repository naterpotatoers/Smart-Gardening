import { LoadPlants } from "../components/LoadPlants";

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>Plant Analytics</h2>
      <LoadPlants userId="admin@email.com" />
    </div>
  );
};

export default Analytics;
