
const blogs = [
    {
      title: "The Future of Web Development",
      summary: "Explore the trends and technologies shaping the web development industry in 2025.",
      content: "Web development is evolving at a rapid pace. From AI-powered tools to advanced frameworks, the industry is embracing innovations that enhance user experiences and developer productivity..."
    },
    {
      title: "10 Tips for Writing Clean Code",
      summary: "Discover actionable tips to improve your coding practices and write maintainable code.",
      content: "Clean code is a vital skill for developers. By following best practices such as using meaningful variable names, modularizing your code, and adding comments where necessary..."
    },
    {
      title: "Introduction to Responsive Design",
      summary: "Learn how to make your websites look great on any device using responsive design techniques.",
      content: "Responsive design ensures that your website adapts to different screen sizes and devices. This blog will guide you through the fundamentals, including flexible grids, media queries, and scalable images..."
    },
    {
      title: "Understanding JavaScript Closures",
      summary: "A deep dive into closures in JavaScript and how they work under the hood.",
      content: "Closures are a powerful feature in JavaScript, enabling functions to retain access to their lexical scope. This blog explains closures with practical examples..."
    },
    {
      title: "CSS Grid vs. Flexbox",
      summary: "Compare CSS Grid and Flexbox to understand which layout system works best for your project.",
      content: "CSS Grid and Flexbox are two popular layout systems in modern web design. While Flexbox is ideal for one-dimensional layouts, Grid excels at handling two-dimensional designs..."
    },
    {
      title: "Top 5 Frameworks for Front-End Development",
      summary: "Discover the top frameworks dominating the front-end development space in 2025.",
      content: "Front-end frameworks streamline development workflows. This blog explores the strengths of React, Angular, Vue, Svelte, and SolidJS..."
    },
    {
      title: "Building Accessible Websites",
      summary: "Learn how to make your websites accessible to users with disabilities.",
      content: "Accessibility is a crucial aspect of web development. This blog covers ARIA roles, semantic HTML, and testing tools for ensuring inclusivity..."
    },
    {
      title: "Demystifying Asynchronous JavaScript",
      summary: "Understand callbacks, promises, and async/await in JavaScript.",
      content: "Asynchronous programming in JavaScript allows for non-blocking operations. This blog simplifies the concepts of callbacks, promises, and async/await with code examples..."
    },
    {
      title: "SEO Basics for Beginners",
      summary: "An introduction to search engine optimization and how it can improve website visibility.",
      content: "SEO helps websites rank higher in search engines. This blog explains keyword research, on-page SEO, and link-building strategies..."
    },
    {
      title: "Version Control with Git",
      summary: "Learn the fundamentals of Git and how to manage code efficiently.",
      content: "Git is a version control system that tracks code changes. This blog covers essential commands, branching, and resolving merge conflicts..."
    },
    {
      title: "Building a Blog with HTML and CSS",
      summary: "Create a basic blog using just HTML and CSS.",
      content: "In this blog, we’ll guide you through creating a simple, static blog page. You'll learn about structuring HTML and styling with CSS..."
    },
    {
      title: "Exploring the MERN Stack",
      summary: "An overview of the MERN stack and how it enables full-stack development.",
      content: "The MERN stack comprises MongoDB, Express, React, and Node.js. This blog explains how these technologies work together for full-stack applications..."
    },
    {
      title: "Debugging JavaScript Efficiently",
      summary: "Tips and tools for debugging JavaScript code.",
      content: "Debugging is an essential skill for developers. This blog introduces browser developer tools, console methods, and debugging techniques..."
    },
    {
      title: "Creating Animations with CSS",
      summary: "A beginner's guide to adding animations to your website using CSS.",
      content: "CSS animations bring websites to life. This blog explores keyframe animations, transitions, and animation-timing functions..."
    },
    {
      title: "Understanding RESTful APIs",
      summary: "Learn the principles of REST and how to interact with RESTful APIs.",
      content: "REST is an architectural style for designing networked applications. This blog explains HTTP methods, endpoints, and best practices for working with REST APIs..."
    },
    {
      title: "Dark Mode Design: Best Practices",
      summary: "How to implement and design dark mode for your website.",
      content: "Dark mode is a popular feature in modern UI/UX design. This blog discusses design considerations, CSS custom properties, and system preferences..."
    },
    {
      title: "Introduction to Progressive Web Apps",
      summary: "Learn what PWAs are and how they enhance web applications.",
      content: "Progressive Web Apps combine the best of web and mobile apps. This blog covers their benefits, service workers, and how to make your app installable..."
    },
    {
      title: "Web Development Career Roadmap",
      summary: "A step-by-step guide to starting a career in web development.",
      content: "Breaking into web development can be daunting. This blog outlines essential skills, resources, and tips for landing your first job..."
    },
    {
      title: "Using SVGs in Web Design",
      summary: "Discover how SVGs can enhance your web designs with scalable, lightweight graphics.",
      content: "SVGs are resolution-independent graphics that are perfect for the web. This blog covers how to create, optimize, and animate SVGs..."
    },
    {
      title: "Introduction to Tailwind CSS",
      summary: "Learn how to use Tailwind CSS for building modern, responsive websites.",
      content: "Tailwind CSS is a utility-first CSS framework. This blog explains how it simplifies styling and speeds up development..."
    }
  ];


const latestBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

const section = document.querySelector(".blog-list");


latestBlogs.forEach((blog,index)=>{

    const article = document.createElement('article');
    article.className = 'blog-card';
    //heading
    const heading = document.createElement('h2');
    heading.className = "blog-title";
    heading.innerHTML = `${blog.title}`;
    //summary
    const summary = document.createElement('p');
    summary.className = 'blog-summary';
    summary.innerHTML = `${blog.summary}`;
    //read more 
    const read = document.createElement('a');
    read.className = 'read-more';
    read.innerText = 'Read More';
    read.href = `blog.html`;

    read.addEventListener('click',(e)=>{

        e.preventDefault();
        //storing the blog index in local storage
        localStorage.setItem('blogIndex',index);
        //Navigating to blog.html
        window.location.href = read.href;
    })

    article.appendChild(heading);
    article.appendChild(summary);
    article.appendChild(read);
    section.appendChild(article);
    
})


