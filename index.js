const CronJob = require("cron").CronJob;
const { exec } = require("child_process");
const path = require("path");
const bashScriptPath = path.join(__dirname, "git_commit.sh");


const runScheduledJob = () => {
  exec(`/bin/bash`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Bash script: ${error}`);
      return;
    }
    console.log(`Bash script output: ${stdout}`);
    console.error(`Bash script errors: ${stderr}`);
  });
};

// Schedule the job
const job = new CronJob('30 20 * * *', runScheduledJob, null, true, 'Asia/Karachi');
job.start();

module.exports = runScheduledJob;