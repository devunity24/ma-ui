import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive courses designed to help you master Science, Mathematics, Coding, and AI
        </p>
      </div>

      <Tabs defaultValue="science" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="science">Science</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
          <TabsTrigger value="coding">Coding</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
        </TabsList>
        <TabsContent value="science">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <CourseCard
              title="Physics Mastery"
              description="Master fundamental concepts of Physics through interactive lessons"
              topics={["Mechanics", "Thermodynamics", "Electromagnetism"]}
              price="₹4999"
              duration="6 months"
            />
            <CourseCard
              title="Chemistry Fundamentals"
              description="Learn Chemistry concepts with practical examples and experiments"
              topics={["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"]}
              price="₹4999"
              duration="6 months"
            />
            <CourseCard
              title="Biology Essentials"
              description="Comprehensive Biology course covering all major topics"
              topics={["Cell Biology", "Genetics", "Human Physiology"]}
              price="₹4999"
              duration="6 months"
            />
          </div>
        </TabsContent>
        <TabsContent value="mathematics">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <CourseCard
              title="Advanced Algebra"
              description="Master algebraic concepts and problem-solving techniques"
              topics={["Linear Algebra", "Quadratic Equations", "Polynomials"]}
              price="₹4999"
              duration="6 months"
            />
            <CourseCard
              title="Calculus Complete"
              description="Learn differentiation, integration and their applications"
              topics={["Differentiation", "Integration", "Applications"]}
              price="₹4999"
              duration="6 months"
            />
          </div>
        </TabsContent>
        <TabsContent value="coding">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <CourseCard
              title="Python Programming"
              description="Learn Python programming from basics to advanced concepts"
              topics={["Basic Syntax", "Data Structures", "OOP Concepts"]}
              price="₹6999"
              duration="4 months"
            />
            <CourseCard
              title="Web Development"
              description="Master modern web development technologies"
              topics={["HTML/CSS", "JavaScript", "React"]}
              price="₹8999"
              duration="6 months"
            />
          </div>
        </TabsContent>
        <TabsContent value="ai">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <CourseCard
              title="Machine Learning Basics"
              description="Introduction to machine learning concepts and algorithms"
              topics={["Supervised Learning", "Unsupervised Learning", "Model Evaluation"]}
              price="₹9999"
              duration="4 months"
            />
            <CourseCard
              title="Deep Learning"
              description="Advanced deep learning concepts and neural networks"
              topics={["Neural Networks", "CNN", "RNN"]}
              price="₹12999"
              duration="6 months"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CourseCard({
  title,
  description,
  topics,
  price,
  duration,
}: {
  title: string
  description: string
  topics: string[]
  price: string
  duration: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Key Topics:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="font-bold">{price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{duration}</p>
            </div>
          </div>
          <Button className="w-full">Enroll Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}

