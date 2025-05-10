import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Target, Lightbulb, Maximize, Briefcase, Settings } from "lucide-react"

export function VisionSection() {
  return (
    <section className="bg-[#0A4958] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="border-white text-white">
            Our Vision
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">Empowering Digital Success</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-200">
            Our vision is to empower small businesses to succeed in the digital age, providing customized digital
            marketing solutions to drive growth and success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Rocket className="h-10 w-10" />
              <CardTitle className="mt-4">Helping Small Businesses Thrive</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Empowering small businesses to flourish in the digital landscape.
            </CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Target className="h-10 w-10" />
              <CardTitle className="mt-4">Driving Targeted Traffic</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Strategically increasing relevant visitors to your website.
            </CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Lightbulb className="h-10 w-10" />
              <CardTitle className="mt-4">Customized Strategies</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Tailoring unique approaches for each business's success.
            </CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Maximize className="h-10 w-10" />
              <CardTitle className="mt-4">Maximizing Digital Presence</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">Optimizing your online visibility and impact.</CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Briefcase className="h-10 w-10" />
              <CardTitle className="mt-4">Marketing Expertise</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">Leveraging our experience for your marketing success.</CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Settings className="h-10 w-10" />
              <CardTitle className="mt-4">Customized Solutions</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Crafting solutions tailored to your specific business needs.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

