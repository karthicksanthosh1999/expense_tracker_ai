import HeroSection from "@/components/hero-section";
import { featuresData, statsData } from "@/data/landing";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {
              statsData.map((statsData, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2"
                  >
                    {statsData.value}
                  </div>
                  <div className="text-gray-600">{statsData.label}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-8">
            {
              featuresData.map((feature, index) => (
                <Card>
                  <CardContent>
                    {feature.icon}
                    <h3>{feature.title}</h3>
                    <h3>{feature.description}</h3>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}