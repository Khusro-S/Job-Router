import { Outlet } from "react-router-dom";
import HistoryNavbar from "../Components/Navbars/HelpNavbar";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, illum
        exercitationem, id mollitia dolor autem sed velit animi pariatur numquam
        nemo quisquam debitis amet laboriosam laborum, distinctio soluta placeat
        sapiente.
      </p>
      <HistoryNavbar />
      <Outlet />
    </div>
  );
}
