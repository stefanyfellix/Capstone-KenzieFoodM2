import { UserInteraction } from "../../src/controllers/userInteraction.js";

const signUpForm = document.getElementById('signUpForm')
signUpForm.addEventListener("submit", UserInteraction.getDataUser)