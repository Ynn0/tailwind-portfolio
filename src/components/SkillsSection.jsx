import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Social Media & Content Creation
  { name: "Social Media Branding, Identity, and Strategy", level: 90, category: "Social Media & Content Creation" },
  { name: "Graphics and Digital Content", level: 90, category: "Social Media & Content Creation" },
  { name: "Engaging Newsletters Targetting Audiences", level: 90, category: "Social Media & Content Creation" },
  { name: "Audience Engagement, Growth, and Community Management", level: 85, category: "Social Media & Content Creation" },
  { name: "Video Editting for Reels", level: 90, category: "Social Media & Content Creation" },
  { name: "AI Videos and Photo Creations", level: 85, category: "Social Media & Content Creation" },

  // Administrative & Executive Supportend
  { name: "Handling a Team", level: 95, category: "Administrative & Executive Support" },
  { name: "Spreadsheets and CRM systems", level: 85, category: "Administrative & Executive Support" },
  { name: "Calendar Coordination, Email Management, and Appointment Scheduling", level: 80, category: "Administrative & Executive Support" },
  { name: "Preparing Business Correspondence, Reports, and News Letters", level: 80, category: "Administrative & Executive Support" },
  { name: "Supervising Team Members and Overseeing Operations on Behalf of Executives.", level: 90, category: "Administrative & Executive Support" },
  { name: "Spreadsheets and CRM Systems to track and monitor lead activities", level: 85, category: "Administrative & Executive Support" },

  // Administrative & Executive Supportend
  { name: "HTML/CSS", level: 90, category: "Web Development" },
  { name: "Laravel", level: 85, category: "Web Development" },
  { name: "C", level: 85, category: "Web Development" },
  { name: "C++", level: 80, category: "Web Development" },
  { name: "React", level: 75, category: "Web Development" },
  { name: "Next.js", level: 75, category: "Web Development" },
  { name: "Express", level: 80, category: "Web Development" },
  { name: "MongoDB", level: 80, category: "Web Development" },
  { name: "MySQL", level: 85, category: "Web Development" },

  // tools Used
  { name: "Git/GitHub", level: 90, category: "tools Used" },
  { name: "Docker", level: 70, category: "tools Used" },
  { name: "Figma", level: 85, category: "tools Used" },
  { name: "VS Code", level: 95, category: "tools Used" },
  { name: "Infloww", level: 95, category: "tools Used" },
  { name: "Monday", level: 95, category: "tools Used" },
  { name: "Photoshop", level: 95, category: "tools Used" },
  { name: "Hubstaff", level: 95, category: "tools Used" },
  { name: "Calendly", level: 95, category: "tools Used" },
  { name: "Office 365", level: 95, category: "tools Used" },
  { name: "Pumble", level: 95, category: "tools Used" },
  { name: "Meta", level: 90, category: "tools Used" },
  { name: "FilmoraAI", level: 80, category: "tools Used" },
  { name: "Capcut", level: 80, category: "tools Used" },
  { name: "Slack", level: 95, category: "tools Used" },


];


const categories = ["all", "Social Media & Content Creation", "Administrative & Executive Support", "Web Development", "tools Used", ];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};