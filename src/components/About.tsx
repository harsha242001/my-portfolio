
const About = () => {
  const milestones = [
    {
      year: "2019",
      title: "Started as Junior QA Engineer",
      description: "Began journey in software testing at TechCorp, learning manual testing fundamentals"
    },
    {
      year: "2020",
      title: "Automation Framework Developer",
      description: "Led development of company's first Selenium-based automation framework"
    },
    {
      year: "2022",
      title: "Senior Test Automation Engineer",
      description: "Promoted to senior role, mentoring junior developers and architecting CI/CD integration"
    },
    {
      year: "2024",
      title: "Automation Architect",
      description: "Currently designing scalable test automation solutions for enterprise applications"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "Committed to delivering bug-free software through comprehensive testing"
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new tools and methodologies to improve testing efficiency"
    },
    {
      title: "Team Collaboration",
      description: "Believe in sharing knowledge and working together to achieve common goals"
    },
    {
      title: "Innovation",
      description: "Passionate about finding creative solutions to complex testing challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate test automation engineer with over 5 years of experience in creating 
            robust testing frameworks that help teams ship quality software faster. My expertise lies 
            in building scalable automation solutions that integrate seamlessly with development workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">My Journey</h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{milestone.title}</h4>
                    <p className="text-slate-300 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Core Values</h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{value.title}</h4>
                  <p className="text-slate-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
