import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bot,
  Code2,
  Cog,
  Globe,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Rocket,
  Search,
  Users,
} from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#F5F0EB] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600">
            Leverage our expertise in automation and development to transform your digital presence.
            <br />
            We help small businesses scale and succeed with tailored digital marketing strategies, customized to drive
            results and ROI using AI.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Bot className="h-10 w-10 text-[#0A4958]" />
              <CardTitle className="mt-4">AI & Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Cog className="mr-2 h-4 w-4" />
                  Workflow Automation
                </li>
                <li className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  AI Chatbots
                </li>
                <li className="flex items-center">
                  <BarChart className="mr-2 h-4 w-4" />
                  Data Analytics
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code2 className="h-10 w-10 text-[#0A4958]" />
              <CardTitle className="mt-4">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Custom Websites
                </li>
                <li className="flex items-center">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Web Applications
                </li>
                <li className="flex items-center">
                  <Rocket className="mr-2 h-4 w-4" />
                  API Integration
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <LineChart className="h-10 w-10 text-[#0A4958]" />
              <CardTitle className="mt-4">Digital Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  SEO Optimization
                </li>
                <li className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Social Media
                </li>
                <li className="flex items-center">
                  <BarChart className="mr-2 h-4 w-4" />
                  PPC Campaigns
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

