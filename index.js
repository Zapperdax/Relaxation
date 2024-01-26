const CronJob = require("cron").CronJob;
const { exec } = require("child_process");
const path = require("path");

const bashScriptPath = path.join(__dirname, "git_commit.sh");

const generateRandomTime = () => {
  const hour = Math.floor(Math.random() * 23);
  const minute = Math.floor(Math.random() * 59);
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
  const loop = () => {
    const time1 = generateRandomTime();
    const time2 = generateRandomTime();
    console.log(time1);
    console.log(time2);

    const job1 = new CronJob(time1, runScheduledJob, null, true, 'Asia/Karachi');
    const job2 = new CronJob(time2, runScheduledJob, null, true, 'Asia/Karachi');

    // Wait for the next execution
    setTimeout(() => {
      job1.stop();
      job2.stop();
      loop();
    }, 24 * 60 * 60 * 1000); // Wait for 24 hours before starting the loop again
  };

  loop();
};

// Start the job scheduler
startJobScheduler();
