import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";

export default function ProjectsPage(): React.JSX.Element {
  return (
     <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button className="flex gap-2"><PlusCircle size={18} /> Add Project</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle>Example Project</CardTitle></CardHeader>
          <CardContent className="text-sm text-gray-600">
            Project description… (hook to backend later)
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
