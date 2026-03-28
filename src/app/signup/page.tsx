import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center py-24 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)]">
      <Card className="w-full max-w-[460px] shadow-2xl border-border-color rounded-3xl p-4 overflow-hidden">
        <CardHeader className="text-center space-y-4 pb-8">
          <CardTitle className="text-3xl font-extrabold text-text-primary">Join 4hospiceRx</CardTitle>
          <CardDescription className="text-text-secondary text-base">Start optimizing your medication workflows today.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2.5">
              <Label htmlFor="org" className="font-bold text-sm text-text-primary ml-1">Organization Name</Label>
              <Input id="org" type="text" placeholder="Hospice Care Central" className="h-12 rounded-xl border-border-color bg-bg-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="email" className="font-bold text-sm text-text-primary ml-1">Administrator Email</Label>
              <Input id="email" type="email" placeholder="admin@care.org" className="h-12 rounded-xl border-border-color bg-bg-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="pass" className="font-bold text-sm text-text-primary ml-1">Password</Label>
              <Input id="pass" type="password" placeholder="••••••••" className="h-12 rounded-xl border-border-color bg-bg-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <Button className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 mt-4">
              Initialize Integration
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center pt-4">
          <p className="text-sm text-text-secondary">
            Already on the platform? <Link href="/login" className="text-primary font-bold hover:underline">Login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}


