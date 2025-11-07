import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Activity, BookOpen } from "lucide-react";

const stats = [
    { title: "Total Revenue", value: "₹12,50,000", icon: DollarSign, change: "+12.5%" },
    { title: "New Admissions", value: "+250", icon: Users, change: "+8.2% this month" },
    { title: "Active Courses", value: "12", icon: BookOpen, change: "+2 from last quarter" },
    { title: "New Inquiries", value: "85", icon: Activity, change: "+30 this week" },
]

const recentAdmissions = [
    { name: "Rahul Sharma", course: "UPSC Civil Services", date: "2023-10-26", status: "Paid" },
    { name: "Sneha Reddy", course: "Banking PO", date: "2023-10-25", status: "Pending" },
    { name: "Arjun Mehta", course: "SSC CGL", date: "2023-10-25", status: "Paid" },
    { name: "Pooja Desai", course: "MPSC Rajyaseva", date: "2023-10-24", status: "Paid" },
    { name: "Vikram Singh", course: "UPSC Civil Services", date: "2023-10-23", status: "Pending" },
]

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Admissions</CardTitle>
                    <CardDescription>A list of the most recent student admissions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student Name</TableHead>
                                <TableHead>Course</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentAdmissions.map((admission) => (
                                <TableRow key={admission.name}>
                                    <TableCell className="font-medium">{admission.name}</TableCell>
                                    <TableCell>{admission.course}</TableCell>
                                    <TableCell>{admission.date}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={admission.status === "Paid" ? "default" : "secondary"} className={admission.status === "Paid" ? "bg-green-500/20 text-green-700 hover:bg-green-500/30" : ""}>
                                            {admission.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
