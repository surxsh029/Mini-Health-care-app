import { useState } from "react";

function HealthcareForm({ onResponse }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
    urgency: "Low",
  });

  const [loading, setLoading] = useState(false);

  const urgencyStyles = {
    Low: "border-green-400 focus:ring-green-300",
    Medium: "border-yellow-400 focus:ring-yellow-300",
    High: "border-red-400 focus:ring-red-300",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      onResponse(data.summary);
    } catch {
      onResponse("Unable to process your request at the moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Patient Information */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-teal-700 mb-4">
          Patient Information
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border-2 border-gray-400 px-4 py-2 shadow-inner focus:outline-none focus:ring-4 focus:ring-teal-300 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-xl border-2 border-gray-400 px-4 py-2 shadow-inner focus:outline-none focus:ring-4 focus:ring-teal-300 focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Medical Details */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-5">
        <h3 className="text-lg font-semibold text-teal-700">
          Medical Details
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Health Concern
          </label>
          <textarea
            name="issue"
            rows="4"
            placeholder="Describe symptoms or issue"
            value={formData.issue}
            onChange={handleChange}
            required
            className="w-full rounded-xl border-2 border-gray-400 px-4 py-2 shadow-inner focus:outline-none focus:ring-4 focus:ring-teal-300 focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Urgency Level
          </label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className={`w-full rounded-xl border-2 px-4 py-2 bg-white shadow-inner focus:outline-none focus:ring-4 ${urgencyStyles[formData.urgency]}`}
          >
            <option value="Low">Low – Routine</option>
            <option value="Medium">Medium – Needs Attention</option>
            <option value="High">High – Immediate Care</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:from-teal-700 hover:to-emerald-700 transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Submit Support Request"}
      </button>
    </form>
  );
}

export default HealthcareForm;
