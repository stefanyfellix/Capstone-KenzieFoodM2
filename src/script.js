import { InterfaceDashboard } from "./controllers/interfaceDashboard.js";
import { ApiProductPublic } from "./models/apiProductPublic.js";

InterfaceDashboard.renderTable(ApiProductPublic.dataProductPublic)