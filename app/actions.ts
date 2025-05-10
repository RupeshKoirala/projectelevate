"use server"

import { supabase } from "@/lib/supabase"

export async function submitForm(formData: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const { data, error } = await supabase.from("form_submissions").insert([formData])

  if (error) {
    console.error("Error inserting data:", error)
    throw new Error("Failed to submit form")
  }

  return { success: true, data }
}

