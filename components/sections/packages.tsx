import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Code2, MessageSquare, Rocket, Settings, Shield, Star, Users, Zap, Crown } from "lucide-react"

export function PackagesSection() {
  return (
    <section id="packages" className="bg-[#F5F0EB] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Our Packages</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tailored AI-based Packages for Small Business and Entrepreneurs
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600">
            Choose the perfect package for your business needs. All packages include our signature AI-powered automation
            and dedicated support.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Silver Package */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">Silver Package</CardTitle>
                  <p className="mt-2 text-sm text-gray-600">
                    Perfect for small businesses starting their digital journey
                  </p>
                </div>
                <Star className="h-8 w-8 text-[#0A4958]" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-4">
                <li className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-[#0A4958]" />
                  <span>Basic Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#0A4958]" />
                  <span>Calendar Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#0A4958]" />
                  <span>Review Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0A4958]" />
                  <span>Basic CRM</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#0A4958]" />
                  <span>Support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Gold Package */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">Gold Package</CardTitle>
                  <p className="mt-2 text-sm text-gray-600">Enhanced features for growing businesses</p>
                </div>
                <Crown className="h-8 w-8 text-[#0A4958]" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-4">
                <li className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#0A4958]" />
                  <span>Everything in Silver</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#0A4958]" />
                  <span>Advanced Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#0A4958]" />
                  <span>Email, SMS Marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#0A4958]" />
                  <span>Website and Funnel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0A4958]" />
                  <span>Advanced Support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Platinum Package */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">Platinum Package</CardTitle>
                  <p className="mt-2 text-sm text-gray-600">Advanced solutions for established businesses</p>
                </div>
                <Shield className="h-8 w-8 text-[#0A4958]" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-4">
                <li className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#0A4958]" />
                  <span>Everything in Gold</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0A4958]" />
                  <span>Membership Sites</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#0A4958]" />
                  <span>Premium Booking Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#0A4958]" />
                  <span>Social Advertising</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0A4958]" />
                  <span>Full CRM</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#0A4958]" />
                  <span>Premium Dedicated Support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* VIP Package */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">VIP Package</CardTitle>
                  <p className="mt-2 text-sm text-gray-600">Custom enterprise solutions</p>
                </div>
                <Code2 className="h-8 w-8 text-[#0A4958]" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-4">
                <li className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#0A4958]" />
                  <span>Everything in Platinum</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#0A4958]" />
                  <span>Content Creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0A4958]" />
                  <span>Dedicated Virtual Assistants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#0A4958]" />
                  <span>Dedicated Deal Closers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-[#0A4958]" />
                  <span>Custom Software Services</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

