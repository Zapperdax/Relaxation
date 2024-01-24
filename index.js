const CronJob = require("cron").CronJob;
const { exec } = require("child_process");
const path = require("path");

const bashScriptPath = path.join(__dirname, "git_commit.sh");

const generateRandomTime = () => {
  // const hour = Math.floor(Math.random() * 24);
  // const minute = Math.floor(Math.random() * 60);
  const hour = 19;
  const minute = 35;
  return `${minute} ${hour} * * *`; // Format: minute hour * * *
};

const runScheduledJob = () => {
  exec(`/bin/bash ${bashScriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Bash script: ${error}`);
      return;
    }
    console.log(`Bash script output: ${stdout}`);
    console.error(`Bash script errors: ${stderr}`);
  });
};

const startJobScheduler = () => {
    //const loop = () => {
    //const randomTimeExpression = generateRandomTime();
    //const job = new CronJob(randomTimeExpression, runScheduledJob, null, false, 'Asia/Karachi');
    //job.start();

    // Wait for the next execution
    //setTimeout(() => {
      //job.stop();
     // loop();
    //}, 24 * 60 * 60 * 1000); // Wait for 24 hours before starting the loop again
  //};

  //loop();
  runScheduledJob();
};

// Start the job scheduler
startJobScheduler();
