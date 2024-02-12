import { useLoaderData, useNavigate } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="cardBg hover:bg-secondary"
      >
        Go Back
      </button>
      <div className="career-details">
        <h2>
          Career Details for{" "}
          <span className="underline text-2xl">{career.title}</span>
        </h2>

        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="detail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            ex dicta iure est, minima, ab officia tempora illo quidem voluptatem
            aut sed voluptates dolore! Dolorum doloribus laboriosam sint
            deleniti quia!
          </p>
        </div>
      </div>
    </>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }
  
  return res.json();
};
