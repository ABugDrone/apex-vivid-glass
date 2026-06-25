import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = '2348000000000';

export function getWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string) {
  window.open(getWhatsAppUrl(message), '_blank');
}

interface InquiryData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function formatInquiryMessage(data: InquiryData) {
  return `Hello Apex Realty!

New Inquiry from: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}`;
}
