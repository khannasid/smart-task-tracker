import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export default function AnalyticsPage(): React.JSX.Element {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader><CardTitle>Completion Rate</CardTitle></CardHeader>
          <CardContent className="text-sm text-gray-600">
            Chart coming soon… (Go microservice endpoint later)
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Tasks per Day</CardTitle></CardHeader>
          <CardContent className="text-sm text-gray-600">
            Chart coming soon… (AWS Lambda scheduled summary)
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Focus Time</CardTitle></CardHeader>
          <CardContent className="text-sm text-gray-600">
            Chart coming soon… (derived metrics)
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
