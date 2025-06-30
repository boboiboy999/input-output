
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Share2, TrendingUp, AlertCircle, CheckCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AnalysisFinal = () => {
  const { toast } = useToast();

  const keyFindings = [
    {
      title: "Sektor Industri Paling Berpengaruh",
      description: "Memiliki output multiplier tertinggi (1.97) dan dampak shock terbesar",
      status: "high",
      icon: TrendingUp
    },
    {
      title: "Keterkaitan Ekonomi Kuat",
      description: "Backward linkage rata-rata 1.35, menunjukkan interdependensi yang baik",
      status: "medium",
      icon: CheckCircle
    },
    {
      title: "Kerentanan Terhadap Shock",
      description: "Sektor industri rentan dengan potensi dampak negatif hingga 28.3%",
      status: "warning",
      icon: AlertCircle
    }
  ];

  const policyRecommendations = [
    {
      priority: "Tinggi",
      recommendation: "Diversifikasi struktur ekonomi untuk mengurangi ketergantungan pada sektor industri",
      impact: "Jangka Panjang",
      difficulty: "Tinggi"
    },
    {
      priority: "Tinggi",
      recommendation: "Strengthening backward linkage sektor pertanian untuk meningkatkan multiplier effect",
      impact: "Jangka Menengah",
      difficulty: "Sedang"
    },
    {
      priority: "Sedang",
      recommendation: "Pengembangan sektor jasa untuk meningkatkan employment multiplier",
      impact: "Jangka Menengah",
      difficulty: "Sedang"
    },
    {
      priority: "Sedang",
      recommendation: "Implementasi early warning system untuk mendeteksi shock ekonomi",
      impact: "Jangka Pendek",
      difficulty: "Rendah"
    }
  ];

  const summaryData = [
    { metric: 'Total Sektor', value: '4', change: '+0%' },
    { metric: 'Avg Output Multiplier', value: '1.69', change: '+12%' },
    { metric: 'Avg Employment Multiplier', value: '1.73', change: '+8%' },
    { metric: 'Economic Resilience Index', value: '0.75', change: '-5%' },
  ];

  const performanceData = [
    { sector: 'Pertanian', multiplier: 1.60, linkage: 1.60, resilience: 0.85 },
    { sector: 'Industri', multiplier: 1.97, linkage: 2.40, resilience: 0.65 },
    { sector: 'Jasa', multiplier: 1.76, linkage: 2.00, resilience: 0.78 },
    { sector: 'Perdagangan', multiplier: 1.43, linkage: 1.80, resilience: 0.82 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'];

  const downloadReport = () => {
    toast({
      title: "Laporan Diunduh",
      description: "Laporan analisis lengkap telah diunduh dalam format PDF",
    });
  };

  const shareReport = () => {
    toast({
      title: "Laporan Dibagikan",
      description: "Link laporan telah disalin ke clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analisis Akhir</h1>
          <p className="text-gray-600">Ringkasan komprehensif dan rekomendasi kebijakan</p>
        </div>

        {/* Executive Summary */}
        <Card className="shadow-lg mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Executive Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {summaryData.map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
                  <p className="text-gray-600 text-sm">{item.metric}</p>
                  <Badge variant={item.change.startsWith('+') ? 'default' : 'destructive'} className="mt-1">
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Temuan Utama</CardTitle>
            <CardDescription>Insight penting dari analisis input-output</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                  <div className={`p-2 rounded-full ${
                    finding.status === 'high' ? 'bg-green-100' :
                    finding.status === 'medium' ? 'bg-blue-100' : 'bg-yellow-100'
                  }`}>
                    <finding.icon className={`h-5 w-5 ${
                      finding.status === 'high' ? 'text-green-600' :
                      finding.status === 'medium' ? 'text-blue-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{finding.title}</h4>
                    <p className="text-gray-600 text-sm">{finding.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Comparison */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Perbandingan Kinerja Sektor</CardTitle>
            <CardDescription>Analisis komprehensif multiplier, linkage, dan resilience</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sector" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="multiplier" fill="#3B82F6" name="Multiplier Effect" />
                <Bar dataKey="linkage" fill="#10B981" name="Total Linkage" />
                <Bar dataKey="resilience" fill="#8B5CF6" name="Resilience Index" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Policy Recommendations */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle>Rekomendasi Kebijakan</CardTitle>
            <CardDescription>Saran strategis berdasarkan hasil analisis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {policyRecommendations.map((rec, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={rec.priority === 'Tinggi' ? 'destructive' : 'secondary'}>
                      {rec.priority}
                    </Badge>
                    <div className="flex space-x-2">
                      <Badge variant="outline">{rec.impact}</Badge>
                      <Badge variant="outline">{rec.difficulty}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-700">{rec.recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="shadow-lg mb-8 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle>Kesimpulan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Analisis input-output menunjukkan bahwa struktur ekonomi memiliki karakteristik yang khas dengan 
                sektor industri sebagai penggerak utama pertumbuhan ekonomi. Efek multiplier yang tinggi pada 
                sektor industri (1.97) mengindikasikan bahwa investasi pada sektor ini akan memberikan dampak 
                yang signifikan terhadap perekonomian secara keseluruhan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Namun, ketergantungan yang tinggi pada sektor industri juga menimbulkan kerentanan terhadap 
                shock ekonomi. Hasil analisis shock menunjukkan bahwa gangguan pada sektor industri dapat 
                berdampak negatif hingga 28.3% terhadap output total.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Untuk meningkatkan ketahanan ekonomi, diperlukan diversifikasi struktur ekonomi dan penguatan 
                keterkaitan antar sektor, terutama pada sektor pertanian dan jasa yang memiliki potensi 
                employment multiplier yang tinggi.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="outline" size="lg" onClick={downloadReport}>
            <Download className="h-4 w-4 mr-2" />
            Download Laporan
          </Button>
          <Button variant="outline" size="lg" onClick={shareReport}>
            <Share2 className="h-4 w-4 mr-2" />
            Bagikan Laporan
          </Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <FileText className="h-4 w-4 mr-2" />
            Buat Analisis Baru
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg">
            Kembali ke Analisis Shock
          </Button>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisFinal;
