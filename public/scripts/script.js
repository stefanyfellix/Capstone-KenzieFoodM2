import { UserInteraction } from "../../src/controllers/userInteraction.js";

const loginForm = document.getElementById('loginForm')
loginForm.addEventListener("submit", UserInteraction.getLoginData)