$ErrorActionPreference = "Stop"

$baseDir = "C:\Users\Amit Kumar\Desktop\FP\midnight-scholar\src"

$folders = @(
    "types",
    "lib\api",
    "components\layout",
    "components\providers",
    "components\reader\sidebar",
    "components\books",
    "app\(auth)\login",
    "app\(auth)\signup",
    "app\(auth)\forgot-password",
    "app\(auth)\verify",
    "app\(auth)\onboarding",
    "app\(main)\dashboard",
    "app\(main)\library",
    "app\(main)\search",
    "app\(main)\profile",
    "app\(main)\gamification",
    "app\(main)\reading-plan",
    "app\(main)\social",
    "app\(main)\notifications",
    "app\(main)\book\[id]",
    "app\(main)\author\[id]",
    "app\(main)\read\[id]",
    "app\(main)\settings",
    "app\(teacher)\dashboard",
    "app\(admin)\monitoring",
    "app\privacy",
    "app\terms"
)

foreach ($folder in $folders) {
    $fPath = Join-Path $baseDir $folder
    if (-not (Test-Path $fPath)) {
        New-Item -ItemType Directory -Force -Path $fPath | Out-Null
    }
}

Write-Host "Frontend architecture folders created successfully inside Next.js!"
