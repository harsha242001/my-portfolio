
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Selenium WebDriver", level: 95 },
    { name: "TestNG/JUnit", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "API Testing", level: 88 },
    { name: "CI/CD (Jenkins)", level: 82 },
    { name: "Docker", level: 70 }
  ];

  const tools = [
    "IntelliJ IDEA", "Eclipse", "Git", "Maven", "Gradle", 
    "Postman", "JIRA", "Confluence", "TestRail", "Allure"
  ];

  const services = [
    {
      title: "Automation Framework Design",
      description: "Custom frameworks built for scalability and maintainability"
    },
    {
      title: "End-to-End Test Automation",
      description: "Complete automation solutions from UI to API testing"
    },
    {
      title: "Code Review & Mentorship",
      description: "Guidance on best practices and code quality improvement"
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration of tests into deployment pipelines"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My technical expertise and the services I provide to help teams achieve testing excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-slate-800 p-3 rounded-lg text-center text-slate-300 border border-slate-700">
                  {tool}
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Leadership", "Problem Solving", "Team Collaboration", "Communication", "Mentoring"].map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Services I Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{service.title}</h4>
                <p className="text-slate-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
