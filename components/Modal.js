"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Simulate fetching job details based on the job ID
    if (id) {
      const fetchJobDetails = async () => {
        // Normally, you would fetch this data from an API or a database.
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      };

      fetchJobDetails();
    }
  }, [id]);

  if (!job) {
    return (
      <div className="text-center py-12">
        <p>Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Job Title */}
      <h1 className="text-3xl font-semibold text-gray-800">{job.title}</h1>

      {/* Job Description */}
      <p className="text-gray-600 mt-4">{job.description}</p>

      {/* Job Location */}
      <p className="text-gray-500 mt-2">Location: {job.location}</p>

      {/* Apply Button */}
      <div className="mt-6">
        <a
          href={job.applyLink}
          target="_blank"
          className="inline-block text-center bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
