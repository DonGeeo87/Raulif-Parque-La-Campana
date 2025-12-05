# Script para descargar imágenes del Parque Nacional La Campana
# Este script descarga imágenes desde Unsplash con términos específicos

$imageDir = "public\images"
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force
}

Write-Host "Descargando imágenes del Parque Nacional La Campana..."

# Lista de imágenes a descargar
$images = @(
    @{Name = "cover-la-campana.jpg"; Url = "https://source.unsplash.com/1920x1080/?chile,mountain,national,park"; Desc = "Cover del parque"},
    @{Name = "sector-granizo.jpg"; Url = "https://source.unsplash.com/800x600/?mountain,trail,hiking,chile,rocky"; Desc = "Sector Granizo"},
    @{Name = "sector-cajon-grande.jpg"; Url = "https://source.unsplash.com/800x600/?forest,stream,waterfall,nature,chile"; Desc = "Sector Cajon Grande"},
    @{Name = "sector-ocoa.jpg"; Url = "https://source.unsplash.com/800x600/?palm,tree,valley,nature,chile"; Desc = "Sector Ocoa"},
    @{Name = "palma-chilena.jpg"; Url = "https://source.unsplash.com/800x600/?palm,tree,trunk,chile,ancient"; Desc = "Palma Chilena"},
    @{Name = "roble-santiago.jpg"; Url = "https://source.unsplash.com/800x600/?oak,forest,autumn,leaves,deciduous"; Desc = "Roble de Santiago"},
    @{Name = "quillay.jpg"; Url = "https://source.unsplash.com/800x600/?evergreen,tree,leaves,nature,chile"; Desc = "Quillay"},
    @{Name = "chagual.jpg"; Url = "https://source.unsplash.com/800x600/?bromeliad,spiky,plant,flower,chile"; Desc = "Chagual"},
    @{Name = "zorro-culpeo.jpg"; Url = "https://source.unsplash.com/800x600/?fox,wildlife,animal,chile,south,america"; Desc = "Zorro Culpeo"},
    @{Name = "turca.jpg"; Url = "https://source.unsplash.com/800x600/?bird,ground,rock,wildlife,chile"; Desc = "Turca"},
    @{Name = "tenca.jpg"; Url = "https://source.unsplash.com/800x600/?mockingbird,bird,grey,wildlife,chile"; Desc = "Tenca"},
    @{Name = "aguilucho.jpg"; Url = "https://source.unsplash.com/800x600/?hawk,bird,prey,flight,sky,chile"; Desc = "Aguilucho"},
    @{Name = "degu.jpg"; Url = "https://source.unsplash.com/800x600/?rodent,small,animal,wildlife,chile"; Desc = "Degu"}
)

foreach ($image in $images) {
    $outputPath = Join-Path $imageDir $image.Name
    Write-Host "Descargando: $($image.Desc) -> $($image.Name)"
    
    try {
        Invoke-WebRequest -Uri $image.Url -OutFile $outputPath -TimeoutSec 30 -ErrorAction Stop
        Write-Host "  OK" -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Descarga completada. Revisa los archivos en: $imageDir"
