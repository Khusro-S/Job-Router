import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>
        Career Details for{" "}
        <span className="underline text-2xl">{career.title}</span>
      </h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.salary}</p>
      <div className="detail">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ex
          dicta iure est, minima, ab officia tempora illo quidem voluptatem aut
          sed voluptates dolore! Dolorum doloribus laboriosam sint deleniti
          quia!
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
