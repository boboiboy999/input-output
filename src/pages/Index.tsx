
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, BarChart3, Calculator, Zap, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const menuItems = [
    {
      title: "Upload Tabel",
      description: "Unggah file tabel input-output untuk analisis",
      icon: Upload,
      path: "/upload",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Analisis & Visualisasi Awal",
      description: "Lihat preview data dan statistik dasar",
      icon: BarChart3,
      path: "/analysis-initial",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Analisis Multiplier",
      description: "Hitung efek multiplier ekonomi",
      icon: Calculator,
      path: "/analysis-multiplier",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Analisis Shock",
      description: "Simulasi dampak perubahan ekonomi",
      icon: Zap,
      path: "/analysis-shock",
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      title: "Analisis Akhir",
      description: "Ringkasan dan laporan komprehensif",
      icon: FileText,
      path: "/analysis-final",
      color: "bg-red-500 hover:bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Input-Output Analysis</h1>
              <p className="text-gray-600">Platform Analisis Tabel Input-Output Komprehensif</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Analisis Ekonomi yang Powerful
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lakukan analisis mendalam terhadap tabel input-output dengan tools yang lengkap dan visualisasi yang menarik
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={item.path}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors duration-300">
                    Mulai Analisis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fitur Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Upload Mudah</h4>
              <p className="text-gray-600">Dukung berbagai format file termasuk CSV dan Excel</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Visualisasi Interaktif</h4>
              <p className="text-gray-600">Grafik dan chart yang mudah dipahami</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Analisis Mendalam</h4>
              <p className="text-gray-600">Perhitungan multiplier dan analisis shock ekonomi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
