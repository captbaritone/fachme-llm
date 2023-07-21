import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";
import { FachMeResponse } from "./fachmeSchema";

// TODO: use local .env file.
dotenv.config({ path: path.join(__dirname, "../.env") });


const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join(__dirname, "../src/fachmeSchema.ts"), "utf8");
const translator = createJsonTranslator<FachMeResponse>(model, schema, "FachMeResponse");

// Process requests interactively or from the input file specified on the command line
processRequests("Name a few characters that suits your voice > ", process.argv[2], async (request) => {
    console.log("Faching you gently...")
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }

    console.log(`Roles in your tailor-made fach:`);
    response.data.suggestions.forEach((role, i) => {
        console.log(`  ${i}. ${role.name} in ${role.opera_title} by ${role.composer_name}`)
    })
    process.exit(0)
});