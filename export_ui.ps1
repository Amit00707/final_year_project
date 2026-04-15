$ErrorActionPreference = "Stop"

$dataPath = "C:\Users\Amit Kumar\.gemini\antigravity\brain\678aabc9-ac6c-4fc8-aeb4-0e506b39563b\.system_generated\steps\289\output.txt"
$outDir = "C:\Users\Amit Kumar\Desktop\FP\midnight-scholar-export"

# Create output export directory
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$content = Get-Content -Raw -Path $dataPath
$data = $content | ConvertFrom-Json

foreach ($screen in $data.screens) {
    if ($screen.htmlCode.downloadUrl) {
        # Clean title for filename
        $title = $screen.title -replace '[:/<>\\|?*]', '-'
        $url = $screen.htmlCode.downloadUrl
        $filePath = Join-Path $outDir "$title.html"
        
        Write-Host "Downloading: $title"
        try {
            Invoke-WebRequest -Uri $url -OutFile $filePath -UseBasicParsing
        } catch {
            Write-Host "Failed to download $title : $($_.Exception.Message)"
        }
    }
}

Write-Host "All downloads complete!"
