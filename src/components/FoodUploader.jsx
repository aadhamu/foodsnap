import { useState, useEffect } from "react";

function FoodUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // show image preview
  useEffect(() => {
    if (!image) return;
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setResult(""); // reset old result
    }
  };

  const analyzeFood = async () => {
    if (!image) return;
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64 = reader.result.split(",")[1]; // remove header

      try {
        const res = await fetch("http://localhost:5000/scan-food", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64 }),
        });

        const data = await res.json();
        setResult(data.result);
      } catch (err) {
        console.error(err);
        setResult("Error analyzing food.");
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Upload Your Food</h2>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="mb-4"
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mx-auto w-64 mt-4 rounded"
        />
      )}

      {image && (
        <button
          onClick={analyzeFood}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Food"}
        </button>
      )}

      {result && (
        <div className="mt-6 p-4 shadow rounded bg-white text-left">
          <h3 className="font-bold mb-2">Nutrition Info</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default FoodUploader;
