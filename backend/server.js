import express from 'express';
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from "url";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5030;

// ES Module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// --- Production Build Serve ---
if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../frontend/dist");

    app.use(express.static(frontendPath));

    app.get("*", (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server running on port ${PORT}`);
});
