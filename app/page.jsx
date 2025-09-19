import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center font-noto-serif-lao">Welcome to Eleedict</h1>
        <p className="text-center text-lg mb-8 font-noto-serif-lao">ຍິນດີຕ້ອນຮັບ</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Next.js 15</CardTitle>
              <CardDescription>The React Framework for the Web</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built on the latest version of Next.js with App Router
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>Utility-first CSS framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rapidly build modern websites without leaving your HTML
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Explore</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>Beautifully designed components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Copy and paste components built with Radix UI and Tailwind
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Browse Components</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-6">
            Edit <code className="bg-muted px-2 py-1 rounded">app/page.js</code> to start building your application
          </p>
          <div className="flex gap-4 justify-center">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Action</Button>
          </div>
        </div>
      </main>
    </div>
  );
}