const CronJob = require("cron").CronJob;
const {exec} = require("child_process");
const bashScriptPath = './git_commit.sh';
const job = new CronJob('20 19 * * *', () => {
  exec(`which bash`, (error, stdout, stderr) => {
    console.log(`bash path:${stdout}`);
    if (error) {
      console.error(`Error executing Bash script: ${error}`);
      return;
    }
    console.log(`Bash script output: ${stdout}`);
    console.error(`Bash script errors: ${stderr}`);
  });
}, null, true, 'Asia/Karachi');

job.start();
