
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload as UploadIcon, FileSpreadsheet, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUploadComplete(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Silakan pilih file terlebih dahulu",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploadComplete(true);
      setUploading(false);
      toast({
        title: "Upload Berhasil",
        description: "File tabel input-output telah berhasil diunggah",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              <TrendingUp className="h-4 w-4 mr-2" />
              Beranda
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Upload Tabel Input-Output</h1>
              <p className="text-gray-600">Unggah file tabel input-output untuk memulai analisis</p>
            </div>
          </div>
          {uploadComplete && (
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Lanjut ke Analisis Awal
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UploadIcon className="h-5 w-5" />
                <span>Upload File</span>
              </CardTitle>
              <CardDescription>
                Pilih file CSV atau Excel yang berisi tabel input-output
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="file">Pilih File</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
              </div>

              {file && (
                <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                  <FileSpreadsheet className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-blue-800">{file.name}</span>
                </div>
              )}

              <Button 
                onClick={handleUpload} 
                disabled={!file || uploading}
                className="w-full"
              >
                {uploading ? "Mengupload..." : "Upload File"}
              </Button>

              {uploadComplete && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-800">File berhasil diunggah!</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Information Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Persyaratan File</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Format File</h4>
                  <p className="text-sm text-gray-600">CSV (.csv) atau Excel (.xlsx, .xls)</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Struktur Data</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Baris pertama berisi nama sektor</li>
                    <li>• Kolom pertama berisi nama sektor</li>
                    <li>• Data numerik untuk koefisien teknis</li>
                    <li>• Tidak ada sel kosong dalam tabel utama</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Ukuran File</h4>
                  <p className="text-sm text-gray-600">Maksimal 10 MB</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Tips:</strong> Pastikan tabel input-output sudah dalam format yang benar sebelum upload untuk hasil analisis yang optimal.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Example Format Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileSpreadsheet className="h-5 w-5" />
                <span>Contoh Format Tabel</span>
              </CardTitle>
              <CardDescription>
                Contoh tampilan tabel input-output yang benar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" 
                  alt="Contoh format tabel input-output"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Struktur Tabel</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Header baris dan kolom berisi nama sektor</p>
                  <p>• Nilai koefisien teknis di interseksi</p>
                  <p>• Format numerik yang konsisten</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Catatan:</strong> Pastikan struktur tabel sesuai dengan contoh di atas untuk hasil analisis yang akurat.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Upload;
