import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to local MongoDB database
mongoose
  .connect("mongodb://localhost:27017/Fitness-Tracking-Application", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log("✅ MongoDB Connected to Fitness-Tracking-Application")
  )
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Step schema & model
const stepSchema = new mongoose.Schema({
  steps: Number,
  calories: Number,
  date: { type: Date, default: Date.now }
});
const Step = mongoose.model("Step", stepSchema);

// GET latest step data
app.get("/api/steps", async (req, res) => {
  try {
    const latest = await Step.findOne().sort({ date: -1 });
    res.json(latest || { steps: 0, calories: 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new step data
app.post("/api/steps", async (req, res) => {
  const { steps, calories } = req.body;
  try {
    const newData = new Step({ steps, calories });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
