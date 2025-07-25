
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Zap, TrendingUp, AlertTriangle, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AnalysisShock = () => {
  const [selectedSector, setSelectedSector] = useState("industri");
  const [shockType, setShockType] = useState("demand");
  const [shockValue, setShockValue] = useState([10]);
  const [timeHorizon, setTimeHorizon] = useState("5");
  const [simulationRun, setSimulationRun] = useState(false);
  const { toast } = useToast();

  const sectors = ["pertanian", "industri", "jasa", "perdagangan"];
  const shockTypes = ["demand", "supply", "productivity", "price"];

  // Simulated shock impact data
  const shockImpactData = [
    { period: 'Year 1', pertanian: 2.5, industri: 8.2, jasa: 4.1, perdagangan: 3.8 },
    { period: 'Year 2', pertanian: 3.2, industri: 12.5, jasa: 6.8, perdagangan: 5.4 },
    { period: 'Year 3', pertanian: 4.1, industri: 15.8, jasa: 8.9, perdagangan: 7.2 },
    { period: 'Year 4', pertanian: 4.8, industri: 18.2, jasa: 10.5, perdagangan: 8.6 },
    { period: 'Year 5', pertanian: 5.2, industri: 19.8, jasa: 11.8, perdagangan: 9.4 },
  ];

  const cumulativeImpactData = [
    { period: 'Year 1', total: 18.6, direct: 8.2, indirect: 10.4 },
    { period: 'Year 2', total: 27.9, direct: 12.5, indirect: 15.4 },
    { period: 'Year 3', total: 36.0, direct: 15.8, indirect: 20.2 },
    { period: 'Year 4', total: 42.1, direct: 18.2, indirect: 23.9 },
    { period: 'Year 5', total: 46.2, direct: 19.8, indirect: 26.4 },
  ];

  const sectoralImpactData = [
    { sector: 'Pertanian', direct: 1.2, indirect: 4.0, total: 5.2 },
    { sector: 'Industri', direct: 19.8, indirect: 8.5, total: 28.3 },
    { sector: 'Jasa', direct: 2.8, indirect: 9.0, total: 11.8 },
    { sector: 'Perdagangan', direct: 1.5, indirect: 7.9, total: 9.4 },
  ];

  const runSimulation = () => {
    setSimulationRun(true);
    toast({
      title: "Simulasi Berhasil",
      description: `Shock ${shockValue[0]}% pada sektor ${selectedSector} telah disimulasikan`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              <TrendingUp className="h-4 w-4 mr-2" />
              Beranda
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analisis Shock</h1>
              <p className="text-gray-600">Simulasi dampak perubahan ekonomi dan guncangan eksternal</p>
            </div>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Lanjut ke Analisis Akhir
          </Button>
        </div>

        {/* Simulation Control Panel */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Parameter Simulasi</span>
            </CardTitle>
            <CardDescription>Atur parameter shock untuk analisis dampak</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label>Sektor Target</Label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih sektor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pertanian">Pertanian</SelectItem>
                    <SelectItem value="industri">Industri</SelectItem>
                    <SelectItem value="jasa">Jasa</SelectItem>
                    <SelectItem value="perdagangan">Perdagangan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Jenis Shock</Label>
                <Select value={shockType} onValueChange={setShockType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis shock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demand">Demand Shock</SelectItem>
                    <SelectItem value="supply">Supply Shock</SelectItem>
                    <SelectItem value="productivity">Productivity Shock</SelectItem>
                    <SelectItem value="price">Price Shock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Besaran Shock: {shockValue[0]}%</Label>
                <Slider
                  value={shockValue}
                  onValueChange={setShockValue}
                  max={50}
                  min={-50}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Horison Waktu (Tahun)</Label>
                <Input
                  type="number"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(e.target.value)}
                  min="1"
                  max="10"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button onClick={runSimulation} size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Play className="h-4 w-4 mr-2" />
                Jalankan Simulasi
              </Button>
            </div>
          </CardContent>
        </Card>

        {simulationRun && (
          <>
            {/* Impact Over Time */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle>Dampak Shock Terhadap Waktu</CardTitle>
                <CardDescription>Evolusi dampak shock terhadap setiap sektor</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={shockImpactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pertanian" stroke="#10B981" strokeWidth={2} />
                    <Line type="monotone" dataKey="industri" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="jasa" stroke="#8B5CF6" strokeWidth={2} />
                    <Line type="monotone" dataKey="perdagangan" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Cumulative Impact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Dampak Kumulatif</CardTitle>
                  <CardDescription>Efek langsung vs tidak langsung</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={cumulativeImpactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="period" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="direct" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
                      <Area type="monotone" dataKey="indirect" stackId="1" stroke="#10B981" fill="#10B981" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Sectoral Impact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Dampak per Sektor (Tahun 5)</CardTitle>
                  <CardDescription>Breakdown dampak akhir per sektor</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sectoralImpactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sector" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="direct" fill="#3B82F6" name="Direct Impact" />
                      <Bar dataKey="indirect" fill="#10B981" name="Indirect Impact" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Impact Summary Table */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle>Ringkasan Dampak Shock</CardTitle>
                <CardDescription>Detail dampak per sektor dan periode</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sektor</TableHead>
                      <TableHead>Direct Impact (%)</TableHead>
                      <TableHead>Indirect Impact (%)</TableHead>
                      <TableHead>Total Impact (%)</TableHead>
                      <TableHead>Ranking</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sectoralImpactData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.sector}</TableCell>
                        <TableCell>{row.direct}%</TableCell>
                        <TableCell>{row.indirect}%</TableCell>
                        <TableCell className="font-bold">{row.total}%</TableCell>
                        <TableCell>{index + 1}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="shadow-lg mb-8 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span>Assessment Risiko</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Risiko Tinggi</h4>
                    <p className="text-gray-700">Sektor Industri paling rentan terhadap shock dengan dampak 28.3%</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Efek Berganda</h4>
                    <p className="text-gray-700">Dampak tidak langsung mencapai 57% dari total dampak</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recovery Time</h4>
                    <p className="text-gray-700">Estimasi waktu pemulihan: 3-4 tahun untuk kembali ke baseline</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            Kembali ke Analisis Multiplier
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisShock;
