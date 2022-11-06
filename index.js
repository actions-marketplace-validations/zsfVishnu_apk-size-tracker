import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import { execSync } from 'child_process';


try {
    const flavorToBuild = getInput('flavor');
    console.log(`Building flavor:  ${flavorToBuild}!`);
    const time = (new Date()).toTimeString();
    setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
    console.log("APK size")
    console.log("%%%%%%%%%%%%%%%%%%%%%%")
    console.log(execSync('pwd && ls && chmod +x builder.sh && ./builder.sh && cd app/build/outputs/apk/debug && du -sh app-debug.apk ', { encoding: 'utf-8' }));
    console.log("%%%%%%%%%%%%%%%%%%%%%%")

} catch (error) {
    setFailed(error.message);
}