'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react'

export function ExploreCourses() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400" />
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="/placeholder.svg"
              alt="Christmas Sale"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Explore Courses</h2>
          <motion.div
            initial={{ rotate: 10, scale: 0.9 }}
            animate={{ rotate: -10, scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src="/placeholder.svg"
              alt="Christmas Sale"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-white mb-12">
            Big Discounts on Full Courses!! 100% Money Back Guarantee Offer!!
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Class 8, 9 & 10 Package",
              "Class 9 & 10 Package",
              "Class 11 Courses"
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Link
                  href={`/courses/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block relative p-4 bg-white rounded-xl text-lg font-semibold text-slate-900 hover:text-white group-hover:bg-transparent transition-colors"
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Class 10 Courses",
              "Class 9 Courses",
              "Class 8 Courses",
              "AI & Computer Courses"
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Link
                  href={`/courses/${text.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block relative p-4 bg-white rounded-xl text-lg font-semibold text-slate-900 hover:text-white group-hover:bg-transparent transition-colors"
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { icon: Phone, text: "+91 98743 47480", href: "tel:+919874347480" },
            { icon: Mail, text: "contact@manochacademy.com", href: "mailto:contact@manochacademy.com" },
            { icon: MessageCircle, text: "Whatsapp Us", href: "https://wa.me/919874347480" },
            { icon: Calendar, text: "Live Class Timetable", href: "/timetable" }
          ].map(({ icon: Icon, text, href }, i) => (
            <motion.div
              key={text}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={href}
                className="flex items-center justify-center gap-2 text-white hover:text-orange-100 transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{text}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

