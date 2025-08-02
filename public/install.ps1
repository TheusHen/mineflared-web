$repo = "TheusHen/Mineflared"
$exeName = "mineflared-windows.exe"
$tempPath = "$env:TEMP\$exeName"

$releaseApi = "https://api.github.com/repos/$repo/releases/latest"
$releaseInfo = Invoke-RestMethod -Uri $releaseApi -Headers @{ "User-Agent" = "PowerShell" }

$asset = $releaseInfo.assets | Where-Object { $_.name -eq $exeName }

if (-not $asset) {
    Write-Error "$exeName not found in the latest release."
    exit 1
}

$uri = $asset.browser_download_url

Write-Host "Downloading $exeName..."
$webClient = New-Object System.Net.WebClient
$webClient.DownloadFile($uri, $tempPath)

Write-Host "Running $exeName..."
Start-Process -FilePath $tempPath -Wait
