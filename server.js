import express from 'express';
import CONSTANTS from "./app/utils/constants.js";
import setupSwagger from "./app/config/swagger.config.js";
import routes from "./app/routes/downloader.routes.js";

const app = express();
app.use(express.json());
app.use('/download', routes);

setupSwagger(app);
app.listen(CONSTANTS.PORT, () => {
    console.log(`Server is running on port ${CONSTANTS.PORT}`)
    console.log(`Swagger docs available at http://localhost:${CONSTANTS.PORT}/api-docs`);
})