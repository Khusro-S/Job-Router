import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aut
        necessitatibus quo saepe, doloremque ad maxime? Sapiente esse excepturi
        voluptatibus quo numquam, delectus atque corrupti quod culpa reiciendis,
        earum quasi!
      </p>

      <Outlet />
    </div>
  );
}
