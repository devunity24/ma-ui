'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-white shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="grid gap-4 py-4">
                <Link href="/courses" className="text-sm font-medium">
                  Courses
                </Link>
                <Link href="/study-materials" className="text-sm font-medium">
                  Study Materials
                </Link>
                <Link href="/live-classes" className="text-sm font-medium">
                  Live Classes
                </Link>
                <Link href="/mock-tests" className="text-sm font-medium">
                  Mock Tests
                </Link>
                <Link href="/about" className="text-sm font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm font-medium">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Academy Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-bold text-xl hidden md:inline text-slate-900">Modern Academy</span>
          </Link>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-slate-700 hover:text-orange-500 transition-colors">Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link href="/courses/science" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Science</div>
                    <div className="text-sm text-slate-600">Physics, Chemistry, Biology</div>
                  </Link>
                  <Link href="/courses/mathematics" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Mathematics</div>
                    <div className="text-sm text-slate-600">Algebra, Calculus, Geometry</div>
                  </Link>
                  <Link href="/courses/coding" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Coding</div>
                    <div className="text-sm text-slate-600">Python, Java, Web Development</div>
                  </Link>
                  <Link href="/courses/ai" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Artificial Intelligence</div>
                    <div className="text-sm text-slate-600">Machine Learning, Deep Learning</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-slate-700 hover:text-orange-500 transition-colors">Study Materials</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link href="/study-materials/notes" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Revision Notes</div>
                    <div className="text-sm text-slate-600">Quick reference materials</div>
                  </Link>
                  <Link href="/study-materials/worksheets" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Practice Worksheets</div>
                    <div className="text-sm text-slate-600">Topic-wise practice problems</div>
                  </Link>
                  <Link href="/study-materials/solutions" className="block space-y-1 rounded-md p-3 hover:bg-orange-50">
                    <div className="font-medium text-slate-900">Solved Examples</div>
                    <div className="text-sm text-slate-600">Step-by-step solutions</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/live-classes" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 focus:text-orange-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-orange-50 data-[state=open]:bg-orange-50 text-slate-700">
                  Live Classes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/mock-tests" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 focus:text-orange-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-orange-50 data-[state=open]:bg-orange-50 text-slate-700">
                  Mock Tests
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Search courses..."
                className="pl-8 w-[200px] bg-orange-50 border-orange-200 focus:border-orange-500"
              />
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="ghost" className="text-orange-500 hover:bg-orange-50 hover:text-orange-600">Sign In</Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="bg-orange-500 text-white hover:bg-orange-600">Get Started</Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

