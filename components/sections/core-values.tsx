import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Lock, Shield, Users } from "lucide-react";

export function CoreValuesSection() {
  return (
    <section className="bg-[#0A4958] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="border-white text-white">
            Our Values
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose ProjectElevate
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Shield className="h-10 w-10" />
              <CardTitle className="mt-4">Full-Stack Solutions</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              End-to-end development and automation services for complete
              digital transformation.
            </CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Bot className="h-10 w-10" />
              <CardTitle className="mt-4">AI-Powered</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Leveraging cutting-edge AI tools and automation for enhanced
              efficiency.
            </CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Users className="h-10 w-10" />
              <CardTitle className="mt-4">Client-Centric</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Focused on delivering solutions that drive real business value.
            </CardContent>
          </Card>
          <Card className="bg-[#0A4958] text-white">
            <CardHeader>
              <Lock className="h-10 w-10" />
              <CardTitle className="mt-4">Security First</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              Enterprise-grade security measures and best practices.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
