
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, PieChart as PieChartIcon, Table as TableIcon, TrendingUp } from "lucide-react";

const AnalysisInitial = () => {
  // Sample data for demonstration
  const sectorData = [
    { name: 'Pertanian', value: 25.5, output: 125000 },
    { name: 'Industri', value: 35.2, output: 180000 },
    { name: 'Jasa', value: 28.8, output: 155000 },
    { name: 'Perdagangan', value: 10.5, output: 85000 },
  ];

  const multiplierData = [
    { sector: 'Pertanian', direct: 1.25, indirect: 0.35, total: 1.60 },
    { sector: 'Industri', direct: 1.45, indirect: 0.52, total: 1.97 },
    { sector: 'Jasa', direct: 1.35, indirect: 0.41, total: 1.76 },
    { sector: 'Perdagangan', direct: 1.15, indirect: 0.28, total: 1.43 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analisis & Visualisasi Awal</h1>
          <p className="text-gray-600">Overview data tabel input-output dan statistik dasar</p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-blue-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Sektor</p>
                  <p className="text-3xl font-bold">4</p>
                </div>
                <TableIcon className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Output</p>
                  <p className="text-3xl font-bold">545K</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Avg Multiplier</p>
                  <p className="text-3xl font-bold">1.69</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Linkage Index</p>
                  <p className="text-3xl font-bold">0.85</p>
                </div>
                <PieChartIcon className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Output per Sektor</CardTitle>
              <CardDescription>Distribusi output ekonomi berdasarkan sektor</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sectorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="output" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Komposisi Ekonomi</CardTitle>
              <CardDescription>Persentase kontribusi setiap sektor</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Tabel Multiplier Effect</CardTitle>
            <CardDescription>Efek multiplier langsung, tidak langsung, dan total</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sektor</TableHead>
                  <TableHead>Direct Effect</TableHead>
                  <TableHead>Indirect Effect</TableHead>
                  <TableHead>Total Effect</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {multiplierData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.sector}</TableCell>
                    <TableCell>{row.direct}</TableCell>
                    <TableCell>{row.indirect}</TableCell>
                    <TableCell className="font-bold">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg">
            Kembali ke Upload
          </Button>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Lanjut ke Analisis Multiplier
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisInitial;
