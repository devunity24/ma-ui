"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MessageCircle, Calendar, ArrowRight, GraduationCap, Book, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/contexts/ThemeContext"

const coursePackages = [
  {
    title: "Class 8, 9 & 10 Package",
    icon: GraduationCap,
    description: "Comprehensive package covering all major subjects",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Class 9 & 10 Package",
    icon: Book,
    description: "Focused preparation for board exams",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Class 11 Courses",
    icon: Code,
    description: "Advanced concepts with practical applications",
    color: "from-orange-500 to-amber-500",
  },
]

const individualCourses = [
  {
    title: "Class 10 Courses",
    students: "2.5k+",
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    title: "Class 9 Courses",
    students: "2k+",
    subjects: ["Science", "Mathematics", "English"],
  },
  {
    title: "Class 8 Courses",
    students: "1.8k+",
    subjects: ["Basic Science", "Mathematics", "Languages"],
  },
  {
    title: "AI & Computer Courses",
    students: "1k+",
    subjects: ["Python", "Machine Learning", "Web Dev"],
  },
]

const contactInfo = [
  { icon: Phone, text: "+91 98743 47480", href: "tel:+919874347480" },
  { icon: Mail, text: "contact@manochacademy.com", href: "mailto:contact@manochacademy.com" },
  { icon: MessageCircle, text: "Whatsapp Us", href: "https://wa.me/919874347480" },
  { icon: Calendar, text: "Live Class Timetable", href: "/timetable" },
]

export function ExploreCourses() {
  const { theme } = useTheme()
  return (
    <section
      className={`py-24 relative overflow-hidden bg-gradient-to-b from-${theme === "orange" ? "orange" : "blue"}-50 to-white`}
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className={`mb-4 bg-${theme === "orange" ? "orange" : "blue"}-100 text-${theme === "orange" ? "orange" : "blue"}-700 hover:bg-${theme === "orange" ? "orange" : "blue"}-100`}
            >
              Christmas Special Offer
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Explore Our Courses</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Big Discounts on Full Courses with 100% Money Back Guarantee!
            </p>
          </motion.div>
        </div>

        {/* Featured Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {coursePackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/courses/${pkg.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div whileHover={{ scale: 1.02 }} className="relative group rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-90`} />
                  <div className="relative p-8">
                    <pkg.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{pkg.title}</h3>
                    <p className="text-white/90 mb-4">{pkg.description}</p>
                    <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Individual Courses */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {individualCourses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`group p-6 rounded-2xl bg-white border border-${theme === "orange" ? "orange" : "blue"}-100 hover:border-${theme === "orange" ? "orange" : "blue"}-200 hover:shadow-lg transition-all duration-300`}
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{course.title}</h3>
                  <p className={`text-sm text-${theme === "orange" ? "orange" : "blue"}-600 mb-4`}>
                    {course.students} students
                  </p>
                  <div className="space-y-2">
                    {course.subjects.map((subject, i) => (
                      <div
                        key={subject}
                        className={`text-sm text-${theme === "orange" ? "orange" : "blue"}-600 flex items-center`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${theme === "orange" ? "orange" : "blue"}-400 mr-2`}
                        />
                        {subject}
                      </div>
                    ))}
                  </div>
                  <div
                    className={`mt-4 flex items-center text-${theme === "orange" ? "orange" : "blue"}-600 group-hover:translate-x-2 transition-transform`}
                  >
                    <span className="text-sm font-medium">View details</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {contactInfo.map(({ icon: Icon, text, href }, i) => (
            <motion.div key={text} whileHover={{ scale: 1.02 }} className="group">
              <Link
                href={href}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl bg-white border border-${theme === "orange" ? "orange" : "blue"}-100 hover:border-${theme === "orange" ? "orange" : "blue"}-200 hover:shadow-lg transition-all duration-300`}
              >
                <Icon className={`h-5 w-5 text-${theme === "orange" ? "orange" : "blue"}-500`} />
                <span
                  className={`font-medium text-slate-900 group-hover:text-${theme === "orange" ? "orange" : "blue"}-600 transition-colors`}
                >
                  {text}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

