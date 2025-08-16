"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { PlusCircle, CheckCircle, Trash2 } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed";
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: "pending",
    };
    setTasks([newTask, ...tasks]);
    setTitle("");
    setDescription("");
  };

  const toggleStatus = (id: number) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, status: t.status === "pending" ? "completed" : "pending" } : t
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Card className="p-4 w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Task Manager
          <Badge variant="outline">{tasks.length} Tasks</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mb-4">
          <Input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={addTask} className="flex gap-2">
            <PlusCircle size={18} /> Add Task
          </Button>
        </div>

        <div className="space-y-3">
          {tasks.map(task => (
            <Card key={task.id} className="p-3 flex justify-between items-center">
              <div>
                <h3 className={`font-semibold ${task.status === "completed" ? "line-through text-gray-500" : ""}`}>
                  {task.title}
                </h3>
                {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleStatus(task.id)}
                  className={task.status === "completed" ? "text-green-600" : ""}
                >
                  <CheckCircle size={16} />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
