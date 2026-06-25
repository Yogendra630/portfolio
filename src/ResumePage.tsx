import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Download, Award, Briefcase, Code, GraduationCap, GitBranch, Link2 } from 'lucide-react'

export default function ResumePage() {
  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:p-0">
      {/* Download Button - Hidden in Print */}
      <motion.div 
        className="max-w-4xl mx-auto mb-6 print:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
        >
          <Download className="w-5 h-5" />
          <span>Save as PDF / Print</span>
        </button>
      </motion.div>

      {/* Resume Content */}
      <motion.div 
        className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none print:max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white p-8 print:p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Yogendra Maurya</h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <a href="tel:+916307874173" className="flex items-center gap-2 hover:opacity-80 print:opacity-100">
              <Phone className="w-4 h-4" />
              <span>+91-6307874173</span>
            </a>
            <a href="mailto:yogendramaurya954@gmail.com" className="flex items-center gap-2 hover:opacity-80 print:opacity-100">
              <Mail className="w-4 h-4" />
              <span>yogendramaurya954@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Greater Noida, UP, India</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 text-sm mb-6">
            <a href="https://linkedin.com/in/yogendra-maurya-04a510288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 print:opacity-100">
              <Link2 className="w-4 h-4" />
              <span>linkedin.com/in/yogendra-maurya-04a510288</span>
            </a>
            <a href="https://github.com/Yogendra630" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 print:opacity-100">
              <GitBranch className="w-4 h-4" />
              <span>github.com/Yogendra630</span>
            </a>
          </div>
          
          <p className="text-center text-lg font-medium opacity-90">
            Target Role: Software Engineer | Frontend Developer | SDE
          </p>
        </div>

        {/* Content */}
        <div className="p-8 print:p-6">
          {/* Summary */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-800">SUMMARY</h2>
            </div>
            <div className="border-t-2 border-violet-200 pt-3">
              <p className="text-gray-700 leading-relaxed">
                Motivated Computer Science undergraduate seeking an SDE / Frontend Developer role where I can apply my 
                problem-solving skills, contribute to real-world projects, and continuously grow as an engineer.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-800">EXPERIENCE</h2>
            </div>
            <div className="border-t-2 border-violet-200 pt-3">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Python Developer Intern</h3>
                    <p className="text-violet-600 font-medium">CodSoft, India (Remote)</p>
                  </div>
                  <span className="text-gray-600 text-sm">Jan 2024 – Mar 2024</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Built 3 ML classification and prediction models achieving up to 92% accuracy on 10,000+ record datasets, enabling data-driven decision-making for real-world use cases.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Improved model prediction accuracy by 15% through feature engineering, hyperparameter tuning, and cross-validation — directly reducing erroneous outputs in production pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Delivered PEP8-compliant, well-documented code on schedule; visualized model performance with Matplotlib dashboards adopted for stakeholder reporting.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-800">PROJECTS</h2>
            </div>
            <div className="border-t-2 border-violet-200 pt-3">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  GitHub Profile Analyzer
                  <span className="font-normal text-gray-600 ml-2">| React, Vite, Chart.js, Framer Motion, GitHub REST API, CSS</span>
                </h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Engineered a responsive SPA consuming the GitHub REST API to deliver instant profile analytics — solving scattered developer data discovery — with search history and profile bookmarks.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Built interactive Chart.js dashboards (language distribution + star trends) with Framer Motion animations, dark/light mode toggle, and lazy-loaded repo list with language filters.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Deployed to Netlify via CI/CD pipeline (npm run build); achieved mobile-first responsive layout with Vite-optimized bundling for fast load performance.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Stock Price Prediction
                  <span className="font-normal text-gray-600 ml-2">| Python, Scikit-learn, Pandas, NumPy, Matplotlib</span>
                </h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>Trained Linear Regression, Random Forest, and SVR models on 5+ years of market data achieving 89% accuracy; applied RSI and lag-based feature engineering to boost signal quality.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-800">TECHNICAL SKILLS</h2>
            </div>
            <div className="border-t-2 border-violet-200 pt-3">
              <div className="grid gap-3">
                <div className="flex gap-4">
                  <span className="font-bold text-gray-800 w-32 shrink-0">Languages:</span>
                  <span className="text-gray-700">Java, Python, JavaScript</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-gray-800 w-32 shrink-0">CS Fundamentals:</span>
                  <span className="text-gray-700">Data Structures & Algorithms, OOP, DBMS, Operating Systems</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-gray-800 w-32 shrink-0">Web & Frontend:</span>
                  <span className="text-gray-700">React, HTML5, CSS, Chart.js, Vite</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-gray-800 w-32 shrink-0">ML & Data Science:</span>
                  <span className="text-gray-700">Scikit-learn, Pandas, NumPy, Matplotlib, Linear Regression, Classification</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-gray-800 w-32 shrink-0">Databases:</span>
                  <span className="text-gray-700">MySQL, MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-gray-800 w-32 shrink-0">Tools & Platforms:</span>
                  <span className="text-gray-700">Git, GitHub, VS Code, Netlify, AWS, Docker</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-800">EDUCATION</h2>
            </div>
            <div className="border-t-2 border-violet-200 pt-3">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Noida Institute of Engineering and Technology (NIET)</h3>
                    <p className="text-gray-700">Bachelor of Technology (B.Tech.) in Computer Science</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Greater Noida, UP</p>
                    <p className="text-violet-600 font-medium">Expected: May 2027</p>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Ma Durga Ji Senior Secondary Vidyalaya</h3>
                    <p className="text-gray-700">Higher Secondary Certificate (Class XII) — Science <span className="text-violet-600 font-medium">84.25%</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Jaunpur, UP</p>
                    <p className="text-gray-600">2021</p>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Ma Durga Ji Senior Secondary Vidyalaya</h3>
                    <p className="text-gray-700">Secondary School Certificate (Class X) <span className="text-violet-600 font-medium">83.24%</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Jaunpur, UP</p>
                    <p className="text-gray-600">2019</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements & Certifications */}
          <section className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-violet-600" />
              <h2 className="text-2xl font-bold text-gray-800">ACHIEVEMENTS & CERTIFICATIONS</h2>
            </div>
            <div className="border-t-2 border-violet-200 pt-3">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <Award className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                  <span>Infosys Springboard Certified — Data Structures & Algorithms using Java (2024)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Award className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                  <span>Infosys Springboard Certified — Object-Oriented Programming (OOP) using Python (2024)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Award className="w-5 h-5 text-violet-600 mt-0.5 shrink-0" />
                  <span>Academic record: 84.25% in Class XII Science; 83.24% in Class X</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-4 text-center text-sm text-gray-600 print:hidden">
          <p>© 2024 Yogendra Maurya | Computer Science Engineering Student</p>
        </div>
      </motion.div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:max-w-none {
            max-width: none !important;
          }
          .print\\:opacity-100 {
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  )
}
