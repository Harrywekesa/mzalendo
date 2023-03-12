let totalEnrolled = 100;
let totalBillsPassed = 20;
let totalActionsTaken = 80;


// Get the elements for each number
const enrolledUsers = document.querySelector('#enrolled-users') = 100;
const passedBills = document.querySelector('#passed-bills') = 20;
const activeUsers = document.querySelector('#active-users') = 80;

// Create the CountUp instances
const enrolledUsersCountUp = new CountUp(enrolledUsers, 0, 15000, 0, 2, {separator: ','});
const passedBillsCountUp = new CountUp(passedBills, 0, 236, 0, 2, {separator: ','});
const activeUsersCountUp = new CountUp(activeUsers, 0, 4321, 0, 2, {separator: ','});

// Start the animations when the elements are in view
const options = {
  rootMargin: '0px',
  threshold: 0.2
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      enrolledUsersCountUp.start();
      passedBillsCountUp.start();
      activeUsersCountUp.start();
      observer.unobserve(entry.target);
    }
  });
}, options);
observer.observe(enrolledUsers);
observer.observe(passedBills);
observer.observe(activeUsers);
