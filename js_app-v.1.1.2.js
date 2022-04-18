const testimonialsContainer = document.querySelector('.testimonial-container');

const testimonial = document.querySelector('.testimonial');

const userImage = document.querySelector('.user-image');

const username = document.querySelector('.username');

const role = document.querySelector('.role');


const testimonials = [ {
    name: 'Miyah Myles',
    position: 'Senior Software Engineer',
    photo: 'https://unsplash.com/photos/XmvKl8CDMrk',
    text: "I assume that by level 4 you mean engineers with roughly 2–5 years of experience, what I would call mid-level. I am a manager now, but as a senior engineer I enjoyed working with them a lot. There are several reasons. On one hand you can mostly delegate to them and they will deliver. On the other, you feel very useful, because as a good senior engineer you can contribute in unique ways that they can't yet, and you get to share your skills and experience with them. There's typically at least a bit of mentorship going on, and I personally enjoy that a lot."
} , 
{
    name: 'Tyler Smith',
    position: 'Frontend Engineer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "I've worked with literally hundreds of HTML/CSS, React/Redux developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
},
{
    name: 'Cody Miller',
    position: 'DevOps Engineer',
    photo: 'https://randomuser.me/api/portraits/men/30.jpg',
    text: "any organizations are moving to DevOps, an ethos that integrates IT professionals and software developers who manage production operations for a smoother, more productive workflow. This means DevOps Engineers are in demand more than ever before. Since 2018, the DevOps Engineer Job listing has been ranked no. 2 on Glassdoor’s Best Jobs in America list."
},
{
    name: 'Oliwia Walker',
    position: 'Backend Engineer',
    photo: 'https://randomuser.me/api/portraits/women/57.jpg',
    text: "A back-end engineer is generally responsible for building the structure of a software application. They'll primarily spend time writing business logic, server scripts, and application programming interfaces (APIs) that will eventually be utilized by front-end engineers and UX designer"
},
{
    name: 'Sarah Wilson',
    position: 'Software Testing',
    photo: 'https://randomuser.me/api/portraits/women/34.jpg',
    text: "We, as testers, are aware of the various types of Software Testing like Functional Testing, Non-Functional Testing, Automation Testing, Agile Testing, and their sub-types,etc."
},
{
    name: 'Tara Brown',
    position: 'Fullstack Developer',
    photo: 'https://randomuser.me/api/portraits/women/16.jpg',
    text: "Use the one that makes you more productive. For me that means more than one. A full-stack developer works on many different kinds of technology.For javascript and html centric stuff like React, Angular, Node, etc I like Webstorm"
}];

let idx = 1;

function updateTestimonial(){
   const {name, position, photo, text} = testimonials[idx];

   testimonial.innerHTML = text;
   userImage.src = photo;
   username.innerHTML = name;
   role.innerHTML = position;

   idx++;

   if(idx > testimonials.length -1) {
       idx = 0;
   }
}
setInterval(updateTestimonial, 10000);