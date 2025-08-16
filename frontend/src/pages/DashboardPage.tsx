// src/pages/DashboardPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import TaskManager from "../components/TaskManager";

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Welcome to Your Dashboard</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Export</Button>
            <Button size="sm">New Task</Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
             Welcome back! Manage your tasks below. Analytics and project views are available from the top nav.
          </p>
          <Button className="mt-4">Add New Task</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Design Dashboard</TableCell>
                <TableCell>In Progress</TableCell>
                <TableCell>20 Aug 2025</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
        {/* Task Manager Component */}
        <TaskManager />

    </div>
  );
}
