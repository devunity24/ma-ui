"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Video,
  Users,
  HelpCircle,
  Clock,
  FileText,
  Play,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { ExploreCourses } from "@/components/explore-courses";
import { useTheme } from "@/contexts/ThemeContext";
import { SiteHeader } from "@/components/site-header";
import { AboutUs } from "@/components/about-us";

function HomePage() {
  const { theme } = useTheme();

  // const primaryColor = theme === "orange" ? "orange" : "blue"
  // const secondaryColor = theme === "orange" ? "amber" : "sky"

  return (
    <div
      className={`min-h-screen bg-${theme === "orange" ? "orange" : "blue"}-50`}
    >
      <SiteHeader />
      {/* Hero Section */}
      <section
        className={`pt-8 pb-16 px-4 bg-gradient-to-b from-${
          theme === "orange" ? "orange" : "blue"
        }-100 to-${theme === "orange" ? "orange" : "blue"}-50`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-${
            theme === "orange" ? "orange" : "blue"
          }-500 text-white py-2 px-4 text-center mb-12 rounded-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <p className="text-sm font-medium">
            🎉 Special Offer! 50% OFF All Courses - Limited Time Only!
          </p>
        </motion.div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <Badge
                variant="secondary"
                className={`text-sm bg-${
                  theme === "orange" ? "orange" : "blue"
                }-100 text-${theme === "orange" ? "orange" : "blue"}-700`}
              >
                Transform Your Learning Journey
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
                Master Science, Math & AI Through Practice
              </h1>
              <p className="text-xl text-slate-600">
                Interactive learning experience with live classes, hands-on
                projects, and personalized feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`flex-1 sm:flex-none bg-${
                    theme === "orange" ? "orange" : "blue"
                  }-500 text-white hover:bg-${
                    theme === "orange" ? "orange" : "blue"
                  }-600 transform hover:scale-105 transition-all duration-300`}
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex-1 sm:flex-none border-${
                    theme === "orange" ? "orange" : "blue"
                  }-500 text-${
                    theme === "orange" ? "orange" : "blue"
                  }-500 hover:bg-${
                    theme === "orange" ? "orange" : "blue"
                  }-100 transform hover:scale-105 transition-all duration-300`}
                >
                  Explore Courses
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`relative aspect-video rounded-xl overflow-hidden bg-${
                theme === "orange" ? "orange" : "blue"
              }-200 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Students collaborating"
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-${
                  theme === "orange" ? "orange" : "blue"
                }-500/20`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Everything You Need to Succeed
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive learning tools and resources designed to help you
              master complex subjects
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<Video className="h-6 w-6" />}
              title="Interactive Video Lessons"
              description="Learn at your own pace with our detailed video explanations"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Live Online Classes"
              description="Join interactive sessions with expert instructors"
            />
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Practice Questions"
              description="Reinforce your learning with carefully curated problems"
            />
            <FeatureCard
              icon={<HelpCircle className="h-6 w-6" />}
              title="Doubt Resolution"
              description="Get your questions answered by our expert mentors"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Mock Tests"
              description="Assess your preparation with timed practice tests"
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6" />}
              title="Revision Notes"
              description="Quick reference materials for effective revision"
            />
          </motion.div>
        </div>
      </section>

      <ExploreCourses />

      {/* Explore Lessons Section */}
      <section
        className={`py-16 bg-${theme === "orange" ? "orange" : "blue"}-50`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Explore Lessons
          </h2>

          {/* Upcoming Live Classes */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Upcoming Live Classes
            </h3>
            <VideoCarousel
              type="live"
              videos={[
                {
                  title:
                    "Live Class: JEE Advanced Physics - Rotational Dynamics",
                  thumbnail:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
                  date: "30 Jan, 2024",
                  time: "10:00 AM",
                  instructor: "Dr. Rahul Sharma",
                },
                {
                  title: "Live Class: NEET Chemistry - Organic Chemistry",
                  thumbnail:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
                  date: "30 Jan, 2024",
                  time: "2:00 PM",
                  instructor: "Dr. Priya Verma",
                },
                {
                  title: "Live Class: Mathematics - Calculus",
                  thumbnail:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
                  date: "31 Jan, 2024",
                  time: "11:00 AM",
                  instructor: "Prof. Amit Kumar",
                },
                {
                  title: "Live Class: Python Programming - OOP Concepts",
                  thumbnail:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
                  date: "31 Jan, 2024",
                  time: "4:00 PM",
                  instructor: "Mr. Sandeep Singh",
                },
                {
                  title: "Live Class: Biology - Genetics and Evolution",
                  thumbnail:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
                  date: "1 Feb, 2024",
                  time: "10:00 AM",
                  instructor: "Dr. Anjali Gupta",
                },
                {
                  title: "Live Class: Economics - Microeconomics Principles",
                  thumbnail:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
                  date: "1 Feb, 2024",
                  time: "2:00 PM",
                  instructor: "Prof. Rajesh Kumar",
                },
              ]}
            />
          </div>

          {/* Popular Lessons */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Popular Lessons
            </h3>
            <VideoCarousel
              type="recorded"
              videos={[
                {
                  title: "Introduction to Quantum Mechanics",
                  thumbnail:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
                  views: "15K",
                  duration: "45:30",
                },
                {
                  title: "Advanced Calculus: Multivariable Functions",
                  thumbnail:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
                  views: "12K",
                  duration: "52:15",
                },
                {
                  title: "Python for Data Science: Pandas Basics",
                  thumbnail:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
                  views: "18K",
                  duration: "38:45",
                },
                {
                  title: "Chemistry: Chemical Bonding",
                  thumbnail:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
                  views: "10K",
                  duration: "41:20",
                },
                {
                  title: "Biology: Cell Structure and Function",
                  thumbnail:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
                  views: "9K",
                  duration: "47:10",
                },
                {
                  title: "Economics: Supply and Demand",
                  thumbnail:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
                  views: "11K",
                  duration: "39:55",
                },
              ]}
            />
          </div>

          {/* Latest Lessons */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Latest Lessons
            </h3>
            <VideoCarousel
              type="recorded"
              videos={[
                {
                  title: "Machine Learning: Neural Networks Explained",
                  thumbnail:
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                  views: "5K",
                  duration: "60:00",
                },
                {
                  title: "Organic Chemistry: Reaction Mechanisms",
                  thumbnail:
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                  views: "3.5K",
                  duration: "55:20",
                },
                {
                  title: "Statistics for Data Analysis",
                  thumbnail:
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                  views: "7K",
                  duration: "42:30",
                },
                {
                  title: "Physics: Quantum Entanglement",
                  thumbnail:
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                  views: "4K",
                  duration: "47:15",
                },
                {
                  title: "Advanced JavaScript: Promises and Async/Await",
                  thumbnail:
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                  views: "6K",
                  duration: "51:40",
                },
                {
                  title: "Environmental Science: Climate Change Impact",
                  thumbnail:
                    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                  views: "3K",
                  duration: "58:20",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        className={`py-16 bg-${theme === "orange" ? "orange" : "blue"}-100`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center mb-12 text-slate-900">
            Featured in Leading Newspapers
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-12 flex-wrap"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-20 w-20 relative transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src="./toi.png"
                alt="Times of India"
                width={80}
                height={80}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-20 w-20 relative transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src="./indian-express.png"
                alt="Indian Express"
                width={80}
                height={80}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-20 w-20 relative transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src="./nvt.jpg"
                alt="NBT"
                width={80}
                height={80}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            What Our Students Say
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <TestimonialCard
              name="Priya Sharma"
              course="Physics Mastery"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              quote="The interactive sessions and practical demonstrations helped me grasp complex physics concepts easily. I saw a significant improvement in my exam scores!"
            />
            <TestimonialCard
              name="Rahul Verma"
              course="Python Programming"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              quote="As a beginner in coding, I found the Python course extremely beginner-friendly. The hands-on projects boosted my confidence in programming."
            />
            <TestimonialCard
              name="Ananya Patel"
              course="Advanced Mathematics"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              quote="The in-depth coverage of calculus topics and regular problem-solving sessions helped me ace my board exams. Highly recommended!"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-16 bg-${theme === "orange" ? "orange" : "blue"}-50`}
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do the live online classes work?
              </AccordionTrigger>
              <AccordionContent>
                Our live online classes are conducted through a user-friendly
                video conferencing platform. You'll receive a link to join the
                class at the scheduled time. During the session, you can
                interact with the instructor, ask questions, and participate in
                discussions just like in a physical classroom.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I access the course materials after the live sessions?
              </AccordionTrigger>
              <AccordionContent>
                Yes, absolutely! All live sessions are recorded and made
                available in your student dashboard. You'll have access to these
                recordings, along with additional study materials, practice
                questions, and revision notes for the duration of your course
                subscription.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How often are new courses and materials added?
              </AccordionTrigger>
              <AccordionContent>
                We regularly update our course catalog and add new materials. On
                average, we introduce 2-3 new courses every month and update
                existing courses with fresh content and practice materials
                weekly. Our team of expert educators ensures that the content is
                always up-to-date and aligned with the latest academic
                standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a mobile app available for learning on the go?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we have a mobile app available for both iOS and Android
                devices. The app allows you to access all course materials,
                watch video lessons, attempt quizzes, and even join live classes
                from your smartphone or tablet. It's designed to provide a
                seamless learning experience across all devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What kind of support is available if I have questions or face
                issues?
              </AccordionTrigger>
              <AccordionContent>
                We offer comprehensive support to all our students. You can
                reach out to our dedicated support team via email, live chat, or
                phone. For academic queries, we have a team of subject matter
                experts who can assist you. Additionally, we have community
                forums where you can interact with fellow students and
                instructors to discuss topics and clear doubts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <AboutUs />

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600">
                At Manocha Academy, our mission is to teach Science, Math and
                Coding in a simple and practical way. Our educational videos
                explain the school coursework with simple examples that you
                experience every day! Let's learn every day from our everyday
                life!
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Courses</li>
                <li>Live Classes</li>
                <li>Study Materials</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Support</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">
                Connect With Us
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Stay updated with our latest courses and offers
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className={`bg-${theme === "orange" ? "orange" : "blue"}-50`}
                />
                <Button
                  className={`bg-${
                    theme === "orange" ? "orange" : "blue"
                  }-500 text-white hover:bg-${
                    theme === "orange" ? "orange" : "blue"
                  }-600 transform hover:scale-105 transition-all duration-300`}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-slate-600">
            <p>
              &copy; {new Date().getFullYear()} Modern Academy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const { theme } = useTheme();
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className="bg-white">
        <CardContent className="p-6">
          <div
            className={`mb-4 text-${
              theme === "orange" ? "orange" : "blue"
            }-500`}
          >
            {icon}
          </div>
          <h3 className="font-semibold mb-2 text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TestimonialCard({
  name,
  course,
  image,
  quote,
}: {
  name: string;
  course: string;
  image: string;
  quote: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="flex items-center mb-4">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-600">{course}</p>
        </div>
      </div>
      <p className="text-slate-600 italic">"{quote}"</p>
    </motion.div>
  );
}

function VideoCarousel({
  type,
  videos,
}: {
  type: "live" | "recorded";
  videos: any[];
}) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const videosPerPage = 4;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videos
            .slice(
              currentPage * videosPerPage,
              (currentPage + 1) * videosPerPage
            )
            .map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                thumbnail={video.thumbnail}
                views={video.views}
                duration={video.duration}
                date={video.date}
                time={video.time}
                instructor={video.instructor}
                type={type}
              />
            ))}
        </motion.div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function VideoCard({
  title,
  thumbnail,
  views,
  duration,
  date,
  time,
  instructor,
  type,
}: {
  title: string;
  thumbnail: string;
  views?: string;
  duration?: string;
  date?: string;
  time?: string;
  instructor?: string;
  type: "live" | "recorded";
}) {
  const { theme } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white" />
        </div>
        {type === "live" && (
          <Badge
            variant="destructive"
            className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1"
          >
            LIVE
          </Badge>
        )}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        )}
      </div>
      <h3
        className={`font-semibold mb-1 group-hover:text-${
          theme === "orange" ? "orange" : "blue"
        }-500 transition-colors text-slate-900 line-clamp-2`}
      >
        {title}
      </h3>
      {type === "recorded" && views && (
        <p className="text-sm text-slate-600">{views} views</p>
      )}
      {type === "live" && (
        <div className="space-y-1">
          {instructor && (
            <p className="text-sm font-medium text-slate-700">{instructor}</p>
          )}
          {date && (
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          )}
          {time && (
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Home() {
  return <HomePage />;
}
