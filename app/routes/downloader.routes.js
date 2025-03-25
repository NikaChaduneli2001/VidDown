import express from "express";
import Downloader from '../services/downloader.js'

const router = express.Router();

/**
 * @swagger
 * /download:
 *   post:
 *     tags:
 *       - Video Downloader
 *     summary: Download a video
 *     description: Starts downloading a video from a given URL.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *               path:
 *                 type: string
 *                 example: "./downloads"
 *     responses:
 *       200:
 *         description: Download started successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Download started successfully"
 *       400:
 *         description: Bad request (missing URL).
 *       500:
 *         description: Server error.
 */
router.post("/", async (req, res) => {
    try {
        const url = req.body.url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        const path = req.body.path || "./downloads";

        const downloader = new Downloader(url, path);
        await downloader.downloadVideo(); // Assuming this is an async function

        res.json({ message: "Download started successfully", url, path });
    } catch (error) {
        console.error("Download error:", error);
        res.status(500).json({ error: "Failed to download video" });
    }
});

export default router;