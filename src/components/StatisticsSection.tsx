
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "98%",
    label: "Completion Rate",
    description: "Of hotel staff complete their fire safety training with FireFacts",
  },
  {
    number: "30%",
    label: "Knowledge Improvement",
    description: "Average increase in fire safety knowledge after training",
  },
  {
    number: "15min",
    label: "Daily Training",
    description: "Recommended time for regular safety practice",
  },
  {
    number: "500+",
    label: "Hotels",
    description: "Trust FireFacts for their staff safety training",
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-navy-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Making a Real Impact
          </h2>
          <p className="text-navy-100">
            FireFacts is transforming how hotel staff prepare for fire emergencies,
            leading to better outcomes and safer environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-navy-900 border-navy-800">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-fire-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-navy-200 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
