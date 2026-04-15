$ErrorActionPreference = "Stop"

$baseDir = "C:\Users\Amit Kumar\Desktop\FP\midnight-scholar-export"
$indexPath = Join-Path $baseDir "index.html"

# Start building HTML
$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Midnight Scholar - Local UI Gallery</title>
    <style>
        body { font-family: 'Segoe UI', system-ui, sans-serif; background-color: #0C0A09; color: #F5F5F4; max-width: 900px; margin: 0 auto; padding: 40px; }
        h1 { color: #D97706; border-bottom: 1px solid #44403C; padding-bottom: 10px; }
        h2 { color: #7C3AED; margin-top: 30px; font-weight: normal; }
        ul { list-style-type: none; padding-left: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
        li a { display: block; background: #1C1917; border: 1px solid #44403C; padding: 12px 16px; border-radius: 8px; color: #E8E3DB; text-decoration: none; transition: 0.2s ease; }
        li a:hover { border-color: #D97706; color: #FCD34D; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(217, 119, 6, 0.15); }
    </style>
</head>
<body>
    <h1>Midnight Scholar — Frontend Gallery</h1>
    <p style="color: #A8A29E;">Click any of the panels below to preview the raw HTML code exported from the design canvas.</p>
"@

$folders = Get-ChildItem -Path $baseDir -Directory

foreach ($folder in $folders) {
    $files = Get-ChildItem -Path $folder.FullName -Filter "*.html"
    
    if ($files.Count -gt 0) {
        $html += "<h2>$($folder.Name)</h2>`n<ul>`n"
        foreach ($file in $files) {
            # Create relative path for the link
            $relPath = "$($folder.Name)/$($file.Name)"
            $name = $file.BaseName
            $html += "<li><a href='$relPath' target='_blank'>$name</a></li>`n"
        }
        $html += "</ul>`n"
    }
}

$html += @"
</body>
</html>
"@

Set-Content -Path $indexPath -Value $html -Encoding UTF8

Write-Host "Index generated at $indexPath"

# Open the file automatically in the default browser
Invoke-Item $indexPath
