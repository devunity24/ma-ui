import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Video } from 'lucide-react'

export default function LiveClassesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Live Online Classes</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive live sessions with expert instructors to help you learn better
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Physics Live Session</CardTitle>
            <CardDescription>Wave Optics & Ray Optics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Tomorrow, 10:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Duration: 2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>25 students enrolled</span>
              </div>
              <Button className="w-full">Join Class</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mathematics Live Session</CardTitle>
            <CardDescription>Calculus: Integration Techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Today, 2:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Duration: 1.5 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>30 students enrolled</span>
              </div>
              <Button className="w-full">Join Class</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Python Programming</CardTitle>
            <CardDescription>Object-Oriented Programming</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Today, 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Duration: 2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>20 students enrolled</span>
              </div>
              <Button className="w-full">Join Class</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Why Choose Our Live Classes?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <Video className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold mb-2">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Engage directly with instructors, ask questions, and participate in discussions
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold mb-2">Small Batch Size</h3>
              <p className="text-sm text-muted-foreground">
                Limited students per batch ensures personal attention and better learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

