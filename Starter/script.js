// local reviews data
const reviews = [
    {
        id: 1,
        name: "John Doe",
        job: "Software Engineer",
        img: "https://res.cloudinary.com/dlf5vhtov/image/upload/v1732941959/images_1_nujwhc.jpg",
        text: "The product exceeded my expectations! Great build quality and excellent customer support."
    },
    {
        id: 2,
        name: "Jane Smith",
        job: "Graphic Designer",
        img: "https://res.cloudinary.com/dlf5vhtov/image/upload/v1732941959/images_3_cnlnkc.jpg",
        text: "Absolutely love the design and functionality. It fits perfectly into my workflow."
    },
    {
        id: 3,
        name: "Mark Taylor",
        job: "Marketing Manager",
        img: "https://res.cloudinary.com/dlf5vhtov/image/upload/v1732941959/images_2_xqix2r.jpg",
        text: "The service was satisfactory. There’s room for improvement, but overall a good experience."
    },
    {
        id: 4,
        name: "Emily Brown",
        job: "Freelance Writer",
        img: "https://res.cloudinary.com/dlf5vhtov/image/upload/v1732942142/images_84_wskrqs.jpg",
        text: "Amazing product! The attention to detail is fantastic, and the usability is top-notch."
    }
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelectorAll('.prev-btn');
const nextBtn = document.querySelectorAll('.next-btn');
const randomBtn = document.querySelectorAll('.random-btn');

// set starting item
let currentItem = 3;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
})