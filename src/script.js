import { InterfaceDashboard } from "./controllers/interfaceDashboard.js";
import { ApiProductPublic } from "./models/apiProductPublic.js";

console.log(ApiProductPublic.dataProductPublic)
InterfaceDashboard.renderTable(ApiProductPublic.dataProductPublic)