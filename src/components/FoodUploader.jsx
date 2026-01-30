import { useState, useRef, useEffect } from "react";
import { UploadCloud, X, AlertCircle, ScanLine, Utensils } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./FoodUploader.css";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Dedicated Error Component
const ErrorState = ({ message }) => (
  <div className="error-box">
    <AlertCircle className="error-icon" size={20} />
    <span className="error-message">{message}</span>
  </div>
);

// Loading Component
const LoadingState = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p className="loading-text">Analyzing your food...</p>
    <p className="text-sm text-gray-500 mt-2">Identifying ingredients & calculating nutrition...</p>
  </div>
);

function FoodUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [genAI, setGenAI] = useState(null);

  useEffect(() => {
    if (GEMINI_API_KEY) {
      console.log("Initializing Gemini Client...");
      try {
        const ai = new GoogleGenerativeAI(GEMINI_API_KEY);
        setGenAI(ai);
        console.log("Gemini Client Initialized");
      } catch (err) {
        console.error("Failed to initialize Gemini:", err);
        setError("Failed to initialize AI service.");
      }
    } else {
      console.warn("API Key is missing.");
      setError("API Key is missing. Please check your .env configuration.");
    }
  }, []);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError("");
    } else {
      setError("Please select a valid image file (JPG, PNG, WEBP).");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const clearImage = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const analyzeFood = async () => {
    if (!image) return;
    if (!genAI) {
      setError("Generative AI client not initialized.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // 1. Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onloadend = async () => {
        try {
          const base64Data = reader.result.split(",")[1];

          // 2. Get the model - explicitly requesting gemini-2.5-flash
          const model = genAI.getGenerativeModel(
            { model: "gemini-2.5-flash" },
            { apiVersion: "v1" }
          );

          // 3. Construct the prompt matching your React Native implementation
          const prompt = `Analyze this food image and provide the following information in JSON format:
{
  "foodName": "exact name of the food item",
  "quantity": estimated quantity as a number,
  "unit": "appropriate unit (piece, cup, gram, slice, etc.)",
  "calories": estimated calories per unit as a number,
  "confidence": confidence level from 0-1,
  "macronutrients": {
    "protein": "amount in g",
    "carbs": "amount in g",
    "fat": "amount in g"
  },
  "healthiness": "brief 1-sentence summary of healthiness"
}

Guidelines:
- Be specific with food names (e.g., "Grilled Chicken Breast" not just "Chicken")
- Estimate realistic quantities based on what you see
- Use common units (piece, cup, gram, slice, tablespoon, etc.)
- Provide calorie estimates based on standard nutritional values
- Return ONLY the JSON object, no additional text, no markdown formatting.`;

          // 4. Send request
          console.log("Sending request to Gemini SDK...");
          const result = await model.generateContent([
            prompt,
            {
              inlineData: {
                data: base64Data,
                mimeType: image.type,
              },
            },
          ]);

          const response = await result.response;
          const text = response.text();
          console.log("Raw AI Response:", text);

          // 5. Clean and parse JSON
          let cleanedText = text.trim();
          // Remove Markdown code blocks if present
          cleanedText = cleanedText.replace(/^```json\s*/, "").replace(/\s*```$/, "");
          cleanedText = cleanedText.replace(/^```\s*/, "").replace(/\s*```$/, "");

          try {
            // Find JSON object in the response if excess text exists
            const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
              throw new Error("No JSON object found in response");
            }

            const jsonResult = JSON.parse(jsonMatch[0]);
            setResult(jsonResult);
          } catch (parseError) {
            console.error("JSON Parse Error:", parseError);
            console.log("Failed Text:", cleanedText);
            throw new Error("Failed to parse nutrition data from AI response.");
          }

        } catch (innerErr) {
          console.error("Inner Error:", innerErr);
          setError(`Analysis failed: ${innerErr.message || "Unknown error"}`);
        } finally {
          setLoading(false);
        }
      };

      reader.onerror = () => {
        setError("Failed to read image file.");
        setLoading(false);
      };

    } catch (err) {
      console.error("Execution Error:", err);
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="uploader-container">
      <div className="glass-card">

        {/* Header */}
        <div className="header-gradient">
          <ScanLine size={32} />
          <div>
            <h2 className="header-title">FoodSnap AI</h2>
            <p className="header-subtitle">Instant nutritional insights</p>
          </div>
        </div>

        <div className="content-area">
          {error && <ErrorState message={error} />}

          {loading ? (
            <LoadingState />
          ) : (
            <>
              {/* Upload & Preview Interface */}
              {!preview ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`upload-box ${isDragging ? "dragging" : ""}`}
                >
                  <div className="icon-circle">
                    <UploadCloud size={32} />
                  </div>
                  <h3 className="upload-text">
                    Click or drag & drop to upload
                  </h3>
                  <p className="upload-subtext">
                    JPG, PNG, WEBP supported
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden-input"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <div className="preview-section">
                  <div className="preview-container">
                    <img
                      src={preview}
                      alt="Food preview"
                      className="preview-image"
                    />
                    <button onClick={clearImage} className="remove-btn">
                      <X size={16} />
                    </button>
                  </div>

                  {!result && (
                    <button onClick={analyzeFood} className="analyze-btn">
                      <Utensils size={20} />
                      Analyze Nutrition
                    </button>
                  )}
                </div>
              )}

              {/* Results */}
              {result && (
                <div className="result-card">
                  <h3 className="result-header font-bold text-xl">
                    <ScanLine size={24} />
                    {result.foodName}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/50 p-3 rounded-lg border border-green-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Calories</p>
                      <p className="text-xl font-bold text-emerald-800">{result.calories} kcal</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg border border-green-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Serving</p>
                      <p className="text-xl font-bold text-emerald-800">{result.quantity} {result.unit}</p>
                    </div>
                  </div>

                  {result.macronutrients && (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Protein</span>
                        <span className="font-semibold">{result.macronutrients.protein}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Carbs</span>
                        <span className="font-semibold">{result.macronutrients.carbs}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fat</span>
                        <span className="font-semibold">{result.macronutrients.fat}</span>
                      </div>
                    </div>
                  )}

                  <div className="text-sm text-gray-700 italic border-t pt-3 mt-2 border-green-100">
                    "{result.healthiness}"
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>Confidence: {Math.round(result.confidence * 100)}%</span>
                  </div>

                  <button onClick={clearImage} className="reset-btn">
                    Scan another meal
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodUploader;
