// Course Data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        instructor: "John Doe",
        category: "programming",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "UI/UX Design Principles",
        instructor: "Jane Smith",
        category: "design",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        instructor: "Mike Johnson",
        category: "business",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Python for Data Science",
        instructor: "Sarah Williams",
        category: "programming",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Advanced Logo Design",
        instructor: "Chris Brown",
        category: "design",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Entrepreneurship 101",
        instructor: "Emily Davis",
        category: "business",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&q=80"
    }
];

// DOM Elements
const courseList = document.getElementById('courseList');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Render Courses
function renderCourses(coursesToRender) {
    courseList.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        courseList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted);">No courses found.</p>';
        return;
    }

    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        
        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">by ${course.instructor}</p>
                <div class="course-footer">
                    <span class="course-price">${course.price}</span>
                    <button class="btn primary-btn" style="padding: 6px 12px; font-size: 14px;">Enroll</button>
                </div>
            </div>
        `;
        
        courseList.appendChild(courseCard);
    });
}

// Initial Render
renderCourses(courses);

// Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            renderCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.category === filterValue);
            renderCourses(filteredCourses);
        }
    });
});

// Searching
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const searchedCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) || 
        course.instructor.toLowerCase().includes(searchTerm)
    );
    
    renderCourses(searchedCourses);
    
    // Reset filters when searching
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
});
