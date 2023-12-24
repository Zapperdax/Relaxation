const CronJob = require("cron").CronJob;
const { exec } = require("child_process");
const bashScriptPath = './git_commit.sh';

const runScheduledJob = () => {
  console.log("Job triggered");
  exec(`bash ${bashScriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Bash script: ${error}`);
      return;
    }
    console.log(`Bash script output: ${stdout}`);
    console.error(`Bash script errors: ${stderr}`);
  });
};

// Schedule the job
const job = new CronJob('6 19 * * *', runScheduledJob, null, true, 'Asia/Karachi');
job.start();
