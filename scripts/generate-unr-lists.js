#!/usr/bin/env node

// scripts/generate-unr-lists.js
// Lee laliga_ip_list.txt y genera listas UNR IPv4 / IPv6

const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "laliga_ip_list.txt");
const OUT_V4 = path.join(__dirname, "..", "laliga_ip_list_unr_ipv4.txt");
const OUT_V6 = path.join(__dirname, "..", "laliga_ip_list_unr_ipv6.txt");

function isIPv4(ip) {
  const parts = ip.split(".");
  if (parts.length !== 4) return false;
  return parts.every((p) => {
    const n = Number(p);
    return Number.isInteger(n) && n >= 0 && n <= 255;
  });
}

function isIPv6(ip) {
  return ip.includes(":");
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`❌ Source file not found: ${SRC}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(SRC, "utf8").trim();
  if (!raw) {
    console.error(`❌ Source file is empty: ${SRC}`);
    process.exit(1);
  }

  // La lista puede venir con espacios o saltos de línea → normalizamos
  const tokens = raw.replace(/\n/g, " ").split(/\s+/).filter(Boolean);

  const ipv4Set = new Set();
  const ipv6Set = new Set();

  for (const token of tokens) {
    const ip = token.trim().replace(/,$/, "");
    if (!ip) continue;

    if (isIPv4(ip)) {
      ipv4Set.add(ip);
    } else if (isIPv6(ip)) {
      ipv6Set.add(ip);
    }
  }

  const ipv4List = Array.from(ipv4Set).sort();
  const ipv6List = Array.from(ipv6Set).sort();

  console.log(`📊 IPv4 count: ${ipv4List.length}`);
  console.log(`📊 IPv6 count: ${ipv6List.length}`);

  // Contenido UNR IPv4
  const v4Content =
    [
      "# name: UNR-LaLiga-IPv4",
      "# type: address-group",
      "# description: LaLiga streaming IPv4 endpoints (auto-generated from hayahora.futbol)",
      "",
      ...ipv4List,
    ].join("\n") + "\n";

  fs.writeFileSync(OUT_V4, v4Content, "utf8");
  console.log(`✅ Written ${OUT_V4}`);

  // Contenido UNR IPv6
  const v6Content =
    [
      "# name: UNR-LaLiga-IPv6",
      "# type: ipv6-address-group",
      "# description: LaLiga streaming IPv6 endpoints (auto-generated from hayahora.futbol)",
      "",
      ...ipv6List,
    ].join("\n") + "\n";

  fs.writeFileSync(OUT_V6, v6Content, "utf8");
  console.log(`✅ Written ${OUT_V6}`);
}

main();
