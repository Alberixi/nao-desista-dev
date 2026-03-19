@echo off
echo 🧩 Gerador de Puzzles CTF
echo =========================
wsl -d Ubuntu -- /scripts/generate-ctf.sh %*
