import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Automation FAQs */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">Automation</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="auto-1">
                <AccordionTrigger>How do you combine AI automation with web development?</AccordionTrigger>
                <AccordionContent>
                  We integrate AI capabilities directly into web applications, creating intelligent systems that
                  automate processes while providing seamless user experiences. This includes features like automated
                  content generation, smart data processing, and AI-powered customer interactions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="auto-2">
                <AccordionTrigger>What types of automation solutions do you provide?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of automation solutions including workflow automation, email marketing
                  automation, social media automation, customer service automation, and business process automation
                  using tools like Make.com, Zapier, and custom solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="auto-3">
                <AccordionTrigger>How can automation improve my business efficiency?</AccordionTrigger>
                <AccordionContent>
                  Automation can streamline repetitive tasks, reduce human error, save time and resources, and allow
                  your team to focus on strategic activities. We'll help identify processes that can be automated for
                  maximum impact.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Website Development FAQs */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Website Development</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="web-1">
                <AccordionTrigger>What technologies do you use for website development?</AccordionTrigger>
                <AccordionContent>
                  We use modern technologies like React, Next.js, and other cutting-edge frameworks to build fast,
                  scalable, and responsive websites. Our solutions are always optimized for performance and user
                  experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="web-2">
                <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while more
                  complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial
                  consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="web-3">
                <AccordionTrigger>Do you provide ongoing website maintenance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer comprehensive maintenance packages including regular updates, security patches,
                  performance optimization, and technical support to ensure your website remains secure and up-to-date.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Small Business FAQs */}
        <div>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Small Business and Entrepreneurs</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="biz-1">
                <AccordionTrigger>How can you help my business grow through social media?</AccordionTrigger>
                <AccordionContent>
                  Our social media optimization services are designed to help your business increase engagement, build
                  brand awareness and drive leads and sales. We'll develop a customized strategy that's tailored to your
                  business goals and target audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="biz-2">
                <AccordionTrigger>What is SEO advertising and how can it help my business?</AccordionTrigger>
                <AccordionContent>
                  SEO advertising involves optimizing your website and online content to improve your search engine
                  rankings. This can help your business get more visibility and drive more organic traffic to your
                  website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="biz-3">
                <AccordionTrigger>What is website automation and how can it benefit my business?</AccordionTrigger>
                <AccordionContent>
                  Website automation involves using software and tools to streamline and automate various tasks related
                  to website management. This can help your business save time, reduce errors, and improve productivity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="biz-4">
                <AccordionTrigger>
                  How do you measure the success of your digital marketing strategies?
                </AccordionTrigger>
                <AccordionContent>
                  We use a range of metrics and analytics to measure the success of our strategies. This includes
                  tracking website traffic, engagement rates, click-through rates, and conversions, among other things.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="biz-5">
                <AccordionTrigger>Do you offer pay-per-click (PPC) advertising services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer PPC advertising services to help your business drive more targeted traffic to your
                  website. We'll develop a customized strategy that's tailored to your business goals and target
                  audience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

