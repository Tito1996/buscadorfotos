@echo off
for /f "tokens=1-3 delims=/- " %%a in ('date /t') do set FECHA=%%c-%%b-%%a
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set HORA=%%a:%%b
echo %FECHA%T%HORA%Z
git add .
git status
git commit -a -m "%FECHA%T%HORA%Z"
git push
pause