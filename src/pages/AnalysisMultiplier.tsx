
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, TrendingUp, BarChart3 } from "lucide-react";

const AnalysisMultiplier = () => {
  const [selectedSector, setSelectedSector] = useState("all");
  const [multiplierType, setMultiplierType] = useState("output");

  const sectors = ["all", "pertanian", "industri", "jasa", "perdagangan"];
  const multiplierTypes = ["output", "income", "employment"];

  const multiplierData = [
    { sector: 'Pertanian', output: 1.60, income: 1.35, employment: 1.85, backward: 1.25, forward: 1.15 },
    { sector: 'Industri', output: 1.97, income: 1.52, employment: 1.45, backward: 1.75, forward: 1.65 },
    { sector: 'Jasa', output: 1.76, income: 1.41, employment: 1.92, backward: 1.55, forward: 1.35 },
    { sector: 'Perdagangan', output: 1.43, income: 1.28, employment: 1.68, backward: 1.35, forward: 1.25 },
  ];

  const linkageData = [
    { sector: 'Pertanian', backward: 0.85, forward: 0.75, total: 1.60 },
    { sector: 'Industri', backward: 1.25, forward: 1.15, total: 2.40 },
    { sector: 'Jasa', backward: 1.05, forward: 0.95, total: 2.00 },
    { sector: 'Perdagangan', backward: 0.95, forward: 0.85, total: 1.80 },
  ];

  const radarData = [
    { subject: 'Output', A: 1.60, B: 1.97, fullMark: 2.5 },
    { subject: 'Income', A: 1.35, B: 1.52, fullMark: 2.5 },
    { subject: 'Employment', A: 1.85, B: 1.45, fullMark: 2.5 },
    { subject: 'Backward', A: 1.25, B: 1.75, fullMark: 2.5 },
    { subject: 'Forward', A: 1.15, B: 1.65, fullMark: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              <TrendingUp className="h-4 w-4 mr-2" />
              Beranda
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analisis Multiplier</h1>
              <p className="text-gray-600">Analisis mendalam efek multiplier ekonomi</p>
            </div>
          </div>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Lanjut ke Analisis Shock
          </Button>
        </div>

        {/* Control Panel */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5" />
              <span>Pengaturan Analisis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Pilih Sektor</Label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih sektor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Sektor</SelectItem>
                    <SelectItem value="pertanian">Pertanian</SelectItem>
                    <SelectItem value="industri">Industri</SelectItem>
                    <SelectItem value="jasa">Jasa</SelectItem>
                    <SelectItem value="perdagangan">Perdagangan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Jenis Multiplier</Label>
                <Select value={multiplierType} onValueChange={setMultiplierType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis multiplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="output">Output Multiplier</SelectItem>
                    <SelectItem value="income">Income Multiplier</SelectItem>
                    <SelectItem value="employment">Employment Multiplier</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Multiplier Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Efek Multiplier per Sektor</CardTitle>
              <CardDescription>Perbandingan nilai multiplier antar sektor</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={multiplierData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sector" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey={multiplierType} fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Linkage Analysis */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Analisis Keterkaitan</CardTitle>
              <CardDescription>Backward dan forward linkage</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={linkageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sector" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="backward" fill="#3B82F6" name="Backward Linkage" />
                  <Bar dataKey="forward" fill="#10B981" name="Forward Linkage" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Radar Chart */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Perbandingan Multidimensi</CardTitle>
            <CardDescription>Analisis radar untuk perbandingan komprehensif (Pertanian vs Industri)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Pertanian" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Radar name="Industri" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Table */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Tabel Detail Multiplier</CardTitle>
            <CardDescription>Nilai lengkap semua jenis multiplier</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sektor</TableHead>
                  <TableHead>Output Multiplier</TableHead>
                  <TableHead>Income Multiplier</TableHead>
                  <TableHead>Employment Multiplier</TableHead>
                  <TableHead>Backward Linkage</TableHead>
                  <TableHead>Forward Linkage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {multiplierData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.sector}</TableCell>
                    <TableCell>{row.output}</TableCell>
                    <TableCell>{row.income}</TableCell>
                    <TableCell>{row.employment}</TableCell>
                    <TableCell>{row.backward}</TableCell>
                    <TableCell>{row.forward}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="shadow-lg mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Key Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sektor dengan Multiplier Tertinggi</h4>
                <p className="text-gray-700">Sektor Industri memiliki output multiplier tertinggi (1.97), menunjukkan dampak ekonomi yang paling besar.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Keterkaitan Terkuat</h4>
                <p className="text-gray-700">Sektor Industri juga memiliki backward linkage terkuat, menunjukkan ketergantungan tinggi pada sektor lain.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            Kembali ke Analisis Awal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisMultiplier;
