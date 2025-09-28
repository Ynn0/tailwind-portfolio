import { ArrowRight, ExternalLink, Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MR Decals & Print Spot",
    description: "Handling customer engagement, Facebook ads, Postings and Reels.",
    image: "/projects/project1.png",
    tags: ["Social Media Management", "General Manager"],
    demoUrl: "https://www.facebook.com/people/MR-Decals-Print-Spot/61577202571836/",
  },
  {
    id: 2,
    title: "At-Home Spa Social Media",
    description: "Handling customer engagement, Facebook ads, Postings and Reels.",
    image: "/projects/project2.png",
    tags: ["Social Media Management", "General Manager"],
    demoUrl: "https://www.facebook.com/people/MR-Decals-Print-Spot/61577202571836/",
  },
  {
    id: 3,
    title: "Dreirdre Orr",
    description:
      "Customer Engagement, Handling Marketing Strategies.",
    image: "/projects/project3.png",
    tags: ["Social Media Management", "Virtual Assistant",],
    demoUrl: "https://www.facebook.com/DeirdreOrrConsulting",
    
  },
  {
    id: 4,
    title: "Philippine National Police Plantilla Website",
    description:
      "Full-featured Plantila Positions Tracking",
    image: "/projects/project4.jpg",
    tags: ["Web Development", "Laravel", "PHP", "MySQL"],
    demoUrl: "#",

  },
  {
    id: 5,
    title: "At-Home Spa Website",
    description:
      "Full-featured Website for Spa Business, Contact and Reservation Systems",
    image: "/projects/project5.png",
    tags: ["Web Development", "Laravel", "PHP", "MySQL"],
    demoUrl: "https://www.facebook.com/AtHomeServiceSpa",
    
  },
  {
    id: 6,
    title: "Fan-based Creator Accounts Manager",
    description:
      "Campaigns for Only Fans Creator to promote engagement with customers",
    image: "/projects/project6.png",
    tags: ["People Management", "Administration", ],
    demoUrl: "https://www.facebook.com/AtHomeServiceSpa",
    
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and best experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href=""
          >
            Check Resume <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};