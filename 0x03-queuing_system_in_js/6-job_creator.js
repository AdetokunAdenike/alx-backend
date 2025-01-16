import kue from 'kue';

console.log('Starting Job Creator...');

// Creates a Kue queue
const queue = kue.createQueue();

// Defines the job data
const jobData = {
  phoneNumber: '123-456-7890',
  message: 'This is a push notification',
};

const job = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (err) {
      console.error(`Failed to create job: ${err.message}`);
    } else {
      console.log(`Notification job created: ${job.id}`);
    }
  });

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
