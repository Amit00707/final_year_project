$ErrorActionPreference = "Stop"

$baseDir = "C:\Users\Amit Kumar\Desktop\FP\midnight-scholar-export"

# 1. Create folders
$folders = @(
    "01_design-system", "02_auth", "03_onboarding", "04_dashboard", "05_books",
    "06_reader", "07_library", "08_search", "09_profile", "10_settings", "11_gamification",
    "12_reading-plan", "13_author", "14_social", "15_notifications", "16_teacher",
    "17_admin", "18_legal", "19_landing", "20_error-pages", "21_components", "22_archive"
)

foreach ($folder in $folders) {
    $fPath = Join-Path $baseDir $folder
    if (-not (Test-Path $fPath)) {
        New-Item -ItemType Directory -Force -Path $fPath | Out-Null
    }
}

Write-Host "Folders Created. Organizing files..."

# Helper to move files with loose fuzzy matching
function Move-Screen ($screenName, $targetFolder) {
    $sourceFiles = Get-ChildItem -Path $baseDir -Filter "*$screenName*.html" -File
    foreach ($file in $sourceFiles) {
        $destPath = Join-Path $baseDir $targetFolder
        Write-Host "Moving $($file.Name) -> $targetFolder"
        Move-Item -Path $file.FullName -Destination $destPath -Force
    }
}

# 02_auth
Move-Screen "Login Page" "02_auth"
Move-Screen "Signup Page" "02_auth"
Move-Screen "Forgot Password - Dual States" "02_auth"
Move-Screen "Email Verification" "02_auth"

# 03_onboarding
Move-Screen "Onboarding- Choose Interests" "03_onboarding"
Move-Screen "Onboarding- Goal Setting" "03_onboarding"
Move-Screen "Onboarding- Choose Your First Book" "03_onboarding"

# 04_dashboard
Move-Screen "Home Dashboard" "04_dashboard"

# 05_books
Move-Screen "Book Listing Catalog" "05_books"
Move-Screen "Book Details Desktop" "05_books"
Move-Screen "Book Details with QR" "21_components"
Move-Screen "Book Reviews" "21_components"

# 06_reader
Move-Screen "Core Reader - Alternate Layout" "06_reader"
Move-Screen "Desktop Core Reader Page" "06_reader"
Move-Screen "Flashcard Sidebar View" "21_components"

# 07_library
Move-Screen "My Library (Personal Shelves)" "07_library"

# 08_search
Move-Screen "Smart Search" "08_search"

# 09_profile
Move-Screen "Scholar Profile Dashboard" "09_profile"

# 10_settings
Move-Screen "Settings & Subscription" "10_settings"

# 11_gamification
Move-Screen "Gamification Dashboard" "11_gamification"

# 12_reading-plan
Move-Screen "Reading Plan Planner" "12_reading-plan"

# 13_author
Move-Screen "Author Profile Page" "13_author"

# 14_social
Move-Screen "Social Discussion Chat Room" "14_social"

# 15_notifications
Move-Screen "Notifications System View" "15_notifications"

# 16_teacher
Move-Screen "Teacher Dashboard" "16_teacher"

# 17_admin
Move-Screen "Admin Monitoring Dashboard" "17_admin"

# 18_legal
Move-Screen "Privacy Policy - Manuscript View" "18_legal"
Move-Screen "Terms of Service" "18_legal"

# 19_landing
Move-Screen "Desktop Library Landing Page" "19_landing"
Move-Screen "Cookie Consent" "21_components"

# 20_error-pages
Move-Screen "Error States Showcase" "20_error-pages"

# 22_archive
Move-Screen "Auth Gateway Showcase" "22_archive"
Move-Screen "Library Landing Page" "22_archive"
Move-Screen "Core Reader Page - Mobile" "22_archive"
Move-Screen "System States- 404 & Offline" "22_archive"

Write-Host "Organization Complete!"
