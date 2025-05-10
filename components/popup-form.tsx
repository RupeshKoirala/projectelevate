// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { submitForm } from "@/app/actions"
// import { toast } from "@/components/ui/use-toast"

// export function PopupForm() {
//   const [open, setOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       const result = await submitForm(formData)
//       if (result.success) {
//         toast({
//           title: "Form submitted successfully",
//           description: "We'll get back to you soon!",
//         })
//         setTimeout(() => {
//           setOpen(false)
//           setFormData({ name: "", email: "", phone: "", service: "", message: "" })
//         }, 2000) // Close after 2 seconds
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       toast({
//         title: "Error submitting form",
//         description: "Please try again later.",
//         variant: "destructive",
//       })
//     }
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, service: value }))
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button className="bg-[#0A4958] text-white hover:bg-[#0A4958]/90">Get Started</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Get Started</DialogTitle>
//           <DialogDescription>
//             Fill out this form to get started with our services. We'll get back to you within 24 hours.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="grid gap-4 py-4">
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="John Doe"
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="john@example.com"
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="phone">Phone</Label>
//             <Input
//               id="phone"
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleInputChange}
//               placeholder="(123) 456-7890"
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="service">Service Interested In</Label>
//             <Select onValueChange={handleSelectChange} value={formData.service} required>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a service" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="automation">AI Automation</SelectItem>
//                 <SelectItem value="development">Web Development</SelectItem>
//                 <SelectItem value="marketing">Digital Marketing</SelectItem>
//                 <SelectItem value="consulting">Consulting</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Tell us about your project..."
//               required
//             />
//           </div>
//           <Button type="submit" className="bg-[#0A4958] text-white hover:bg-[#0A4958]/90">
//             Submit
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }

