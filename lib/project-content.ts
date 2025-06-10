export const projectContent: Record<string, string> = {
  "ecommerce-platform": `
    <h2>Project Overview</h2>
    <p>This e-commerce platform was built to provide a complete online shopping experience with modern web technologies. The project demonstrates full-stack development skills and integration with third-party services.</p>
    
    <h3>Key Features</h3>
    <ul>
      <li><strong>User Authentication:</strong> Secure login and registration system</li>
      <li><strong>Product Catalog:</strong> Dynamic product listings with search and filtering</li>
      <li><strong>Shopping Cart:</strong> Persistent cart functionality across sessions</li>
      <li><strong>Payment Processing:</strong> Stripe integration for secure payments</li>
      <li><strong>Order Management:</strong> Complete order tracking and history</li>
      <li><strong>Admin Dashboard:</strong> Product and order management interface</li>
    </ul>
    
    <h3>Technical Implementation</h3>
    <p>The frontend was built using React with a focus on performance and user experience. The backend API was developed with Node.js and Express, providing RESTful endpoints for all functionality.</p>
    
    <h4>Database Design</h4>
    <p>MongoDB was chosen for its flexibility in handling product variations and user data. The schema was designed to optimize for both read and write operations.</p>
    
    <h4>Payment Integration</h4>
    <p>Stripe was integrated to handle all payment processing, ensuring PCI compliance and secure transactions. The implementation includes support for multiple payment methods and currencies.</p>
    
    <h3>Challenges & Solutions</h3>
    <p>One of the main challenges was implementing real-time inventory management. This was solved by implementing a reservation system that temporarily holds items during the checkout process.</p>
    
    <h3>Results</h3>
    <p>The platform successfully handles thousands of transactions monthly with 99.9% uptime. The responsive design ensures a seamless experience across all devices.</p>
  `,

  "task-management-app": `
    <h2>Project Overview</h2>
    <p>A collaborative task management application designed to help teams organize, track, and complete projects efficiently. Built with modern web technologies and real-time capabilities.</p>
    
    <h3>Key Features</h3>
    <ul>
      <li><strong>Real-time Collaboration:</strong> Live updates using Socket.io</li>
      <li><strong>Project Organization:</strong> Kanban boards and list views</li>
      <li><strong>Team Management:</strong> User roles and permissions</li>
      <li><strong>Task Tracking:</strong> Due dates, priorities, and progress tracking</li>
      <li><strong>File Attachments:</strong> Document sharing and collaboration</li>
      <li><strong>Notifications:</strong> Email and in-app notifications</li>
    </ul>
    
    <h3>Technical Architecture</h3>
    <p>Built with Next.js for server-side rendering and optimal performance. TypeScript was used throughout the project to ensure type safety and better developer experience.</p>
    
    <h4>Database & ORM</h4>
    <p>PostgreSQL with Prisma ORM was chosen for robust data relationships and type-safe database operations. The schema supports complex project hierarchies and user permissions.</p>
    
    <h4>Real-time Features</h4>
    <p>Socket.io enables real-time updates across all connected clients. Changes to tasks, comments, and project status are instantly reflected for all team members.</p>
    
    <h3>User Experience</h3>
    <p>The interface was designed with productivity in mind, featuring drag-and-drop functionality, keyboard shortcuts, and customizable views to match different workflow preferences.</p>
    
    <h3>Performance Optimization</h3>
    <p>Implemented caching strategies and optimistic updates to ensure smooth user experience even with large datasets. The application supports teams of up to 100 members per project.</p>
  `,

  "portfolio-website": `
    <h2>Project Overview</h2>
    <p>A modern, responsive portfolio website showcasing web development skills and projects. Built with performance and accessibility in mind.</p>
    
    <h3>Design Philosophy</h3>
    <p>The design follows modern web standards with a focus on clean aesthetics, smooth animations, and excellent user experience across all devices.</p>
    
    <h3>Technical Features</h3>
    <ul>
      <li><strong>Static Site Generation:</strong> Next.js for optimal performance</li>
      <li><strong>Responsive Design:</strong> Mobile-first approach with Tailwind CSS</li>
      <li><strong>Smooth Animations:</strong> Framer Motion for engaging interactions</li>
      <li><strong>Content Management:</strong> MDX for blog posts and project details</li>
      <li><strong>SEO Optimized:</strong> Meta tags, structured data, and sitemap</li>
      <li><strong>Performance:</strong> 100/100 Lighthouse scores</li>
    </ul>
    
    <h3>Development Process</h3>
    <p>The project started with wireframing and design in Figma, followed by component-based development. Each section was built as a reusable component with proper TypeScript interfaces.</p>
    
    <h4>Content Strategy</h4>
    <p>MDX was chosen for content management, allowing for rich formatting while maintaining the benefits of static generation. This approach makes it easy to add new projects and blog posts.</p>
    
    <h3>Performance Optimization</h3>
    <p>Images are optimized using Next.js Image component, and the site uses code splitting to ensure fast loading times. The entire site is statically generated for maximum performance.</p>
    
    <h3>Accessibility</h3>
    <p>Built with accessibility in mind, featuring proper semantic HTML, ARIA labels, and keyboard navigation support. The site meets WCAG 2.1 AA standards.</p>
  `,
}
