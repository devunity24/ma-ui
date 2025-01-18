import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileText, Trophy } from 'lucide-react'

export default function MockTestsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Mock Tests</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Practice with our comprehensive mock tests to evaluate your preparation
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Physics Full Test</CardTitle>
            <CardDescription>Complete syllabus coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Duration: 3 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>100 questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="h-4 w-4" />
                <span>Maximum marks: 300</span>
              </div>
              <Button className="w-full">Start Test</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mathematics Chapter Test</CardTitle>
            <CardDescription>Calculus and Coordinate Geometry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Duration: 1.5 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>50 questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="h-4 w-4" />
                <span>Maximum marks: 150</span>
              </div>
              <Button className="w-full">Start Test</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chemistry Practice Test</CardTitle>
            <CardDescription>Organic Chemistry Focus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Duration: 2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4" />
                <span>75 questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="h-4 w-4" />
                <span>Maximum marks: 225</span>
              </div>
              <Button className="w-full">Start Test</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Test Features</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Timed Tests</h3>
            <p className="text-sm text-muted-foreground">
              Simulate real exam conditions with our timed test environment
            </p>
          </div>
          <div className="text-center">
            <FileText className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Detailed Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get comprehensive performance analysis and improvement suggestions
            </p>
          </div>
          <div className="text-center">
            <Trophy className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Performance Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Track your progress over time with detailed statistics
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

