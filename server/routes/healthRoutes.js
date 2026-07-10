import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "MERN Starter API",
        version: "1.0.0",
    });
});

router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "OK",
        environment: process.env.NODE_ENV,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

export default router;