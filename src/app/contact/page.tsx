import { Mail, Phone, Clock, MapPin, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Precision Gradient Stops (%) */}
      <section className="bg-gradient-to-b from-[#C6E7FF] from-20% to-white to-100% pt-28 pb-20 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[44px] font-extrabold text-[#002B5B] mb-4">Contact Us</h1>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            We value your feedback and are here to help. Reach out to us with any questions or suggestions.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 py-12 -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Card className="border border-[#E2E8F0] rounded-[20px] shadow-sm overflow-hidden">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-4">Get in Touch</h3>
                  <p className="text-sm text-[#64748B] leading-6">
                    Have questions about our clinical tools? Need support? Want to provide feedback? We're here to help!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#38B6FF]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002B5B]">Email</div>
                      <div className="text-sm text-[#64748B]">support@4hospicerx.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#38B6FF]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002B5B]">Phone</div>
                      <div className="text-sm text-[#64748B]">1-800-4HOSPICE</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#38B6FF]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002B5B]">Business Hours</div>
                      <div className="text-sm text-[#64748B]">Mon-Fri: 8am - 6pm EST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#38B6FF]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002B5B]">Location</div>
                      <div className="text-sm text-[#64748B]">United States</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[#E2E8F0] rounded-[20px] shadow-sm overflow-hidden">
              <CardContent className="p-6 flex items-start gap-4">
                <Avatar className="h-12 w-12 bg-[#38B6FF] text-white font-bold text-lg">
                  <AvatarFallback className="bg-[#38B6FF] text-white">S</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-bold text-[#002B5B]">sadar</div>
                  <div className="text-sm text-[#64748B]">sadar@gmail.com</div>
                  <p className="mt-3 text-[11px] text-[#94A3B8] leading-4">
                    Your Information has been pre-filled in the contact form.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (Form) */}
          <Card className="border border-[#E2E8F0] rounded-[20px] shadow-sm overflow-hidden">
            <CardContent className="p-10 space-y-8">
              <h3 className="text-2xl font-bold text-[#002B5B]">Send us a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-[#002B5B]">Name *</label>
                  <Input
                    placeholder="sadar"
                    className="h-12 bg-[#F8FAFC] border-[#E2E8F0] rounded-xl px-5 text-[#475569] placeholder:text-[#94A3B8] focus:ring-[#38B6FF]/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#002B5B]">Email Address *</label>
                  <Input
                    placeholder="sadar@gmail.com"
                    className="h-12 bg-[#F8FAFC] border-[#E2E8F0] rounded-xl px-5 text-[#475569] placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#002B5B]">Hospice Agency</label>
                  <Input
                    placeholder="Your organization name"
                    className="h-12 bg-[#F8FAFC] border-[#E2E8F0] rounded-xl px-5 text-[#475569] placeholder:text-[#94A3B8]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#002B5B]">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help..."
                    className="min-h-[160px] bg-[#F8FAFC] border-[#E2E8F0] rounded-xl px-5 py-4 text-[#475569] placeholder:text-[#94A3B8] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button type="button" className="flex items-center gap-2 text-[#002B5B] text-sm font-semibold hover:opacity-80 transition-opacity">
                    <Paperclip size={18} className="text-[#64748B]" />
                    Attach Files
                  </button>
                  <span className="text-xs text-[#94A3B8]">0 files</span>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-[#38B6FF] hover:bg-[#31a1e0] text-white font-bold rounded-xl text-base flex items-center justify-center gap-2 shadow-lg shadow-[#38B6FF]/20 mt-4 uppercase"
                >
                  Send Message <Send size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
